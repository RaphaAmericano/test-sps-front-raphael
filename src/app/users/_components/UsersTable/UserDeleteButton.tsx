"use client"
import { DropdownMenuItem} from "@/components/ui/dropdown-menu"
import { useContext } from "react"
import { UsersContext } from "../../_context/user.context"
import UserDeleteAlertDialog from "./UserDeleteAlertDialog"
import { User } from "@/types/user"

type UserDeleteButtonProps = {
    user:User
}
function UserDeleteButton({ user }:UserDeleteButtonProps){
    const { setDialogOpen, setUserToDelete, setAlertDialogComponent } = useContext(UsersContext)
    function onClick(){
        setDialogOpen!(true)
        setUserToDelete!(user)
        setAlertDialogComponent!(<UserDeleteAlertDialog />)
    }
    return <DropdownMenuItem className="cursor-pointer" onClick={onClick}>Excluir</DropdownMenuItem>
}
export default UserDeleteButton