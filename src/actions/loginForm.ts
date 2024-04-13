"use server"
import schema from "@/app/login/_components/LoginForm/LoginForm.schema"

export type LoginFormState = {
    message: string;
    fields?: Record<string, string>;
    issues?: string[];
}

export async function loginFormAction( prevState: LoginFormState,  data: FormData ): Promise<LoginFormState>{
    console.log(prevState)
    console.log(data)
    const formData = Object.fromEntries(data)
    console.log(formData)
    const parsed = schema.safeParse(formData)
    console.log(parsed)
    if(parsed.success === false){
        const fields: Record<string, string> = {}
        for (const key of Object.keys(formData)){
            fields[key] = formData[key].toString()
        }
        return { 
            message: "Erro ao efetuar login.",
            fields,
            issues: parsed.error.issues.map((issue) => issue.message)
        }    
    }

    return { message: "Usuário logado"}
}