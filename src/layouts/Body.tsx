import { type FC } from 'react'
import { Content } from './Content'
import { Navbar } from './Navbar'

export const Body: FC = () => {
  return (
    <div className="flex flex-col w-[calc(100%-250px)]">
      <Navbar />
      <Content />
    </div>
  )
}
