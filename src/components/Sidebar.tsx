import Logo from '../assets/plan-logo.png'
import { SidebarOption } from './SidebarOption'
import Arrow from '../assets/diagonal-icon.svg'

export function Sidebar() {
  return(
    <nav className="fixed top-0 left-0 w-60 h-screen xl:visible invisible bg-zinc-900 flex-col border-r border-r-zinc-700 flex items-center text-center content-center">
      <img className='mt-10 w-40' src={Logo}></img>
      <div className='mt-32 flex flex-col gap-8'>
        <SidebarOption pageRef='' menuNumber='01.' menuName='/quem somos' />
        <SidebarOption pageRef='/games' menuNumber='02.' menuName='/o que fazemos' />
        <SidebarOption pageRef='/cases-games' menuNumber='03.' menuName='/plan news' />
        <SidebarOption pageRef='' menuNumber='04.' menuName='/nossos clientes' />
        <SidebarOption pageRef='/contact' menuNumber='05.' menuName='/contato' />
      </div>
      <div className='flex mt-auto p-2 w-full h-36 border-zinc-700 border-t items-center content-center text-center  '>
        <a className='text-[#939598] ease-in duration-100 cursor-pointer hover:text-zinc-500 text-xl leading-6 tracking-wide  mx-auto'>Que tal inovar  <br/> com a gente?</a>
       <img className='mt-auto  w-3 h-3' src={Arrow}></img>
      </div>
    </nav>
  )
}