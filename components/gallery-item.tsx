import Image from "next/image"

interface GalleryItemProps {
  src: string
  label?: string
}

export default function GalleryItem({ src, label }: GalleryItemProps) {
  return (
    <div className="relative group cursor-pointer transform hover:scale-105 transition-all duration-500">
      <Image
        src={src || "/placeholder.svg"}
        alt="gallery"
        width={140}
        height={140}
        className="rounded-2xl object-cover shadow-lg group-hover:shadow-2xl border border-white/20"
      />
      {label && (
        <div className="absolute bottom-3 left-3 px-2 py-1 text-xs rounded-full text-white font-semibold backdrop-blur-sm shadow-md bg-gradient-to-r from-blue-500 to-purple-500">
          {label}
        </div>
      )}
    </div>
  )
}
