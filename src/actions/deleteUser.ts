"use server"

import { revalidateTag } from "next/cache"
type DeleteUserRequestType = string
export async function deleteUser(id:DeleteUserRequestType){
    const response = await fetch(`${process.env.API_HOST}/users/${id}`, {
        method: "DELETE"
    })
    const parsed = await response.json()
    if(response.status === 200){
        revalidateTag("users")
        return parsed.message
    } 
    return parsed.message
}