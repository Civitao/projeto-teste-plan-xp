import { TfiFacebook } from 'react-icons/tfi'
import { BsInstagram } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'

export function FollowUsCard () {
  return (
   <div className='flex flex-col px-1 w-[200px]  bg-[#1E1E1E]  h-[240px] '>
    <h3 className='text-xl pl-1  pt-1 text-[#939598]'>Siga-nos</h3>
    <p className='text-[13px]  mt-3 leading-6 font-light text-white '>Fique sempre por dentro de todas as novidades da Plan XP e de todas empresas do Grupo Plan Marketing.</p>

    <div className='flex mt-4 gap-5 flex-row px-2'>
      
      <a target='_blank' href='https://pt-br.facebook.com/planxperience/' className='rounded-3xl cursor-pointer bg-[#939598] w-[45px] h-[45px] items-center justify-center p-[11px] hover:bg-zinc-500 ease-in duration-100 text-center'>
      <TfiFacebook size={24} color='black' ></TfiFacebook>
    </a>
      <a target='_blank' href='https://www.instagram.com/planxperience/' className='rounded-3xl cursor-pointer bg-[#939598] w-[45px] h-[45px] items-center justify-center p-[11px]  hover:bg-zinc-500 ease-in duration-100  text-center'>
      <BsInstagram size={24} color='black' ></BsInstagram>
    </a>
      <a target='_blank' href='https://www.instagram.com/planxperience/' className='rounded-3xl cursor-pointer bg-[#939598] w-[45px] h-[45px] items-center justify-center p-[11px] hover:bg-zinc-500 ease-in duration-100 text-center'>
      <FaYoutube size={24} color='black' ></FaYoutube>
    </a>
    
    </div>
   </div>
  )
}