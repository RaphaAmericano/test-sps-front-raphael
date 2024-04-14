"use server"

import { User } from "@/types/user"


type AuthUserRequestType = Record<"email" | "password", string>

export async function authUser(data:AuthUserRequestType){
    console.log(data)
    const token = await fetch(`${process.env.API_HOST}/auth`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    const tokenParsed = await token.json()
    
    
    if(!token.ok || tokenParsed.message === "Usuário não autenticado."){
        return {
            message: "Usuário não autenticado"
        }
    }

    return {
        message: "Usuário autenticado com sucesso.",
        data:tokenParsed
    }
}