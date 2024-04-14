"use client"
import AlertDialogComp from "@/components/AlertDialog/AlertDialog";
import { useContext } from "react";
import { UsersContext } from "../../_context/user.context";

function AlertDialogContainer(){
    const { alertDialogOpen,  alertDialogComponent } = useContext(UsersContext)
    return <AlertDialogComp open={alertDialogOpen!}>{alertDialogComponent}</AlertDialogComp>
}
export default AlertDialogContainer