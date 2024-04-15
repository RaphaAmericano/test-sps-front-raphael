"use server"

import { User } from "@/types/user"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
type PutUserDataProps = Partial<Omit<User, "id">>
export async function putUser(id:string, data:PutUserDataProps ): Promise<User>{
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    if(token === undefined){
        redirect("/")
    }
    const response = await fetch(`${process.env.API_HOST}/users/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.value}`,
        },
        body: JSON.stringify(data)
    })
    const user:User = ( await response.json() ).data
    revalidateTag("users")
    return user
}