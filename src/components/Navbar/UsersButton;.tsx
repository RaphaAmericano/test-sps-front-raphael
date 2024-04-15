import Link from "next/link";

function UsersButton(){
    return (
        <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 text-white py-0 my-0" 
        href="/users">
        Usuários
      </Link>
    )
}
export default UsersButton