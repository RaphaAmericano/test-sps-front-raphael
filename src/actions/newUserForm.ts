"use server"

import schema from "@/app/(auth)/users/_components/NewUserForm/NewUserForm.schema";
import { postUser } from "./postUser";
import { revalidatePath, revalidateTag } from "next/cache";

export type NewUserFormState = {
    message: string;
    fields?: Record<string, string>;
    issues?: string[];
}

export async function newUserFormAction( prevState: NewUserFormState,  data: FormData ): Promise<NewUserFormState>{
    const formData = Object.fromEntries(data)
    // remove empty strings from formData    
    const parsed = schema.safeParse(formData)
    if(parsed.success === false){
        const fields: Record<string, string> = {}
        for (const key of Object.keys(formData)){
            fields[key] = formData[key].toString()
        }
        return { 
            message: "Erro ao criar usuário.",
            fields,
            issues: parsed.error.issues.map((issue) => issue.message)
        }    
    } else {

        try {
            const { token, ...props} = parsed.data
            const response = await postUser(props, token)
            if(response.status === 200 || response.status === 201){
                revalidateTag("users")
                return {
                    message: "Usuário criado com sucesso."
                }    
            }
            return {
                message: "Erro ao criar usuário."
            }
        } catch (error) {
            console.error(error)
            return { 
                message: "Erro ao criar usuário.",

            }    
        }
    }
}