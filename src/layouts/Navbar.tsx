import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
      <nav className="h-60px w-full bg-blue">
        <ul className="flex flex-row list-none m-0 p-0 items-center h-full">
          <li className="pl-5 pr-3">
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li className="">
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}