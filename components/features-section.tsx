import { Sparkles, Search, Zap, Globe, Bell, Share2, Bookmark } from "lucide-react"
import FeatureCard from "@/components/feature-card"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Advanced URL & Text Filters",
      desc: "Refine with URLs to search on a specific website, or add keywords for the best results!",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Sort Search Results",
      desc: "Sort your results from the best to the most diverse or view the newest discoveries to explore more.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Explore More Results",
      desc: "Click on any category to explore more similar results and make your search more precise.",
      gradient: "from-green-500 to-blue-600",
    },
    {
      icon: <Bell className="w-8 h-8 text-white" />,
      title: "Set Alerts",
      desc: "Set alerts for categories you're interested in and receive updates when new matches appear.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: "Share Searches",
      desc: "Copy link to any search and send it to anyone to share the results. No one else can see your search.",
      gradient: "from-indigo-500 to-blue-700",
    },
    {
      icon: <Bookmark className="w-8 h-8 text-white" />,
      title: "Create Collections",
      desc: "Automatically save all unlocked results and create collections to group and revisit results by topic.",
      gradient: "from-pink-500 to-purple-700",
    },
  ]

  return (
    <section className="relative z-10 py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Advanced Searching Made Simple</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Navigate Your Searches Better</h2>
          <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            with lenso.ai's Features
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
