import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header1 from './Header/header1'
import Header2 from './Header/Header2'
import Header3 from './Header/Header3'
import Header4 from './Header/Header4'
import Header5 from './Header/Header5'
import Home from './Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-[5000px] bg-gray-100'>
    <Header1/>
    <Header2/>
        <div className="w-px h-[1px] bg-gray-400"></div>
    <Header3/>
    <Home/>
    {/* <Header4/> */}
    {/* <Header5/> */}
    </div>
  )
}

export default App
