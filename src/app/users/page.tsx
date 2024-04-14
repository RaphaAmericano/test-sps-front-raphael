import { getUsers } from "@/actions/getUsers"
import NewUserForm from "./_components/NewUserForm/NewUserForm"



export default async function Users() {
  const users = await getUsers()
  console.log(users)
  return (
    <main className="flex items-center justify-center h-screen">
      <h1>Users</h1> 
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}    
      </ul>
      <h2>Novo Usuario</h2>
      <NewUserForm />
    </main>
  )
}

