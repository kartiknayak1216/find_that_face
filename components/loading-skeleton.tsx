export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <div className="aspect-square bg-gray-200 animate-pulse" />
          <div className="p-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded animate-pulse flex-1" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
