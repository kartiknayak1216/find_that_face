"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import PricingHero from "@/components/pricing-hero"
import PricingCards from "@/components/pricing-cards"
import PricingFAQ from "@/components/pricing-faq"


export default function PricingPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
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
            <PricingCards />
            <PricingFAQ />

        </div>
    )
}
