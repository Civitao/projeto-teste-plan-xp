interface MobileNewsCardProps {
  newsName: string;
  newsTitle: string;
  description: string;
  image: string;
  cornerIcon: string;
}

export function MobileNewsCard({...props}: MobileNewsCardProps) {
  return(
    <div className="w-[220px] z-0 h-[482px] bg-[#1e1e1e]  mb-16 relative">
      <div className="w-[106px] h-[82px] z-10 rotate-45 absolute -right-11 -top-[38px]   bg-[#1e1e1e] ">
        <img className='-rotate-45 absolute top-14 right-8' src={props.cornerIcon}></img>
        </div> 
        <img className="h-44 w-[220px]" src={props.image}></img>
                                                  
        <div  className="pl-2 pr-2  h-[264px] pt-4">
        <h4 className="uppercase text-xs bg-[#939598] p px-1 w-fit font-medium  text-black">{props.newsName}</h4>
        <h3 className="text-[#A1A1A3] tracking-normal leading-6 mt-4 text-xl">{props.newsTitle}</h3>
        <p className="text-white mt-4 font-light leading-5 tracking-wide text-sm">{props.description}</p>

        <div className="mt-4 flex flex-row gap-1">
        <a className="text-xs cursor-pointer hover:text-zinc-500 ease-in duration-100 text-[#939598] uppercase">saiba mais</a>
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" className="text-white mb-1 mt-auto fill-white "><path d="m8.4 9.2h-7.5c-0.5 0-0.9-0.4-0.9-0.9q0 0 0 0c0-0.4 0.4-0.8 0.9-0.8q0 0 0 0h5.3l-5.7-5.8c-0.4-0.3-0.4-0.9 0-1.2 0.3-0.4 0.9-0.4 1.2 0l5.8 5.7v-5.3c0-0.5 0.4-0.9 0.9-0.9 0.5 0 0.8 0.4 0.8 0.9v7.4c0.1 0.5-0.3 0.9-0.8 1q0 0 0-0.1z"/></svg>
        </div>
        
        </div>
      </div>
          
  )
}