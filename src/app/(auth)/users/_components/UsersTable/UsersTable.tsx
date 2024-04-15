import { TableHead, TableRow, TableHeader, TableBody, Table } from "@/components/ui/table"
import UserRow from "./UserRow"
import { getUsers } from "@/actions/getUsers"

async function UsersTable(){
  const users = await getUsers()
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
                    {users.map((user) => <UserRow key={user.id} {...user} />)}                  
                </TableBody>
              </Table>
      </div>
  )
}
export default  UsersTable