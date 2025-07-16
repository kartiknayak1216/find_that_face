"use client"

import { useState } from "react"
import PricingCard from "@/components/pricing-card"

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Starter",
      badge: "Best Deal",
      badgeColor: "from-orange-500 to-red-500",
      buttonStyle: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white",
      monthlyPrice: "$6.49",
      yearlyPrice: "$59.99",
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
      buttonStyle: "bg-white/20 hover:bg-white/30 text-white border border-white/30",
      monthlyPrice: "$17.97",
      yearlyPrice: "$172.99",
      features: [
        "30 fresh credits every day",
        "Priority processing",
        "Never run out of credits",
        "Perfect for daily creators",
      ],
    },
    {
      name: "Elite Power Plan",
      buttonStyle: "bg-white/20 hover:bg-white/30 text-white border border-white/30",
      monthlyPrice: "$197.00",
      yearlyPrice: "$1860.00",
      features: [
        "15,000 monthly credits",
        "Platinum VIP status",
        "Lightning-fast processing",
        "Elite-only features",
        "Enterprise analytics access"
      ],
    },
  ]

  return (
    <section className="relative z-10 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-300 font-medium mb-4">
            Want to get unlimited access to photo sources?
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-8">Subscription plans</h2>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${billingCycle === "monthly"
                ? "bg-white text-gray-900"
                : "text-white hover:bg-white/10"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-3 rounded-full relative font-semibold transition-all duration-300 ${billingCycle === "yearly"
                ? "bg-white text-gray-900"
                : "text-white hover:bg-white/10"
                }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-orange-500 text-xs px-2 py-1 rounded-full font-bold">
                20% off
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              badge={plan.badge}
              badgeColor={plan.badgeColor}
              price={billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
              period={billingCycle === "monthly" ? "/month" : "/year"}
              buttonStyle={plan.buttonStyle}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
