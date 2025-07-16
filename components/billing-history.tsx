"use client"

import { getBillingHistory } from "@/app/server/dashboard"
import { Download, CheckCircle } from "lucide-react"

type Params = {
    data: Awaited<ReturnType<typeof getBillingHistory>> | null
}

export default function BillingHistory({ data }: Params) {
    return (
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Billing History</h2>

            </div>

            {data && data.length > 0 ? (
                <div className="space-y-4">
                    {data.map((bill, index) => (
                        <div
                            key={bill.invoiceId ?? index}
                            className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{bill.plan}</div>
                                    <div className="text-sm text-gray-600">
                                        {new Date(bill.paidAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-gray-900">
                                    ${bill.amount.toFixed(2)} {bill.currency}
                                </div>
                                <div className={`text-sm ${bill.status === "paid" ? "text-green-600" : "text-yellow-600"}`}>
                                    {bill.status}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 py-12">No billing history found.</div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All Transactions</button>
            </div>
        </div>
    )
}
