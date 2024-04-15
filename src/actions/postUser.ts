"use server"
import { User } from "@/types/user"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type PostUserRequestType = Omit<User, "id">
export async function postUser(data:PostUserRequestType){
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    if(token === undefined){
        redirect("/")
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