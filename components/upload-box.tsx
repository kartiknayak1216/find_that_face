"use client"

import { useState, useRef } from "react"
import { ImageIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useUser, SignInButton } from "@clerk/nextjs"
import { getUserCreditStatus } from "@/app/server/dashboard"

export default function UploadBox() {
  const [dragActive, setDragActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { isSignedIn, user } = useUser()

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true)
    if (e.type === "dragleave") setDragActive(false)
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const file = e.dataTransfer.files?.[0]
    if (!file) return
    await handleFileUpload(file)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    await handleFileUpload(file)
  }

  const handleFileUpload = async (file: File) => {
    try {
      setLoading(true)
      setError("")

      // Step 1: Check server credits
      const result = await getUserCreditStatus()
      if (!result.ok) {
        setError(result.message! || "Upload Failed")
        return
      }
      // Step 2: Upload image to external API
      const formData = new FormData()
      formData.append("image", file)

      const uploadRes = await fetch("https://backend-service2-emct.onrender.com/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!uploadRes.ok) {
        setError("Upload Failed")
        return
      }

      const { url } = await uploadRes.json()
      const params = new URLSearchParams({ url}).toString()
      console.log(url)
     router.push(`/results?${params}`)
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
      />

      {!isSignedIn ? (
        <SignInButton mode="modal" forceRedirectUrl={"/setup"}>
          <div
            className={`relative group cursor-pointer transition-all duration-700 ${dragActive ? "scale-105" : "hover:scale-102"}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div
              className={`relative border-2 border-dashed rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 ${dragActive
                ? "border-blue-400/60 bg-gradient-to-br from-blue-50/90 to-purple-50/90 shadow-2xl"
                : "border-gray-300/40 bg-white/60 hover:bg-white/80 hover:border-orange-400/60 shadow-xl hover:shadow-2xl"
                }`}
            >
              <div className="relative flex flex-col items-center space-y-3">
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${dragActive
                      ? "bg-gradient-to-br from-blue-500 to-purple-600 scale-110"
                      : "bg-gradient-to-br from-orange-500 to-red-500 group-hover:from-blue-500 group-hover:to-purple-600"
                      }`}
                  >
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-all duration-500 ${dragActive
                      ? "bg-gradient-to-br from-green-400 to-emerald-500 scale-125"
                      : "bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110"
                      }`}
                  >
                    <span className="text-white font-bold text-xs">+</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800 mb-1">Drop, paste</p>
                  <p className="text-lg text-gray-700">
                    or{" "}
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold">
                      upload an image
                    </span>
                  </p>
                  <div className="mt-2 flex items-center justify-center space-x-3 text-xs text-gray-500">
                    <span>JPG, PNG, WebP</span>
                    <span>•</span>
                    <span>Max 50MB</span>
                    <span>•</span>
                    <span>AI Analysis</span>
                  </div>
                  {loading && <p className="text-blue-500 mt-2">Processing image...</p>}
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
              </div>
            </div>
          </div>
        </SignInButton>
      ) : (
        <div
          className={`relative group cursor-pointer transition-all duration-700 ${dragActive ? "scale-105" : "hover:scale-102"}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div
            className={`relative border-2 border-dashed rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 ${dragActive
              ? "border-blue-400/60 bg-gradient-to-br from-blue-50/90 to-purple-50/90 shadow-2xl"
              : "border-gray-300/40 bg-white/60 hover:bg-white/80 hover:border-orange-400/60 shadow-xl hover:shadow-2xl"
              }`}
          >
            <div className="relative flex flex-col items-center space-y-3">
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${dragActive
                    ? "bg-gradient-to-br from-blue-500 to-purple-600 scale-110"
                    : "bg-gradient-to-br from-orange-500 to-red-500 group-hover:from-blue-500 group-hover:to-purple-600"
                    }`}
                >
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-all duration-500 ${dragActive
                    ? "bg-gradient-to-br from-green-400 to-emerald-500 scale-125"
                    : "bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110"
                    }`}
                >
                  <span className="text-white font-bold text-xs">+</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg font-bold text-gray-800 mb-1">Drop, paste</p>
                <p className="text-lg text-gray-700">
                  or{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold">
                    upload an image
                  </span>
                </p>
                <div className="mt-2 flex items-center justify-center space-x-3 text-xs text-gray-500">
                  <span>JPG, PNG, WebP</span>
                  <span>•</span>
                  <span>Max 50MB</span>
                  <span>•</span>
                  <span>AI Analysis</span>
                </div>
                {loading && <p className="text-blue-500 mt-2">Processing image...</p>}
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
