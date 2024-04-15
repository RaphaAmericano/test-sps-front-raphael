import { NextRequest, NextResponse } from "next/server";
import { verifyAuthSession } from "./services/auth.service";
import { getServerSession } from "next-auth/next";
import { options } from "./app/api/auth/[...nextauth]/options";

export async function middleware(request: NextRequest, response: NextResponse){
    return await verifyAuthSession(request)
}