import { prisma } from "@/lib/db"
import { getDashboardData } from "./dashboard"

 export async function seedAndTest() {
    // Clear previous test data (optional)
    await prisma.credits.deleteMany({})
    await prisma.subscription.deleteMany({})
    await prisma.user.deleteMany({})

    // 1. Daily Plan User
    const user1 = await prisma.user.create({
        data: {
            clerkUserId: "daily-user-123",
            email: "daily@example.com",
            name: "Daily User",
            subscription: {
                create: {
                    stripeSubId: "sub_daily_123",
                    plan: "daily-pro",
                    status: "active",
                    duration: "month",
                    currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
                },
            },
            credits: {
                create: {
                    is_daily: true,
                    daily_credits_assigned: 30,
                    monthly_credits_assigned: 0,
                    used_credit: 120,
                    today_used: 5,
                },
            },
        },
    })

    // 2. Monthly Plan User
    const user2 = await prisma.user.create({
        data: {
            clerkUserId: "monthly-user-456",
            email: "monthly@example.com",
            name: "Monthly User",
            subscription: {
                create: {
                    stripeSubId: "sub_monthly_456",
                    plan: "starter",
                    status: "active",
                    duration: "month",
                    currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                },
            },
            credits: {
                create: {
                    is_daily: false,
                    daily_credits_assigned: 0,
                    monthly_credits_assigned: 100,
                    used_credit: 40,
                    today_used: 8,
                },
            },
        },
    })

    // 3. Yearly Plan User
    const user3 = await prisma.user.create({
        data: {
            clerkUserId: "yearly-user-789",
            email: "yearly@example.com",
            name: "Yearly User",
            subscription: {
                create: {
                    stripeSubId: "sub_yearly_789",
                    plan: "elite",
                    status: "active",
                    duration: "year",
                    currentPeriodEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                },
            },
            credits: {
                create: {
                    is_daily: false,
                    daily_credits_assigned: 0,
                    monthly_credits_assigned: 2000,
                    used_credit: 250,
                    today_used: 15,
                },
            },
        },
    })

    // Call your dashboard function for each
    console.log("📊 Daily Plan Dashboard:")
    console.log(await getDashboardData("daily-user-123"))

    console.log("\n📊 Monthly Plan Dashboard:")
    console.log(await getDashboardData("monthly-user-456"))

    console.log("\n📊 Yearly Plan Dashboard:")
    console.log(await getDashboardData("yearly-user-789"))
}

seedAndTest()
    .then(() => {
        console.log("\n✅ Test completed.")
        process.exit(0)
    })
    .catch((error) => {
        console.error("❌ Error during test:", error)
        process.exit(1)
    })

