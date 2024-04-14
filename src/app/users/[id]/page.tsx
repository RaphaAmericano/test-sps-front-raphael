import { getUser } from "@/actions/getUser"
import EditUserForm from "./_components/EditUserForm/EditUserForm"

interface IProps {
    params: {
        id: string
    }
}
export default async function User( { params: { id }} : IProps) {
    const user = await getUser(id)
    return (
        <main className="flex items-center justify-center h-screen">
            <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container flex items-start gap-8 px-4 md:px-6">
                <EditUserForm  {...user}/>
            </div>
            </section>
        </main>
  )
}

