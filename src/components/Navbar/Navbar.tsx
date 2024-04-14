import Link from "next/link";

function Navbar(){
    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl"><Link href="/home">SPS Group</Link></div>
          <div className="flex space-x-4">
              <Link className="text-white" href="/users">
                Usuários
              </Link>
              <Link className="text-white" href="/">
                Sair                
              </Link>
          </div>
        </div>
      </nav>
    )
}
export default Navbar