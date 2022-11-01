import { GamesHeader } from "../components/GamesHeader";
import GamesOne from "../assets/web/o-que-fazemos/games-1.png"
import GamesTwo from "../assets/web/o-que-fazemos/games-2.png"
import GamesThree from "../assets/web/o-que-fazemos/games-3.png"
// import { GamesCard} from "../components/GamesCard";
import Arrow from '../assets/diagonal-icon.svg'
import Controller from "../assets/web/o-que-fazemos/controller.png"
import { GamesCard } from "../components/GamesCard";


export function Games() {
  
  const gamesCardData =  [
    {id: 0, image: GamesOne, description: <p> A <span className="text-white font-semibold">PlanXP</span> tem uma equipe qualificada para o <span className="text-white font-semibold">desenvolvimento de jogos digitais</span> para <span className="text-white font-semibold">dispositivos móveis</span> (smartphones, tablets e afins).</p>  },

    {id: 1, image: GamesTwo, description: <p> Desenvolvemos games para anunciar seus produtos e serviços, através da<span className="text-white font-semibold"> gamificação</span> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado).</p> },

    {id: 2, image: GamesThree, description:<p>Utilizando as últimas tecnologias para a <span className="text-white font-semibold" >criação de games</span>, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultado que ele busca.</p>},
  ]
  
  
  return(
    <div id="/games" className="w-screen md:visible hidden md:flex md:flex-col pt-[128px] md:pl-28 lg:pt-48 lg:pl-28 lg:flex  lg:flex-row  bg-[#1e1e1e] h-screen">
      <>
      <GamesHeader />
  
      <div className="lg:ml-16 mt-60 flex flex-row md:flex-row lg:flex lg:flex-row lg:mt-4 gap-3">
  
      {gamesCardData.map((item) => (
        <GamesCard image={item.image} key={item.id} description={item.description} /> ))}

     

 



   <div  className="flex z-10 flex-col h-[480px] w-48 ">
    <div className="w-64 h-48  ">
    <img className="w-[74px] h-10 mt-36 ml-2" src={Controller}></img>
    
   </div>
     <p className="text-2xl leading-9 font-light  mt-6 text-white w-full "> Experimente inovar com a <span className="text-white font-semibold">PlanXP</span> para <span className="text-white font-semibold">desenvolver os seus jogos digitais!</span></p>
   <div className="leading-3 flex flex-row pt-4 w-36" >
   <a className="text-xs tracking-tight cursor-pointer hover:text-zinc-500 ease-in duration-100 text-[#939598] uppercase">entre em contato agora mesmo</a>
   <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="14" height="14" className="text-white  fill-white "><path d="m8.4 9.2h-7.5c-0.5 0-0.9-0.4-0.9-0.9q0 0 0 0c0-0.4 0.4-0.8 0.9-0.8q0 0 0 0h5.3l-5.7-5.8c-0.4-0.3-0.4-0.9 0-1.2 0.3-0.4 0.9-0.4 1.2 0l5.8 5.7v-5.3c0-0.5 0.4-0.9 0.9-0.9 0.5 0 0.8 0.4 0.8 0.9v7.4c0.1 0.5-0.3 0.9-0.8 1q0 0 0-0.1z"/></svg>
   </div>
   </div>
 
      </div>
    </>  
    </div>
  )
}