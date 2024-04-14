"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { UsersContext } from "../../_context/user.context"

  
function UserDeleteAlertDialog() {
    const { setDialogOpen, userToDelete } = useContext(UsersContext)
    const { id, name } = userToDelete!

    async function submitDelete(){
      console.log(id)
    }

    function close(){
      setDialogOpen!(false)
    }

    return (
        <>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza que deseja excluir o usuário {name}</AlertDialogTitle>
            <AlertDialogDescription>
              Essa ação não pode ser desfeita. O Usuário será excluído de forma permanente do banco de dados.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="destructive" onClick={submitDelete}>Sim</Button>
            <Button variant="secondary" onClick={close}>Não</Button>
          </AlertDialogFooter> 
        </>
    )
  }
  export default UserDeleteAlertDialog