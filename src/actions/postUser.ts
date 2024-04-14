"use server"
import { User } from "@/types/user"
import { getToken } from "next-auth/jwt"
import { useSession } from "next-auth/react"



type PostUserRequestType = Omit<User, "id">
export async function postUser(data:PostUserRequestType){

    const user = await fetch(`${process.env.API_HOST}/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return user
}