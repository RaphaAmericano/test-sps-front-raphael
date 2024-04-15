import { NextRequest, NextResponse } from "next/server";
import { verifyAuthSession } from "./services/auth.service";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest, response: NextResponse){
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    console.log(token === undefined)
    console.log(request.nextUrl.pathname)
    const { pathname } = request.nextUrl
    if(token === undefined && (pathname.startsWith("/home") || pathname.startsWith("/users")) ){
        return await NextResponse.redirect(new URL("/", request.url))
    }
    return await verifyAuthSession(request)
}