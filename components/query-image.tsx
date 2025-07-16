"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Upload, RotateCcw } from "lucide-react"
import Link from "next/link"

type QueryImageProps = {
  imageUrl: string
}

export default function QueryImage({ imageUrl }: QueryImageProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-6">
      <div className="relative mb-4">
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 border-2 border-gray-300">
          <Image
            src={imageUrl}
            alt="Query image"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Link href={"/"}>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl">
            <Upload className="w-4 h-4 mr-2" />
            Upload new photo
          </Button>
        </Link>

        <div className="flex gap-2">

          <Button variant="outline" size="sm" className="flex-1 border-gray-300 hover:bg-gray-50 bg-transparent">
            <RotateCcw className="w-4 h-4 mr-1" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="flex-1 border-gray-300 hover:bg-gray-50 bg-transparent">
            <RotateCcw className="w-4 h-4 mr-1" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Search Info */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600 space-y-1">
          <div className="flex justify-between">
            <span>Total results:</span>
            <span className="font-semibold">1,247</span>
          </div>
          <div className="flex justify-between">
            <span>Search time:</span>
            <span className="font-semibold">0.34s</span>
          </div>
        </div>
      </div>
    </div>
  )
}
