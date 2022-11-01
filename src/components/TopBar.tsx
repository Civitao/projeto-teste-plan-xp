import { GiHamburgerMenu }  from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import Logo from '../assets/plan-logo.png'

export function TopBar() {

    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-screen z-40 h-20 sm:h-20 fixed top-0 items-center px-8 flex xl:invisible visible justify-between bg-zinc-900">
      <img className='w-24 h-12 sm:w-24 sm:h-12 z-50 ' src={Logo}></img>
      <button onClick={() => setMenuOpen(!false)} className='absolute top-5 right-8 sm:top-5 sm:right-8 z-10'>
        <GiHamburgerMenu  color={'#939598'} size={38} /> 
      </button>

      <div className={menuOpen === true ? 'w-screen overflow-y-hidden visible z-40 absolute items-center translate-x-0 justify-center top-0 right-0 bg-black transition-all opacity-75 h-screen duration-500 origin-right' : 'opacity-0 ease-in-out duration-0 translate-x-36 '}> 
      <button onClick={() => setMenuOpen(!true)} className='ease-in duration-500'>
      <AiOutlineClose className='z-40 absolute top-5 right-8' color='white' size={36} />
      </button>
        <div className='flex h-screen items-center justify-center flex-col gap-12' >
          
      
          <a onClick={() => setMenuOpen(false)} className='cursor-pointer text-lg text-[#939598] uppercase'>/quem somos</a>
          <a onClick={() => setMenuOpen(false)} className='cursor-pointer text-lg text-[#939598] uppercase'>/o que fazemos</a>
          <a onClick={() => setMenuOpen(false)} className='cursor-pointer text-lg text-[#939598] uppercase'>/plan news</a>
          <a onClick={() => setMenuOpen(false)} className='cursor-pointer text-lg text-[#939598] uppercase'>/nossos clientes</a>
          <a onClick={() => setMenuOpen(false)} className='cursor-pointer text-lg text-[#939598] uppercase'>/contato </a>
        </div>
      </div>

    </div>
  )
}