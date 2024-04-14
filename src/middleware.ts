import { NextRequest } from "next/server";
import { verifyAuthSession } from "./services/auth.service";



export async function middleware(request: NextRequest){
    // console.log(request)
    return await verifyAuthSession(request)
}