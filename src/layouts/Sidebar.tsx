import { isAdmin, isUser } from '@/router/utils';
import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar: FC = () => {
  const inactiveClasses = "p-3 box-border rounded-1 font-500 bg-#9384D1 cursor-pointer block decoration-none hover:color-#FFDCB6";
  const activeClasses = inactiveClasses + " color-#FFDCB6";

  return (
    <header>
      <div className="h-full w-250px bg-white flex items-center flex-col">
        <div className="logo flex flex-row m-3 w-full items-center">
          <div className="i-ic:outline-camera-indoor p-5" />
          <div className='flex-1'>
            <div className="font-700 text-20px">Camera Store</div>
            <div className="font-400 text-10px">Camera Indoor</div>
          </div>
        </div>
        <ul className="mt-10 p-0 list-none flex flex-col w-full">
          {isUser() && (
            <>
              <li className="bg-#9384D1 ml-3 mr-3 mb-3 rounded-1" text="5">
                <NavLink
                  text="white"
                  className={({ isActive }) => isActive ? activeClasses : inactiveClasses}
                  to="/"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="bg-#9384D1 ml-3 mr-3 mb-3 rounded-1" text="5">
                <NavLink
                  text="white"
                  className={({ isActive }) => isActive ? activeClasses : inactiveClasses}
                  to="/catalog"
                >
                  Catalog
                </NavLink>
              </li>
            </>
          )}
          {isAdmin() && (
            <>
              <li className="bg-#9384D1 ml-3 mr-3 mb-3 rounded-1" text="5">
                <NavLink
                  text="white"
                  className={({ isActive }) => isActive ? activeClasses : inactiveClasses}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="bg-#9384D1 ml-3 mr-3 mb-3 rounded-1" text="5">
                <NavLink
                  text="white"
                  className={({ isActive }) => isActive ? activeClasses : inactiveClasses}
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
              <li className="bg-#9384D1 ml-3 mr-3 mb-3 rounded-1" text="5">
                <NavLink
                  text="white"
                  className={({ isActive }) => isActive ? activeClasses : inactiveClasses}
                  to="/orders"
                >
                  Orders
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};
