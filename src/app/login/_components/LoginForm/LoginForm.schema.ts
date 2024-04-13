import { z } from "zod"

const schema = z.object({
    email: z.string().trim().email({
        message: "Email inválido"
    }),
    password: z.string()
})

type LoginValidationSchema = z.infer<typeof schema>
export type { LoginValidationSchema }
export default schema 