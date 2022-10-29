import { ReactNode } from "react";
import GamesOne from '../assets/web/o-que-fazemos/games-1.png'

// interface GamesCardProps {
//   imageSource: string;
//   description: ReactNode;
//   children?: ReactNode;
// }

export function GamesCard() {
  return(
    <div  className="flex z-10 flex-col bg-red-500 h-[340px] w-[122px] ">
     
      <img className="w-[640px] pb-12 mix-blend-normal   h-[192px] object-fill " src={GamesOne}></img>

      <div className="h-40 text-xs w-full">
      <p className="text-[10px] tracking-tighter w-full">A PlanXP tem uma equipe qualificada para o desenvolvimento de jogos digitais para dispositivos móveis (smartphones, tablets e afins). </p>
      </div>
    </div>
  )
}