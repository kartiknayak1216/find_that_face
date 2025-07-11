import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  desc: string
  gradient: string
}

export default function FeatureCard({ icon, title, desc, gradient }: FeatureCardProps) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:scale-105">
      <div
        className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  )
}
