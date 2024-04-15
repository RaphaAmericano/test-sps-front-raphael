import Link from "next/link";
import LogoutButton from "../LogoutButton/LogoutButton";
import UsersButton from "./UsersButton;";
function Navbar(){
    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl"><Link href="/home">SPS Group</Link></div>
          <div className="flex space-x-4">
              <UsersButton />
              <LogoutButton />
          </div>
        </div>
      </nav>
    )
}
export { Navbar }