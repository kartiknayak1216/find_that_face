import SidebarItem from "@/components/sidebar-item"

export default function Sidebar() {
  const sidebarItems = [
    {
      tag: "Guides",
      img: "/thumbnail1.webp",
      title: "How does picture search with AI work? Check free AI reverse image…",
      desc: "Reverse photo lookup helps us find images in seconds. All we need is an…",
      date: "25.09.2024",
    },
    {
      tag: "News",
      img: "/thumbnail1.webp",
      title: "AI Image Search with Facial Recognition — Lenso.ai",
      desc: "Looking for people, places, duplicates and more? Lenso.ai Reverse Image…",
      date: "25.09.2024",
    },
    {
      tag: "Guides",
      img: "/thumbnail1.webp",
      title: "Lenso.ai for Developers | How to integrate Reverse Image Search API…",
      desc: "Lenso.ai's API is finally here! If you are interested in integrating lenso.a…",
      date: "06.03.2025",
    },
    {
      tag: "Guides",
      img: "/thumbnail1.webp",
      title: "Lenso.ai for Developers | How to integrate Reverse Image Search API…",
      desc: "Lenso.ai's API is finally here! If you are interested in integrating lenso.a…",
      date: "06.03.2025",
    },
  ]

  return (
    <aside className="bg-[#1e1b4b] rounded-2xl p-6 text-white space-y-6">
      <h2 className="text-2xl font-bold mb-4">More about lenso.ai's Image Search</h2>
      {sidebarItems.map((item, index) => (
        <SidebarItem key={index} {...item} />
      ))}
    </aside>
  )
}
