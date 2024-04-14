"use server"
import schema from "@/app/(auth)/users/[id]/_components/EditUserForm/EditUserForm.schema";
import { putUser } from "./putUser";
export type EditUserFormState = {
    message: string;
    fields?: Record<string, string>;
    issues?: string[];
}

export async function editUserFormAction( prevState: EditUserFormState,  data: FormData ): Promise<EditUserFormState>{
    const formData = Object.fromEntries(data)
    // remove empty strings from formData
    for (const key of Object.keys(formData).slice()) {
        if (formData[key] === "") {
            delete formData[key];
        }
    }
    const parsed = schema.safeParse(formData)
    if(parsed.success === false){
        const fields: Record<string, string> = {}
        for (const key of Object.keys(formData)){
            fields[key] = formData[key].toString()
        }
        return { 
            message: "Erro ao editar usuário.",
            fields,
            issues: parsed.error.issues.map((issue) => issue.message)
        }    
    } else {

        try {
            const { id, ...props } = parsed.data
            const response = await putUser(id, props)
            console.log(response)

            return {
                message: "Usuário editado com sucesso."
            }    
        } catch (error) {
            console.error(error)
            return { 
                message: "Erro ao editar usuário.",

            }    
        }

        
    }
    
}