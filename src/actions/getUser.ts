"use server"

import { User } from "@/types/user"

export async function getUser(id:string): Promise<User>{
    const response = await fetch(`${process.env.API_HOST}/users/${id}`)
    const user:User = ( await response.json() ).data
    return user
}