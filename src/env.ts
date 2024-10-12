import { z } from "zod"

const envSchema = z.object({
    PORT: z.coerce.number().positive().min(1024).max(65_535).default(3000),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
})

export const ENV = envSchema.parse(process.env)
