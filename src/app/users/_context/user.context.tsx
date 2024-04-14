"use client"
import { User } from "@/types/user"
import { ReactNode, createContext, useState } from "react"

interface UsersContextProps {
    alertDialogOpen: boolean,
    setDialogOpen: (open:boolean) => void,
    alertDialogComponent:ReactNode | null,
    setAlertDialogComponent: (content:ReactNode) => void
    setUserToDelete: (user:User) => void
    userToDelete: User | undefined
}

const UsersContext = createContext<Partial<UsersContextProps>>({})

const UsersProvider = UsersContext.Provider
const UsersConsumer = UsersContext.Consumer
export { UsersContext, UsersProvider, UsersConsumer }
function UserContextContainer({ children }: { children: ReactNode}){
    const [ openAlert, setOpenAlert] = useState(false)
    const [content, setContent] = useState<ReactNode | null >(null)
    const [userDelete, setUserDelete] = useState<User | undefined>(undefined)
    function updateContent(content:ReactNode){
        setContent(content)
    }

    function updateOpenAlert(open:boolean){
        setOpenAlert(open)
    }

    function updateUserToDeleteState(user:User){
        setUserDelete(user)
    }

    return (
        <UsersProvider value={{ 
            setDialogOpen: updateOpenAlert, 
            alertDialogOpen: openAlert, 
            setAlertDialogComponent:updateContent,
            alertDialogComponent: content, 
            setUserToDelete: updateUserToDeleteState,
            userToDelete: userDelete
            }}>
            {children}
        </UsersProvider>
    )
}
export default UserContextContainer