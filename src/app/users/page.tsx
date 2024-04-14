import { getUsers } from "@/actions/getUsers"
import NewUserForm from "./_components/NewUserForm/NewUserForm"
import UsersTable from "./_components/UsersTable/UsersTable"



export default async function Users() {
  const users = await getUsers()
  console.log(users)
  return (
    <main className="flex items-center justify-center h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex items-start gap-8 px-4 md:px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">Lista de usuários</h1>
          <UsersTable users={users}/>  
        </div>
        <div className="space-y-6">
          <NewUserForm />
        </div>
      </div>

      </section>
      
    </main>
  )
}

