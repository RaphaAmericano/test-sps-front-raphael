import {  TableRow,  TableCell } from "@/components/ui/table"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import { User } from "@/types/user"
import MoreHorizontalIcon from "@/components/icons/MoreHorizontalIcon"
import UserDeleteButton from "./UserDeleteButton"
import Link from "next/link"

type UserRowProps = User
function UserRow(props:UserRowProps){
    const { id, name, email, password, type } = props;
    return (
        <TableRow>
            <TableCell className="font-medium">{id}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell className="hidden md:table-cell">{email}</TableCell>
            <TableCell className="hidden md:table-cell">{password}</TableCell>
            <TableCell className="text-right">{type}</TableCell>
            <TableCell className="text-right">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Ações</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <Link href={`/users/${id}`}>
                        <DropdownMenuItem>
                        Editar
                        </DropdownMenuItem>
                    </Link>
                    <UserDeleteButton user={props} />
                </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    )
}
export default UserRow