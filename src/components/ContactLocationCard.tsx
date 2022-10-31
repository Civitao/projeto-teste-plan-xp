interface ContactLocationCardProps {
  uf: string;
  adress: string;
  country: string;
  city: string;
  cellphone: string;
  mapLocation: string;
}

export function ContactLocationCard ({...props}: ContactLocationCardProps) {
  return (
   <div className='flex flex-col px-1 w-[200px] bg-[#1E1E1E] h-[240px]'>
    <div className="flex flex-row items-center"><svg version="1.2" className="fill-[#939598]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 16" width="13" height="16"><path fill-rule="evenodd" d="m12.7 6.4c0 3.2-5.5 9.2-5.7 9.5q-0.1 0.1-0.2 0.1-0.2 0-0.3-0.1c-0.2-0.3-5.7-6.3-5.7-9.5 0-3.2 2.7-5.9 5.9-5.9 3.3 0 6 2.7 6 5.9zm-6 2.9c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9z"/></svg>
    <h3 className='text-xl pl-1 pt-1 text-[#939598] flex flex-row'>{props.uf}</h3></div>
    <p className='text-[13px] mt-3 leading-6 font-light text-white '>{props.adress}</p>
    <p className='text-[13px] leading-6 font-light text-white '>{props.city}</p>
    <p className='text-[13px] leading-6 font-light text-white '>{props.country}</p>
    <p className='text-[13px] leading-6 font-light text-white '>{props.cellphone}</p>

    <div className='flex mt-4 gap-1 w-full  bg-zinc-800 flex-row '>
      
      <a target='_blank' href={props.mapLocation} className='text-[13px] mt-auto cursor-pointer hover:text-zinc-500 ease-in duration-100 text-[#939598] z-10 uppercase'>
        ver no google maps
    </a>
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" className=" text-white mb-1 mt-auto fill-white "><path d="m8.4 9.2h-7.5c-0.5 0-0.9-0.4-0.9-0.9q0 0 0 0c0-0.4 0.4-0.8 0.9-0.8q0 0 0 0h5.3l-5.7-5.8c-0.4-0.3-0.4-0.9 0-1.2 0.3-0.4 0.9-0.4 1.2 0l5.8 5.7v-5.3c0-0.5 0.4-0.9 0.9-0.9 0.5 0 0.8 0.4 0.8 0.9v7.4c0.1 0.5-0.3 0.9-0.8 1q0 0 0-0.1z"/></svg>
    
    </div>
   </div>
  )
}