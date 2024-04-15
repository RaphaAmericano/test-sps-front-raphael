import { z } from "zod"

const schema = z.object({
    id: z.string().trim(),
    name: z.string().trim().optional(),
    email: z.string().trim().email({
        message: "Email inválido"
    }).optional(),
    password: z.string().min(1).optional(),
    type: z.string().optional(),
})

type EditUserValidationSchema = z.infer<typeof schema>
export type { EditUserValidationSchema }
export default schema 