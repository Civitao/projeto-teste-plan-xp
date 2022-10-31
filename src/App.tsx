import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { CasesGames } from './pages/CasesGames'
import { Contact } from './pages/Contact'
import { Games } from './pages/Games'
import './styles/global.css'


function App() {
  const [count, setCount] = useState(0)
  const size = window.innerHeight 



  console.log(window.location.pathname)
  
  return (

    
    <div className="bg-[#1e1e1e] min-w-[640px] xl:pl-60 scroll-smooth overflow-x-hidden w-screen h-screen ">
      <TopBar />  
     <Sidebar />
     <Games />
     <CasesGames />
     <Contact />
    </div>
  )
}

export default App
