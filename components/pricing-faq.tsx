"use client"

export default function PricingFAQ() {
    return (
        <section className="relative z-10 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by 12,500+ Users</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Join thousands of satisfied users who trust lenso.ai for their image search needs
                </p>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Need help choosing?</h3>
                    <p className="text-gray-600 mb-6">Our support team is here to help you find the perfect plan</p>
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Contact Support
                    </button>
                </div>
            </div>
        </section>
    )
}
