
import {z} from "zod"


export const createUserSchema = z.object({
    name: z.string().min(2,"Nome é obrigatório"),
    email: z.string().email("Email Inválido"),
    password: z.string().min(8,"Minimo 8 caracteres").regex(/[^a-zA-Z 0-9]+/g, "Deve conter caracteres especiais")
})

export const returnUserSchema = createUserSchema.extend({
    id: z.number()
}).omit({password:true})

export const returnAllUsersSchema = returnUserSchema.array()
export const updateUserSchema = createUserSchema.partial()


export type CreateUser = z.infer<typeof createUserSchema>
export type ReturnUser = z.infer<typeof returnUserSchema>
export type ReturnUsers = z.infer<typeof returnAllUsersSchema>