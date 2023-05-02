import { Sidebar } from './layouts/Sidebar'
import { Body } from '@/layouts/Body'
import { type FC } from 'react'

const App: FC = () => {
  return (
    <div className='h-full flex flex-row'>
      <Sidebar />
      <Body />
    </div >
  )
}

export default App
