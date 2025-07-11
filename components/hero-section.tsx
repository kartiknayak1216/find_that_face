import GalleryItem from "@/components/gallery-item"
import Badge from "@/components/badge"
import PulseIndicator from "@/components/pulse-indicator"
import UploadBox from "@/components/upload-box"

export default function HeroSection() {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 py-4">
      <div className="flex justify-between items-center gap-6">
        {/* Left Gallery */}
        <div className="hidden lg:flex flex-col gap-4 w-44">
          <GalleryItem src="/3.jpg" label="places" />
          <GalleryItem src="/9.jpg" />
          <GalleryItem src="/4.jpg" label="people" />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center flex-1 max-w-2xl">
          <Badge />

          <h1 className="text-3xl lg:text-4xl font-black mb-2 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              AI Reverse Image
            </span>
          </h1>
          <h1 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
            <span className="text-gray-800">Search with </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              lenso.ai
            </span>
          </h1>

          <p className="text-base text-gray-600 font-medium mb-2">
            Find places, people, duplicates, and more with unprecedented accuracy
          </p>

          <div className="flex items-center justify-center gap-3 text-xs text-gray-500 mb-6">
            <PulseIndicator text="99.9% Uptime" color="green" />
            <PulseIndicator text="Billion+ Images" color="blue" />
            <PulseIndicator text="Enterprise Grade" color="purple" />
          </div>

          <UploadBox />

          <p className="text-base text-gray-600 font-medium mt-4">
            Explore billions of images from all around the web.
          </p>
        </div>

        {/* Right Gallery */}
        <div className="hidden lg:flex flex-col gap-4 w-44">
          <GalleryItem src="/1.jpg" />
          <GalleryItem src="/8.jpg" label="related" />
          <GalleryItem src="/5.jpg" label="duplicates" />
        </div>
      </div>
    </main>
  )
}
