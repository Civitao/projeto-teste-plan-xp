import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { CasesGames } from './pages/CasesGames'
import { Contact } from './pages/Contact'
import { Games } from './pages/Games'
import { Mobile } from './pages/Mobile'
import './styles/global.css'

function App() {
  return (
    <div className="bg-[#1e1e1e] xl:pl-60 scroll-smooth overflow-x-hidden w-screen h-screen ">
      <TopBar /> 
     <Sidebar />
      <Mobile />
     <Games />
     <CasesGames />
     <Contact />
    </div>
  )
}

export default App
