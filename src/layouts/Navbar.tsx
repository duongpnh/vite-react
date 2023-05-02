import { Dropdown } from 'antd'
import type { MenuProps } from 'antd';
import { Link, Navigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to="sign-in">
        Sign In
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="sign-up">
        Sign Up
      </Link>
    ),
  },
];

export const Navbar = () => {
  return (
    <header className="flex-auto bg-gray-4 w-full h-60px">
      <nav className="h-60px w-full bg-gray-3">
        <ul className="flex flex-row list-none m-0 p-0 items-center h-full">
          <li className="pl-5 pr-5 ml-auto">
            <div className="text-4xl"> 
              <Dropdown menu={{ items }}>
                <div className="i-ic:sharp-account-circle color-pink-9 hover:color-pink-7 cursor-pointer" />
              </Dropdown>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}