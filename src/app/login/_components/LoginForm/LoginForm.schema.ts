import { z } from "zod"

const schema = z.object({
    email: z.string().trim().email({
        message: "Email inválido"
    }),
    password: z.string().min(1)
})

type LoginValidationSchema = z.infer<typeof schema>
export type { LoginValidationSchema }
export default schema 