interface SidebarItemProps {
  tag: string
  img: string
  title: string
  desc: string
  date: string
}

export default function SidebarItem({ tag, img, title, desc, date }: SidebarItemProps) {
  return (
    <div className="bg-white text-black rounded-xl overflow-hidden shadow">
      <div className="relative">
        <img src={img || "/placeholder.svg"} alt="blog" className="w-full h-40 object-cover" />
        <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold mb-1 leading-snug line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-700 mb-2 line-clamp-2">{desc}</p>
        <div className="flex justify-between items-center text-sm text-indigo-600 font-medium">
          <a href="#" className="hover:underline">
            Continue reading
          </a>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  )
}
