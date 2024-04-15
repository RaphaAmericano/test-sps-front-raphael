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
            <EditUserForm {...user} />         
        </main>
    )
}

