import { Sparkles, Star } from "lucide-react"

export default function Badge() {
  return (
    <div className="flex items-center justify-center mb-3">
      <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50">
        <Sparkles className="w-3 h-3 text-blue-600" />
        <span className="text-xs font-semibold text-blue-700">Powered by Advanced AI</span>
        <Star className="w-3 h-3 text-purple-600" />
      </div>
    </div>
  )
}
