import { type FC } from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar: FC = () => {
  return (
    <header>
      <div className="h-full w-250px bg-pink-7 flex items-center">
        <ul className="m-0 p-0 list-none">
          <li className="pt-0 pl-20px pb-10px font-500" text="5">
            <NavLink text="yellow-4" className="decoration-none hover:color-cyan-1" to="/">Dashboard</NavLink>
          </li>
          <li className="pt-0 pl-20px pb-10px font-500" text="5">
            <NavLink text="yellow-4" className="decoration-none hover:color-cyan-1" to="/catalog">Catalog</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
