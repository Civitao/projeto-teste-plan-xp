
interface GamesCardProps {
  image: string;
  description: JSX.Element;
  
}

export function GamesCard({...props}: GamesCardProps) {
  return(
    <div className="flex z-10 flex-col h-[480px] w-[186px] ">
    <img className="w-64  mix-blend-normal h-48 object-fill " src={props.image}></img>  
    <p className="text-[13px]  leading-[26px] font-light mt-6 md: text-white w-full">{props.description}</p>
  </div>
    
  )
}