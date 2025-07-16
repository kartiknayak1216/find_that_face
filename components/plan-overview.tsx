"use client"

import { Crown, Calendar, CreditCard } from "lucide-react"
import { getPlanOverviewData } from "@/app/server/dashboard"
import { getFeatures } from "@/app/my-plan/helper"

type Params = {
    data: Awaited<ReturnType<typeof getPlanOverviewData>> | null
}

export default function PlanOverview({ data }: Params) {
    if (!data) {
        return (
            <div className="absolute inset-0 flex flex-col items-center justify-center py-24 text-red-500 text-center px-4">
                <div className="text-4xl mb-2">😞</div>
                <p className="text-lg font-semibold">Something went wrong</p>
                <p className="text-sm text-red-400 mt-1">Please try again later</p>
            </div>
        )
    }

    const {
        name,
        billingCycle,
        price,
        isActive,
        isDaily,
        isMonthly,
        credits,
        currentPeriodEnd,
        status,
    } = data

    const isExpired = !isActive
    const formattedDate = new Date(currentPeriodEnd).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })

    const benefits = getFeatures(name)

    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500 text-white font-semibold text-sm capitalize">
                    <Crown className="w-4 h-4" />
                    {name} Plan
                </div>
                {/*  <div className="px-4 py-1 rounded-full bg-orange-500 text-white font-semibold text-sm capitalize">
                    {billingCycle} 
                </div>*/}
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {/* Price */}
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <CreditCard className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">${price}</div>
                    <div className="text-sm text-gray-500 mt-1">per {billingCycle.toLowerCase()}</div>
                </div>

                {/* Credits */}
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-green-600 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{credits}</span>
                    </div>
                    <div className="text-xl font-semibold text-gray-900">{isDaily ? "Daily" : "Monthly"}</div>
                    <div className="text-sm text-gray-500 mt-1">{isDaily ? "fresh credits" : "total credits"}</div>
                </div>

                {/* Next Billing */}
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
                        <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div className={`text-lg font-bold ${isExpired ? "text-red-600" : "text-gray-900"}`}>
                        {isExpired ? "Expired" : formattedDate}
                    </div>
                    <div className="text-sm text-gray-500">
                        {isExpired ? "Subscription inactive" : "Next billing"}
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Plan Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-gray-700">
                    {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
