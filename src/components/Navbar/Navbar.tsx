import { LayoutDashboardIcon, SettingsIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

function Navbar(){
    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">SPS Group</div>
          <div className="flex space-x-4">
            <Link href="#">
              <Link className="text-white" href="#">
                <LayoutDashboardIcon className="h-4 w-4" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </Link>
            <Link href="#">
              <Link className="text-white" href="#">
                <UsersIcon className="h-4 w-4" />
                <span className="sr-only">Users</span>
              </Link>
            </Link>
            <Link href="#">
              <Link className="text-white" href="#">
                <SettingsIcon className="h-4 w-4" />
                <span className="sr-only">Settings</span>
              </Link>
            </Link>
          </div>
        </div>
      </nav>
    )
}

export default Navbar