import { z } from "zod"

const schema = z.object({
    name: z.string().trim(),
    email: z.string().trim().email({
        message: "Email inválido"
    }),
    password: z.string().min(1),
    type: z.string()
})

type NewUserValidationSchema = z.infer<typeof schema>
export type { NewUserValidationSchema }
export default schema 