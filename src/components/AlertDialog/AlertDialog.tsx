import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog"
import { ReactNode } from "react";

type AlertDialogCompProps = {
    open: boolean;
    children: ReactNode;
}

function AlertDialogComp(props:AlertDialogCompProps){
    const { open, children} = props;
    return (
        <AlertDialog open={open}>
          <AlertDialogContent>
            {children}
          </AlertDialogContent>
      </AlertDialog>
    )
}
export default AlertDialogComp