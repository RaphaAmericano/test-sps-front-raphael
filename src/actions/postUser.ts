"use server"

import { User } from "@/types/user"
import { revalidateTag } from "next/cache"
type PostUserRequestType = Omit<User, "id">
export async function postUser(data:PostUserRequestType){
    const user = await fetch(`${process.env.API_HOST}/users`, {
        method: "POST",
        body: JSON.stringify(data)
    })
    console.log(user)
    revalidateTag("users")

}