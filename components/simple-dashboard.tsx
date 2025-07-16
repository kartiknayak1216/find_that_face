"use client"

import { Button } from "@/components/ui/button"
import { Zap, Calendar, TrendingUp, Plus } from "lucide-react"
import { getDashboardData } from "@/app/server/dashboard"
import Link from "next/link"

type Props = {
    data: Awaited<ReturnType<typeof getDashboardData>>
}

export default function SimpleDashboard({ data }: Props) {
    if (!data) {
        return (
            <div className="text-center text-gray-600 py-12">
                Unable to fetch dashboard data.
            </div>
        )
    }

    return (
        <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Credits Used Today */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/30 shadow-xl">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-gray-900 mb-2">{data.usedToday}</div>
                    <div className="text-gray-600 font-medium">Credits used today</div>
                    {data.isDaily && (
                        <div className="text-sm text-gray-500 mt-1">{data.remainingToday} remaining</div>
                    )}
                </div>

                {/* Credits Left This Month */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/30 shadow-xl">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-gray-900 mb-2">{data.remainingThisMonth}</div>
                    <div className="text-gray-600 font-medium">Credits left this {data.period}</div>
                    <div className="text-sm text-gray-500 mt-1">out of {data.totalCredits} total</div>
                </div>

                {/* Monthly Usage */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/30 shadow-xl">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-gray-900 mb-2">{data.usedThisMonth}</div>
                    <div className="text-gray-600 font-medium">Used this {data.period}</div>
                    <div className="text-sm text-gray-500 mt-1">{data.avgPerDay} avg per day</div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Progress</h3>
                    <span className="text-sm text-gray-600">{data.percentUsed}% used</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${data.percentUsed}%` }}
                    ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>{data.usedThisMonth} used</span>
                    <span>{data.totalCredits} total</span>
                </div>
            </div>

            {/* Quick Actions */}
            <Link href={"/pricing"}>
            <div className="text-center">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Plus className="w-5 h-5 mr-2" />
                    Buy More Credits
                </Button>
            </div>
            </Link>
        </main>
    )
}
