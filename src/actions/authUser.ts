"use server"

import { User } from "@/types/user"
import { NextResponse } from "next/server"

type AuthUserRequestType = Omit<User, "id" | "name" | "type" >
export async function authUser(data:AuthUserRequestType){
    const token = await fetch(`${process.env.API_HOST}/users`, {
        method: "POST",
        body: JSON.stringify(data)
    })
    // Validacao de error

    const response = NextResponse.json(token, {
        status: 200,
        headers: { "Content-Type": "application/json" },
    })

    response.cookies.set({
        name: "auth",
        path:"/",
        value: JSON.stringify(token)
    })
    
    return response   
}