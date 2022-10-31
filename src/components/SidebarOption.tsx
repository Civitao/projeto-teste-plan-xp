interface Props {
  menuName: string;
  menuNumber: string;
  active?: boolean;
  pageRef: string;
}

export function SidebarOption ({...props}: Props) {
  return(
     <div  className=" h-[54px] w-40  items-center content-center text-center ">
       
        <div className="text-start  w-25 h-full font-bold text-5xl
         text-zinc-800 object-cover tracking-tight relative ">{props.menuNumber}
        <a href={props.pageRef} className={props.active === true ? "text-start text-[#939598] fade w-30 my-auto mx-auto text-base uppercase  absolute tracking-normal leading-2 font-light left-0 top-4" :
      "text-start ease-in duration-100 hover:text-[#939598] fade cursor-pointer  w-30 my-auto mx-auto text-base text-white uppercase  absolute tracking-normal leading-2 font-light left-0 top-4"}>
          {props.menuName}
        </a>
     </div>
     </div>
  )
}