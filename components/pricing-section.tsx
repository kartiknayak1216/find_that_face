import PricingCard from "@/components/pricing-card"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$15.99",
      period: "/month",
      badge: "Best Deal",
      badgeColor: "from-orange-500 to-red-500",
      buttonStyle: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white",
      features: [
        "Unlock up to 50 search results",
        "Set up 10 alerts notifying you of new results",
        "Unlimited searches",
        "Filter by domain and text prompts",
      ],
    },
    {
      name: "Professional",
      price: "$69.99",
      period: "/month",
      buttonStyle: "bg-white/20 hover:bg-white/30 text-white border border-white/30",
      features: [
        "Unlock up to 500 search results",
        "Set up 50 alerts notifying you of new results",
        "Everything in Starter",
        "All-in-one solution",
      ],
    },
    {
      name: "Developer",
      price: "$2,800.00",
      period: "/month",
      buttonStyle: "bg-white/20 hover:bg-white/30 text-white border border-white/30",
      features: [
        "Up to 5000 API requests",
        "Unlock up to 5000 search results",
        "Set up 500 alerts notifying you of new results",
        "Priority Support Service",
      ],
    },
  ]

  return (
    <section className="relative z-10 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-300 font-medium mb-4">Want to get unlimited access to photo sources?</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-8">Subscription plans</h2>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold transition-all duration-300">
              Monthly
            </button>
            <button className="px-6 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 relative">
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
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
