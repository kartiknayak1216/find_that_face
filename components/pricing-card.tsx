interface PricingCardProps {
  name: string
  price: string
  period: string
  badge?: string
  badgeColor?: string
  buttonStyle: string
  features: string[]
}

export default function PricingCard({
  name,
  price,
  period,
  badge,
  badgeColor,
  buttonStyle,
  features,
}: PricingCardProps) {
  return (
    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group">
      {badge && (
        <div
          className={`absolute -top-4 left-8 bg-gradient-to-r ${badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold`}
        >
          {badge}
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <div className="mb-6">
          <span className="text-5xl font-black">{price}</span>
          <span className="text-gray-300 ml-2">{period}</span>
        </div>
        <button
          className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${buttonStyle}`}
        >
          Start now
        </button>
      </div>

      <div className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-200">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
