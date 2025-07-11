"use client"

import { Users, Copy, MapPin, Sparkles, Grid3X3, Globe } from "lucide-react"

interface CategoryFiltersProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilters({ activeCategory, onCategoryChange }: CategoryFiltersProps) {
  const categories = [
    { name: "All", icon: Globe, color: "bg-orange-500", count: 1247 },
    { name: "People", icon: Users, color: "bg-red-500", count: 423 },
    { name: "Duplicates", icon: Copy, color: "bg-blue-500", count: 89 },
    { name: "Places", icon: MapPin, color: "bg-green-500", count: 156 },
    { name: "Related", icon: Sparkles, color: "bg-yellow-500", count: 334 },
    { name: "Similar", icon: Grid3X3, color: "bg-purple-500", count: 245 },
  ]

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.name

          return (
            <button
              key={category.name}
              onClick={() => onCategoryChange(category.name)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-200
                ${
                  isActive
                    ? `${category.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span>{category.name}</span>
              <span
                className={`
                px-2 py-0.5 rounded-full text-xs font-semibold
                ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"}
              `}
              >
                {category.count}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
