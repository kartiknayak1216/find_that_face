import { Zap } from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "About Us",
      links: ["Pricing", "API", "Privacy Protection"],
    },
    {
      title: "Resources",
      links: ["FAQ", "Blog", "Contact"],
    },
    {
      title: "Legal Help",
      links: ["Opt-Out", "DMCA", "Privacy Policy", "Terms & Conditions"],
    },
    {
      title: "Pages",
      links: ["Reverse Image Search", "Face Search", "Copyright Search", "For Shareholders"],
    },
  ]

  const socialIcons = [
    { icon: "𝕏", color: "text-blue-400" },
    { icon: "📺", color: "text-blue-400" },
    { icon: "f", color: "text-blue-400" },
    { icon: "📷", color: "text-pink-400" },
    { icon: "in", color: "text-blue-400" },
  ]

  return (
    <footer className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <div className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="block text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">lenso.ai</span>
          </div>

          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <span className={social.color}>{social.icon}</span>
              </a>
            ))}
          </div>

          <div className="text-gray-400 text-sm">lenso.ai 2025© v1.0</div>
        </div>
      </div>
    </footer>
  )
}
