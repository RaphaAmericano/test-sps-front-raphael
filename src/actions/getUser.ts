"use server"

import { User } from "@/types/user"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function getUser(id:string): Promise<User>{
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    if(token === undefined){
        redirect("/")
    }
    const response = await fetch(`${process.env.API_HOST}/users/${id}`, {
        headers: {
            "Authorization": `Bearer ${token.value!}`
        }
    })
    const user:User = ( await response.json() ).data
    return user
}