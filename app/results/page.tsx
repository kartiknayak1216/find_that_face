"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import QueryImage from "@/components/query-image"
import CategoryFilters from "@/components/category-filters"
import ResultsGrid from "@/components/results-grid"
import type { SearchResult } from "@/types/search-result"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const imageUrl = searchParams.get("url")
  const token = searchParams.get("token")

  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("All")
  const [displayCount, setDisplayCount] = useState(12)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchResults = async () => {
      if (!imageUrl || !token) {
        setError("Missing image URL or token.")
        setLoading(false)
        return
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/api/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image_url: imageUrl,
            user_id: 123, // Replace with real user ID if needed
            token: token,
          }),
        })

        if (!response.ok) throw new Error("Search API request failed")

        const data = await response.json()
        console.log(data)
        setResults(data.results || [])
      } catch (err: any) {
        console.error("Search error:", err)
        setError(err.message || "Failed to fetch results")
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [imageUrl, token])

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + 12)
  }

  const filteredResults = results.slice(0, displayCount)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Query Image */}
          <div className="lg:w-80 flex-shrink-0">
            {imageUrl ? (
              <QueryImage imageUrl={imageUrl} />
            ) : (
              <p className="text-sm text-gray-500">No image provided.</p>
            )}
          </div>

          {/* Right Content - Results */}
          <div className="flex-1">
            <CategoryFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {error && (
              <p className="text-red-500 font-semibold mb-4">{error}</p>
            )}

            <ResultsGrid
              results={filteredResults}
              loading={loading}
              onShowMore={handleShowMore}
              hasMore={displayCount < results.length}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
