import { Navbar } from './layouts/Navbar'
import { Content } from './layouts/Content'
import { Sidebar } from './layouts/Sidebar'

function App() {

  return (
    <div className='h-full flex flex-row'>
      <Sidebar />
      <Content />
    </div >
  )
}

export default App
