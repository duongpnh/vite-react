import { Outlet } from 'react-router-dom'

export const Content = () => {
  return (
    <main>
      <div className="container min-h-md flex justify-center m-auto">
        <Outlet />
      </div>
    </main>
  )
}