import { Outlet } from 'react-router-dom'
import Scrollbar from 'react-perfect-scrollbar';

export const Content = () => {
  return (
    <main className="flex-auto bg-gray-100 w-[calc(100%-250px)]">
      <div className="container min-h-md h-full">
        <Scrollbar>
          <Outlet />
        </Scrollbar>
      </div>
    </main>
  )
}