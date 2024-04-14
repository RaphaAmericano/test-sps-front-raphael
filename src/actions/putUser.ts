"use server"

import { User } from "@/types/user"
import { revalidateTag } from "next/cache"
type PutUserDataProps = Partial<Omit<User, "id">>
export async function putUser(id:string, data:PutUserDataProps ): Promise<User>{
    const response = await fetch(`${process.env.API_HOST}/users/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const user:User = ( await response.json() ).data
    revalidateTag("users")
    return user
}