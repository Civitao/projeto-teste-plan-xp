import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { CasesGames } from './pages/CasesGames'
import { Games } from './pages/Games'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)
  const size = window.innerHeight / 2

  console.log(size)
   
  return (
    <div className="bg-[#1e1e1e] scroll-smooth overflow-x-hidden w-screen h-screen pl-60">
     <Sidebar />

    <Games />

    <CasesGames />



    </div>
  )
}

export default App
