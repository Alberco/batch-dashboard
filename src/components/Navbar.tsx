import { ThemeSwitcher } from "@/app/ThemeSwitcher"
import { Home, LayoutDashboard, Radar, SearchCheck, Table } from "lucide-react"
import Link from "next/link"

function Navbar() {
  return (
    <nav className="fixed inset-y-2 border-2 border-white/20 rounded-md  w-20 flex flex-col items-center py-4 justify-between">
      <ul>
        <Link  href={"/"}>
           <Radar size={30} className='stroke-black dark:stroke-white ' />
        </Link>
      </ul>
      <ul className="flex flex-col gap-6">
        <li>
            <Link  href={"/"}>
              <Home /> 
            </Link>
        </li>
        <li>
            <Link  href={"/"}>
              <LayoutDashboard /> 
            </Link>
        </li>
        <li>
            <Link  href={"/table-program"}>
              <Table />
            </Link>
        </li>
        <li>
            <Link href={"/search-program"}>
              <SearchCheck />
            </Link>
        </li>
      </ul>
      <ul>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar