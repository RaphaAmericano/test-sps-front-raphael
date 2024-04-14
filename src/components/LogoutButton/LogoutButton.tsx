"use client"

import { signOut } from "next-auth/react"
import { Button } from "../ui/button"

function LogoutButton(){
    async function signout(){
        
        await signOut({ callbackUrl:"/login" })
    }
    return (
        <Button className="text-white" variant="ghost" onClick={signout}>Sair</Button>
    )
}
export default LogoutButton