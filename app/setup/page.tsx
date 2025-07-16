"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { setupNewUser } from "../server/dashboard"

export default function SetupPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const runSetup = async () => {
            try {
                const res = await setupNewUser()
                if (!res.success) {
                    setError(res.message || "Setup failed")
                    return
                }
                router.replace("/")
            } catch (err: any) {
                console.error("Setup failed:", err)
                setError(err?.message || "Unexpected error occurred")
            } finally {
                setLoading(false)
            }
        }

        runSetup()
    }, [router])

    return (
        <div className="h-screen flex items-center justify-center bg-white px-4">
            {loading ? (
                <div className="flex flex-col items-center gap-3">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                    <p className="text-sm text-gray-700">Setting up your account...</p>
                </div>
            ) : error ? (
                <div className="absolute  inset-0 flex flex-col items-center justify-center py-24 text-red-500 text-center px-4">
                    <div className="text-4xl mb-2">😞</div>
                    <p className="text-lg font-semibold">Something went wrong</p>
                    <p className="text-sm text-red-400 mt-1">please try again later</p>
                </div>
            ) : null}
        </div>
    )
}
