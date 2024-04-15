import AlertDialogContainer from "./_components/AlertDialogContainer/AlertDialogContainer"
import NewUserForm from "./_components/NewUserForm/NewUserForm"
import UsersTable from "./_components/UsersTable/UsersTable"
import UserContextContainer from "./_context/user.context"

export default function Users() {
  return (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex items-start gap-8 px-4 md:px-6">
            <UserContextContainer>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tighter">Lista de usuários</h2>
                <UsersTable />  
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tighter">Cadastro de usuários</h2>
                <NewUserForm />
              </div>
              <AlertDialogContainer />
            </UserContextContainer>
          </div>
        </section>
  )
}

