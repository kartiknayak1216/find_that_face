"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Lock, Eye } from "lucide-react"
import type { SearchResult } from "@/types/search-result"
import LoadingSkeleton from "@/components/loading-skeleton"

interface ResultsGridProps {
  results: SearchResult[]
  loading: boolean
  onShowMore: () => void
  hasMore: boolean
}

export default function ResultsGrid({ results, loading, onShowMore, hasMore }: ResultsGridProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const handleImageError = (group: number) => {
    setImageErrors((prev) => new Set([...prev, group]))
  }

  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname
      return domain.replace("www.", "")
    } catch {
      return "Unknown source"
    }
  }

  if (loading) {
    return <LoadingSkeleton />
  }

  return (
    <div>
      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {results.map((result, index) => (
          <ResultCard
            key={`${result.group}-${index}`}
            result={result}
            domain={getDomainFromUrl(result.sourceUrl)}
            hasError={imageErrors.has(result.group)}
            onImageError={() => handleImageError(result.group)}
          />
        ))}
      </div>

      {/* Show More Button */}
      {hasMore && (
        <div className="text-center">
          <Button
            onClick={onShowMore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Show more results
          </Button>
        </div>
      )}

      {/* Results Summary */}
      <div className="mt-8 text-center text-gray-500 text-sm">Showing {results.length} of 1,247 results</div>
    </div>
  )
}

interface ResultCardProps {
  result: SearchResult
  domain: string
  hasError: boolean
  onImageError: () => void
}

function ResultCard({ result, domain, hasError, onImageError }: ResultCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100">
        {!hasError ? (
          <>
            <Image
              src={result.imageUrl || "/placeholder.svg"}
              alt="Search result"
              fill
              className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImageLoaded(true)}
              onError={onImageError}
            />
            {!imageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <Eye className="w-8 h-8 mx-auto mb-2" />
              <span className="text-sm">Image unavailable</span>
            </div>
          </div>
        )}

        {/* Overlay */}
        <div
          className={`
          absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
        >
          <Button
            size="sm"
            className="bg-white/90 hover:bg-white text-gray-900 font-medium"
            onClick={() => window.open(result.sourceUrl, "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            View source
          </Button>
        </div>

        {/* Premium Badge */}
        {Math.random() > 0.7 && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Lock className="w-3 h-3" />
            Premium
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700 truncate">{domain}</span>
          </div>
          <div className="text-xs text-gray-500 ml-2">{Math.floor(Math.random() * 100) + 1}%</div>
        </div>
      </div>
    </div>
  )
}
