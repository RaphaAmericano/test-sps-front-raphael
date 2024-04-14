"use client"
import Link from "next/link";
import LogoutButton from "../LogoutButton/LogoutButton";

function Navbar(){
    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl"><Link href="/home">SPS Group</Link></div>
          <div className="flex space-x-4">
            
              <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 text-white py-0 my-0" href="/users">
                Usuários
              </Link>
              <LogoutButton />
          </div>
        </div>
      </nav>
    )
}
export default Navbar