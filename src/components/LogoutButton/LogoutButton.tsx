import { signOut, useSession } from "next-auth/react"
import { Button } from "../ui/button"

function LogoutButton(){
    async function signout(){
        await signOut({ callbackUrl:"/" })
    }
    return (
        <Button className="text-white" variant="ghost" onClick={signout}>Sair</Button>
    )
}
export default LogoutButton