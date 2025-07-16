const Plans = [
    {
        name: "Starter",
        features: [
            "25 credits included monthly",
            "Instant access upon payment",
            "Unlock basic features",
            "Explore before committing",
            "Risk-free entry",
        ],
    },
    {
        name: "Daily Pro Plan",
        features: [
            "30 fresh credits every day",
            "Priority processing",
            "Never run out of credits",
            "Perfect for daily creators",
        ],
    },
    {
        name: "Elite Power Plan",
        features: [
            "15,000 monthly credits",
            "Platinum VIP status",
            "Lightning-fast processing",
            "Elite-only features",
            "Enterprise analytics access",
        ],
    },
    {
        name: "Free Plan",
        features: [
            "2 credits included monthly",
            "Instant access upon payment",
            "Unlock basic features",
            "Explore before committing",
            "Risk-free entry",
        ],
    },
]

export function getFeatures(name: string): string[] {
    const plan = Plans.find((e) => e.name === name)
    return plan?.features || []
}
