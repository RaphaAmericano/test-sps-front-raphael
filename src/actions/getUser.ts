"use server"

import { User } from "@/types/user"
import { cookies } from "next/headers"

export async function getUser(id:string): Promise<User>{
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    if(token === undefined){
        throw new Error("Token indefinido") 
    }
    const response = await fetch(`${process.env.API_HOST}/users/${id}`, {
        headers: {
            "Authorization": `Bearer ${token.value!}`
        }
    })
    const user:User = ( await response.json() ).data
    return user
}