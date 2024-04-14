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
import { useContext, useState } from "react"
import { UsersContext } from "../../_context/user.context"
import { deleteUser } from "@/actions/deleteUser"
import AlertComponent from "@/components/AlertComponent/AlertComponent"

  
function UserDeleteAlertDialog() {
    const { setDialogOpen, userToDelete } = useContext(UsersContext)
    const [submitting, setSubiting] = useState(false)
    const [ feedbackMessage, setFeedbackMessage] = useState("")
    const { id, name } = userToDelete!

    async function submitDelete(){
      setSubiting(true)
      try {
        const response = await deleteUser(id)
        console.log(response)
        setFeedbackMessage(response)   
        setSubiting(false)
        setTimeout(() => {
          setFeedbackMessage("")   
          if(response === "Usuário excluído com sucesso"){
            setDialogOpen!(false)
          }
        }, 4000)
      } catch (error) {
        console.error(error)
        setFeedbackMessage("Erro desconhecido")
        setSubiting(false)
      } finally {
        setTimeout(() => {
          setFeedbackMessage("")   
        }, 4000)
      }
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
            {feedbackMessage !== "" ? 
            <AlertComponent type={feedbackMessage === "Usuário excluído com sucesso" ? "default" : "destructive"} message={feedbackMessage}  /> : 
            (
              <>
                <Button variant="destructive" onClick={submitDelete} disabled={submitting}>Sim</Button>
                <Button variant="secondary" onClick={close} disabled={submitting}>Não</Button>
              </> 
            ) 
            }
            
          </AlertDialogFooter> 
        </>
    )
  }
  export default UserDeleteAlertDialog