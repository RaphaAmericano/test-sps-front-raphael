"use server"
import { User } from "@/types/user"
import { cookies } from "next/headers"

type PostUserRequestType = Omit<User, "id">
export async function postUser(data:PostUserRequestType){
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    console.log(token.value)
    if(token === undefined){
        throw new Error("Token indefinido") 
    }
    console.log(token.value)
    const user = await fetch(`${process.env.API_HOST}/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.value}`,
        },
        body: JSON.stringify(data)
    })
    return user
}