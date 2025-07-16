"use server"
import { prisma } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { currentUser } from "@clerk/nextjs/server"

export async function getUserCreditStatus() {
    const user = await currentUser()

    if (!user || !user.id) {
        return {
            ok: false,
            message: "User not authenticated",
        }
    }

    const dbUser = await prisma.user.findUnique({
        where: { clerkUserId: user.id },
        include: { credits: true },
    })

    if (!dbUser || !dbUser.credits) {
        return {
            ok: false,
            message: "User not found",
        }
    }

    const { is_daily, today_used, daily_credits_assigned, used_credit, monthly_credits_assigned } = dbUser.credits

    const remaining = is_daily
        ? daily_credits_assigned - today_used
        : monthly_credits_assigned - used_credit

    if (remaining <= 0) {
        return {
            ok: false,
            message: "No available credits",
        }
    }

    return {
        ok: true,
        creditsLeft: remaining,
    }
}


export async function getDashboardData() {
     const { userId: clerkUserId } = await auth() // this is Clerk ID

    if (!clerkUserId) return null

    const user = await prisma.user.findUnique({
        where: { clerkUserId },
        include: { subscription: true, credits: true }, // include credits directly!
    })

    if (!user || !user.subscription || !user.credits) return null

    const credits = user.credits
    const today = new Date()
    const dayOfMonth = today.getDate()
    const isDaily = credits.is_daily

    const totalCredits = isDaily
        ? (credits.daily_credits_assigned ?? 0) * 30
        : credits.monthly_credits_assigned ?? 0

    const usedThisMonth = credits.used_credit ?? 0
    const usedToday = credits.today_used ?? 0
    const remainingToday = isDaily ? (credits.daily_credits_assigned ?? 0) - usedToday : null
    const remainingThisMonth = totalCredits - usedThisMonth
    const avgPerDay = +(usedThisMonth / dayOfMonth).toFixed(1)
    const percentUsed = +((usedThisMonth / totalCredits) * 100).toFixed(1)

    return {
        usedToday,
        remainingToday,
        usedThisMonth,
        remainingThisMonth,
        totalCredits,
        avgPerDay,
        percentUsed,
        isDaily,
        plan: user.subscription.plan,
        period: user.subscription.duration,
    }
}
export async function getPlanOverviewData() {
    const { userId: clerkUserId } = await auth()
    if (!clerkUserId) return null

    const user = await prisma.user.findUnique({
        where: { clerkUserId },
        include: {
            subscription: true,
            credits: true,
        },
    })

    if (!user || !user.subscription || !user.credits) return null

    const {
        plan,
        duration,
        status,
        currentPeriodEnd,
        price
    } = user.subscription

    const {
        daily_credits_assigned,
        monthly_credits_assigned,
        is_daily
    } = user.credits

    return {
        name: plan,
        billingCycle: duration,
        price,
        isActive: status === "active",
        isDaily: is_daily,
        isMonthly: duration === "monthly",
        credits: is_daily ? daily_credits_assigned : monthly_credits_assigned,
        dailyCredits: is_daily ? daily_credits_assigned : 0,
        currentPeriodEnd: currentPeriodEnd.toISOString(),
        status
    }
}

export async function getBillingHistory() {
    const { userId: clerkUserId } = await auth()
    if (!clerkUserId) return []

    const user = await prisma.user.findUnique({
        where: { clerkUserId },
        select: {
            id: true,
        },
    })

    if (!user) return []

    const history = await prisma.billingHistory.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            paidAt: "desc",
        },
    })

    return history.map(entry => ({
        invoiceId: entry.stripeInvoiceId,
        amount: entry.amount / 100, // assuming amount is stored in cents
        currency: entry.currency.toUpperCase(),
        plan: entry.planName,
        cycle: entry.billingCycle,
        status: entry.status,
        paidAt: entry.paidAt.toISOString(),
    }))
}
export async function setupNewUser() {
    try {
        const user = await currentUser();

        if (!user || !user.id || !user.emailAddresses[0]?.emailAddress) {
            return {
                success: false,
                message: "Not authenticated",
            };
        }

        const existing = await prisma.user.findUnique({
            where: { clerkUserId: user.id },
        });

        if (!existing) {
            await prisma.user.create({
                data: {
                    clerkUserId: user.id,
                    email: user.emailAddresses[0].emailAddress,
                    name: user.username || user.firstName || "Anonymous",
                    credits: {
                        create: {
                            monthly_credits_assigned: 2,
                            is_daily: false,
                        },
                    },
                    subscription: {
                        create: {
                            stripeSubId: `free_sub_${user.id}`,
                            plan: "Free Plan",
                            status: "active",
                            duration: "monthly",
                            price: 0,
                            currentPeriodEnd: new Date(new Date().setMonth(new Date().getMonth() + 1)),
                        },
                    },
                    billingHistory: {
                        create: {
                            stripeInvoiceId: `free_invoice_${user.id}`,
                            amount: 0,
                            status: "paid",
                            planName: "Free Plan",
                            billingCycle: "monthly",
                            paidAt: new Date(),
                        },
                    },
                },
            });

            return {
                success: true,
                message: "User created and initialized with free plan",
            };
        }

        return {
            success: true,
            message: "User already exists",
        };
    } catch (error: any) {
        return {
            success: false,
            message: error?.message || "Something went wrong",
        };
    }
}
