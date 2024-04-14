"use server"

import { User } from "@/types/user"

export async function getUsers(): Promise<User[]>{
    const response = await fetch(`${process.env.API_HOST}/users`, {
        next:{ tags: ["users"] }
        // headers: {
        //     "Authorization": `Bearer ${token}`
        // }

    })
    console.log(response)
    const users:User[] = ( await response.json() ).data
    return users
}