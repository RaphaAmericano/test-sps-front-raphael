import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { User } from "@/types/user"
import UserRow from "./UserRow"

type UsersTableProps = {
  users: User[]
}

function UsersTable({ users }: UsersTableProps){
  
  return (
      <div className="border shadow-sm rounded-lg p-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead className="min-w-[150px]">Nome</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead className="hidden md:table-cell">Password</TableHead>
                    <TableHead className="text-right">Tipo</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => <UserRow key={user.id} {...user}/>)}                  
                  </TableBody>
              </Table>
      </div>
  )
}
export default  UsersTable