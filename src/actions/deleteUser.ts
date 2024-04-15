"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
type DeleteUserRequestType = string
export async function deleteUser(id:DeleteUserRequestType){
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    if(token === undefined){
        redirect("/")
    }
    const response = await fetch(`${process.env.API_HOST}/users/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    const parsed = await response.json()
    if(response.status === 200){
        revalidateTag("users")
        return parsed.message
    } 
    return parsed.message
}