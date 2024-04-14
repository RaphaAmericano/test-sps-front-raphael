"use server"
import { User } from "@/types/user"

type PostUserRequestType = Omit<User, "id">
export async function postUser(data:PostUserRequestType, token: string){
    const user = await fetch(`${process.env.API_HOST}/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    })
    return user
}