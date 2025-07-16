"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingCards() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

    const monthlyPlans = [
        {
            name: "Starter",
            price: "$6.49",
            period: "/month",
            badge: "Best Deal",
            badgeColor: "bg-orange-500",
            buttonColor: "bg-orange-500 hover:bg-orange-600",
            features: [
                "25 credits included monthly",
                "Instant access upon payment",
                "Unlock basic features",
                "Explore before committing",
                "Risk-free entry",
            ],
        },
        {
            name: "Daily Pro Plan",
            price: "$17.97",
            period: "/month",
            buttonColor: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
            features: [
                "30 fresh credits every day",
                "Priority processing",
                "Never run out of credits",
                "Perfect for daily creators",
            ],
        },
        {
            name: "Elite Power Plan",
            price: "$197.00",
            period: "/month",
            buttonColor: "bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800",
            features: [
                "15,000 monthly credits",
                "Platinum VIP status",
                "Lightning-fast processing",
                "Elite-only features",
                "Enterprise analytics access",
            ],
        },
    ]

    const yearlyPlans = [
        {
            name: "Starter",
            price: "$62.30",
            period: "/year",
            badge: "Best Deal",
            badgeColor: "bg-orange-500",
            buttonColor: "bg-orange-500 hover:bg-orange-600",
            features: [
                "300 credits yearly",
                "Instant access upon payment",
                "Unlock basic features",
                "Explore before committing",
                "Risk-free entry",
            ],
        },
        {
            name: "Daily Pro Plan",
            price: "$172.80",
            period: "/year",
            buttonColor: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
            features: [
                "10,950 credits/year (30 daily)",
                "Priority processing",
                "Never run out of credits",
                "Perfect for daily creators",
            ],
        },
        {
            name: "Elite Power Plan",
            price: "$1,899.00",
            period: "/year",
            buttonColor: "bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800",
            features: [
                "180,000 yearly credits",
                "Platinum VIP status",
                "Lightning-fast processing",
                "Elite-only features",
                "Enterprise analytics access",
            ],
        },
    ]

    const plans = billingCycle === "monthly" ? monthlyPlans : yearlyPlans

    return (
        <>
            {/* Header */}
            <section className="relative z-10 py-16 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6 sm:mb-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                            Choose Your
                            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Perfect Plan
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
                            Simple pricing for everyone. Choose the plan that fits your needs.
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1.5 border border-gray-200/50 shadow-lg">
                            <button
                                onClick={() => setBillingCycle("monthly")}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${billingCycle === "monthly"
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle("yearly")}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative ${billingCycle === "yearly"
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                Yearly
                                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                    20% off
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="relative z-10 pt-2 sm:pt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div
                                        className={`absolute -top-4 left-8 ${plan.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
                                    >
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Header */}
                                <div className="text-center mb-8 pt-2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{plan.name}</h3>
                                    <div className="mb-8">
                                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                                        <span className="text-gray-500 ml-1">{plan.period}</span>
                                    </div>

                                    <Button
                                        className={`w-full py-4 rounded-2xl font-semibold text-lg ${plan.buttonColor} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                                    >
                                        Start now
                                    </Button>
                                </div>

                                {/* Features */}
                                <div className="space-y-4">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
