"use client"

import { useState } from "react"

export default function PricingHero() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

    return (
        <section className="relative z-10 py-16 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
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
    )
}
