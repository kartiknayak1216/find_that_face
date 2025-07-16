"use client"

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import {
    Menu,
    Search,
    Users,
    Shield,
    CreditCard,
    DollarSign,
    LayoutDashboard,
    LogOut,
    Zap,
    Globe,
    Bell,
    Settings,
    HelpCircle,
    Star,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const mainNavItems = [
    { page: "Reverse Image Search", link: "/", icon: Search },
    { page: "Face Search", link: "/", icon: Users },
    //  { page: "Copyright Search", link: "/copyright", icon: Shield },
]

const accountItems = [
    { page: "Dashboard", link: "/dashboard", icon: LayoutDashboard },
    { page: "My Plan", link: "/my-plan", icon: CreditCard },
    { page: "Pricing", link: "/pricing", icon: DollarSign },
    // { page: "Settings", link: "/settings", icon: Settings },
]

const supportItems = [
    { page: "Help Center", link: "/help", icon: HelpCircle },
    //{ page: "API Documentation", link: "/api", icon: Globe },
    //  { page: "Notifications", link: "/notifications", icon: Bell },
]

export default function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    <Menu className="w-6 h-6" />
                </button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-80 px-0 py-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 backdrop-blur-xl border-l border-white/30 shadow-2xl flex flex-col"
            >
                {/* Header */}
                <div className="px-6 py-6 bg-white/80 backdrop-blur-sm border-b border-white/30">
                    <SheetHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="relative">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg transform rotate-3">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                            </div>
                            <div>
                                <SheetTitle className="text-lg font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                                    lenso.ai
                                </SheetTitle>
                                <div className="text-xs text-gray-500 font-medium">PROFESSIONAL</div>
                            </div>
                        </div>
                    </SheetHeader>

                    {/* Login Button for Mobile */}

                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {/* Main Navigation */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">Search Tools</h3>
                        <div className="space-y-2">
                            {mainNavItems.map(({ page, link, icon: Icon }, index) => (
                                <SheetClose asChild key={index}>
                                    <Link
                                        href={link}
                                        className="flex items-center gap-3 p-3 text-gray-800 hover:text-blue-600 hover:bg-white/60 rounded-xl font-medium transition-all duration-200 group"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white shadow-md group-hover:scale-110 transition-transform duration-200">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-base">{page}</span>
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </div>

                    {/* Account Section */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">Account</h3>
                        <div className="space-y-2">
                            {accountItems.map(({ page, link, icon: Icon }, index) => (
                                <SheetClose asChild key={index}>
                                    <Link
                                        href={link}
                                        className="flex items-center gap-3 p-3 text-gray-800 hover:text-blue-600 hover:bg-white/60 rounded-xl font-medium transition-all duration-200 group"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-md group-hover:scale-110 transition-transform duration-200">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-base">{page}</span>
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">Support</h3>
                        <div className="space-y-2">
                            {supportItems.map(({ page, link, icon: Icon }, index) => (
                                <SheetClose asChild key={index}>
                                    <Link
                                        href={link}
                                        className="flex items-center gap-3 p-3 text-gray-800 hover:text-blue-600 hover:bg-white/60 rounded-xl font-medium transition-all duration-200 group"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-md group-hover:scale-110 transition-transform duration-200">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-base">{page}</span>
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </div>

                    {/* Premium Features Highlight */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl border border-blue-200/50">
                        <div className="flex items-center gap-2 mb-2">
                            <Star className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-700">Premium Features</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">
                            Unlock unlimited searches, advanced filters, and priority support
                        </p>
                        <SheetClose asChild>
                            <Link href={"/pricing"}>
                                <Button
                                    size="sm"
                                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg"
                                >
                                    Upgrade Now
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-white/80 backdrop-blur-sm border-t border-white/30">
                    <button className="flex items-center gap-3 w-full p-3 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 mb-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-md">
                            <LogOut className="w-5 h-5" />
                        </div>
                        <span className="text-base font-medium">Sign out</span>
                    </button>

                    <div className="text-center">
                        <div className="text-gray-400 text-xs mb-1">lenso.ai © 2025 – v1.0</div>
                        <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                            <span>All systems operational</span>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
