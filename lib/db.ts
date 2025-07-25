// lib/db.ts
import { PrismaClient } from "@prisma/client"

declare global {
    // Prevent multiple instances during hot reload in dev
    var prisma: PrismaClient | undefined
}

const prisma = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma

export { prisma }
