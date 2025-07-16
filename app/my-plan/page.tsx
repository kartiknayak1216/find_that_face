"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import PlanOverview from "@/components/plan-overview"
import BillingHistory from "@/components/billing-history"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBillingHistory, getPlanOverviewData } from "../server/dashboard"

export default function MyPlanPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [dashboard, setDashboard] = useState<Awaited<ReturnType<typeof getPlanOverviewData>> | null>(null)
    const [billing, setBilling] = useState<Awaited<ReturnType<typeof getBillingHistory>> | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await getPlanOverviewData()
                const billing = await getBillingHistory()
                if (!data) {
                    setError("No dashboard data found.")
                    return
                }
                setDashboard(data)
                setBilling(billing)
            } catch (err: any) {
                console.error("Dashboard fetch error:", err)
                setError(err.message || "Oops! Something went wrong.")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                        left: "10%",
                        top: "20%",
                    }}
                />
                <div
                    className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
                        right: "10%",
                        bottom: "20%",
                    }}
                />
            </div>

            <Header />

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {loading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm z-50">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                            <p className="text-lg font-medium text-gray-700">Loading your dashboard...</p>
                        </div>
                    </div>
                )}


                {/* Error Message */}
                {error && (
                    <div className="absolute  inset-0 flex flex-col items-center justify-center py-24 text-red-500 text-center px-4">
                        <div className="text-4xl mb-2">😞</div>
                        <p className="text-lg font-semibold">Something went wrong</p>
                        <p className="text-sm text-red-400 mt-1">please try again later</p>
                    </div>
                )}

                {/* Dashboard Grid */}
                {!loading && !error && dashboard && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Plan Overview & Usage */}
                        <div className="lg:col-span-2 space-y-8">
                            <PlanOverview data={dashboard} />
                        </div>

                        {/* Right Column - Actions & Billing */}
                        <div className="space-y-8">
                            <BillingHistory data={billing} />
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}
