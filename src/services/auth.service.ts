import { NextRequest, NextResponse } from "next/server";

export async function verifyAuthSession(request: NextRequest){
    const response = NextResponse.next()
    return response
}