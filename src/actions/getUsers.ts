"use server"

import { User } from "@/types/user"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function getUsers(): Promise<User[]>{
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    if(token === undefined){
        redirect("/")
    }
    const response = await fetch(`${process.env.API_HOST}/users`, {
        next:{ tags: ["users"] },
        headers: {
            "Authorization": `Bearer ${token.value!}`
        }

    })
    const users:User[] = ( await response.json() ).data
    return users
}