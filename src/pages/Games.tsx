import { GamesHeader } from "../components/GamesHeader";
import GamesOne from "../assets/web/o-que-fazemos/games-1.png"
import GamesTwo from "../assets/web/o-que-fazemos/games-2.png"
import GamesThree from "../assets/web/o-que-fazemos/games-3.png"
// import { GamesCard} from "../components/GamesCard";
import Arrow from '../assets/diagonal-icon.svg'
import Controller from "../assets/web/o-que-fazemos/controller.png"


export function Games() {
  
  const gamesCardData =  [
    {id: 0, image: GamesOne, description: <p> A PlanXP tem uma equipe qualificada para o <span>desenvolvimento de jogos digitais</span> para dispositivos móveis <code>(smartphones, tablets e afins)</code>.</p> },
    {id: 1, image: GamesTwo, description: <p>Desenvolvemos games para anunciar seus produtos e serviços, através da <span>gamificação</span> <code>(aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado)</code>.</p> },
    {id: 2, image: GamesThree, description: <p>Utilizando as últimas tecnologias para a <span>criação de games</span>, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultado que ele busca.</p>},
  ]
  
  
  return(
    <div className="w-screen flex  pt-48 flex-row pl-28 bg-[#1e1e1e] h-screen">
      <>
      <GamesHeader />
      {/* {gamesCardData.map(item => {() =>{
        <GamesCard imageSource={item.image} description={item.description}/>}
      })} */}
      <div className="ml-16 flex flex-row mt-4 gap-3">

      <div  className="flex z-10 flex-col h-[480px] w-48 ">
     <img className="w-64  mix-blend-normal h-48 object-fill " src={GamesOne}></img>  
     <p className="text-[13px] leading-6   mt-6 text-white w-full"> A <span className="text-white font-semibold">PlanXP</span> tem uma equipe qualificada para o <span className="text-white font-semibold">desenvolvimento de jogos digitais</span> para <span className="text-white font-semibold">dispositivos móveis</span> <code>(smartphones, tablets e afins)</code>. </p>
   </div>

   <div  className="flex z-10 flex-col h-[480px] w-48 ">
     <img className="w-64  mix-blend-normal h-48 object-fill " src={GamesTwo}></img>  
     <p className="text-[13px] leading-6  mt-6 text-white w-full"> Desenvolvemos games para anunciar seus produtos e serviços, através da<span className="text-white font-semibold"> gamificação</span> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado). </p>
   </div>

   <div  className="flex z-10 flex-col  h-[480px] w-48 ">
     <img className="w-64  mix-blend-normal h-48 object-fill " src={GamesThree}></img>  
     <p className="text-[13px] leading-6  mt-6 text-white w-[99%]">Utilizando as últimas tecnologias para a <span className="text-white font-semibold" >criação de games</span>, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultado que ele busca.</p>
   </div>

   <div  className="flex z-10 flex-col h-[480px] w-48 ">
    <div className="w-64 h-48  ">
    <img className="w-[74px] h-10 mt-36 ml-2" src={Controller}></img>
    
   </div>
     <p className="text-2xl leading-9   mt-6 text-white w-full "> Experimente inovar com a <span className="text-white font-semibold">PlanXP</span> <span className="text-white font-semibold">para desenvolver os seus jogos digitais!</span> </p>
   <div className="leading-3 flex flex-row pt-4 w-36" >
   <a className="text-xs tracking-tight cursor-pointer hover:text-zinc-500 ease-in text-[#939598] uppercase">entre em contato agora mesmo</a>
   <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="14" height="14" className="text-white  fill-white "><path d="m8.4 9.2h-7.5c-0.5 0-0.9-0.4-0.9-0.9q0 0 0 0c0-0.4 0.4-0.8 0.9-0.8q0 0 0 0h5.3l-5.7-5.8c-0.4-0.3-0.4-0.9 0-1.2 0.3-0.4 0.9-0.4 1.2 0l5.8 5.7v-5.3c0-0.5 0.4-0.9 0.9-0.9 0.5 0 0.8 0.4 0.8 0.9v7.4c0.1 0.5-0.3 0.9-0.8 1q0 0 0-0.1z"/></svg>
   </div>
   </div>
 
      </div>
    </>  
    </div>
  )
}