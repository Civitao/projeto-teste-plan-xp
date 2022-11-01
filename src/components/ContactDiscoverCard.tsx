interface ContactDiscoverCardProps {
  image: string;
  description: string;
  imageDimensions: string;
  siteRef: string;
}

export function ContactDiscoverCard ({...props}: ContactDiscoverCardProps) {
  return (
   <div className='flex flex-col px-1 w-[200px] bg-[#1E1E1E] h-[240px]'>

    <div className="h-16 ">
    <img  src={props.image} className={props.imageDimensions}></img>
    </div>
    <p className='text-[13px] mt-3 leading-6 font-light text-white '>{props.description}</p>

    <div className='flex mt-4 gap-1 w-full  bg-zinc-800 flex-row '>

      <a target='_blank'  href={props.siteRef} className='text-[13px] ease-in duration-100 mt-auto cursor-pointer hover:text-zinc-500 text-[#939598] z-10 uppercase'>
        conheça
    </a>
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" className=" text-white mb-1 mt-auto fill-white "><path d="m8.4 9.2h-7.5c-0.5 0-0.9-0.4-0.9-0.9q0 0 0 0c0-0.4 0.4-0.8 0.9-0.8q0 0 0 0h5.3l-5.7-5.8c-0.4-0.3-0.4-0.9 0-1.2 0.3-0.4 0.9-0.4 1.2 0l5.8 5.7v-5.3c0-0.5 0.4-0.9 0.9-0.9 0.5 0 0.8 0.4 0.8 0.9v7.4c0.1 0.5-0.3 0.9-0.8 1q0 0 0-0.1z"/></svg>
    </div>
   </div>
  )
}