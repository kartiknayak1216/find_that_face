interface ContentBlockProps {
  title: string
  content: string
  link: string
}

export default function ContentBlock({ title, content, link }: ContentBlockProps) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
      <a href="#" className="mt-3 inline-block text-indigo-600 font-medium hover:underline">
        &raquo; {link}
      </a>
    </div>
  )
}
