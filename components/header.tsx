import { Button } from "@/components/ui/button"
import { Zap, Shield } from "lucide-react"

export default function Header() {
  const navItems = ["Reverse Image Search", "Face Search", "Copyright Search"]

  return (
    <header className="relative z-10 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                lenso.ai
              </span>
              <div className="text-xs text-gray-500 font-medium">PROFESSIONAL</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Login Button */}
          <div className="flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Shield className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
