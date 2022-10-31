import { MobileHeader } from "../components/MobileHeader";
import NewsOne from '../assets/mobile/news-1.png'
import NewsTwo from '../assets/mobile/news-2.png'
import NewsThree from '../assets/mobile/news-3.png'
import NewsFour from '../assets/mobile/news-4.png'
import Controller from '../assets/web/plan-news/plan-news-company-div-controller.png'
import Brain from '../assets/mobile/brain-icon.png'
import { MobileNewsCard } from "../components/MobileNewsCard";

export function Mobile () {
  const newsData = [
    {name: ' Humano Virtual', title: 'Conheça o Papai Noel Virtual desenvolvido pela PlanXP', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibed um urna leo, tetviverra...', image: NewsOne, icon: Brain },
    {name: ' bourbon go', title: 'A nova mania dentro do Bourbon Shopping', description: 'O Bourbon Shopping lança em primeira mão um aplicativo que usa geolocalização e realidade aumentada, promovendo a interação entre o usuário e o ambiente através da tela do celular.', image: NewsThree, icon: Brain },
    {name: ' dhl', title: 'Treinamento em realidade virtual na DHL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibed um urna leo, tetviverra lorem ipsum...', image: NewsTwo, icon: Controller},
    {name: ' Civitao Land', title: 'Conheça o Novo Jogo de Civitao', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibed um urna leo, tetviverra...', image: NewsFour, icon: Controller },
  ]
  return (
    <div className="px-8 visible sm:hidden w-screen pt-16 h-screen">
      <>
      <MobileHeader />
      
      <div className="w-screen mt-12  columns-2 gap-4">
      {newsData.map((item => (
        <MobileNewsCard image={item.image} cornerIcon={item.icon} newsName={item.name} newsTitle={item.title} description={item.description} />
      )))}
      </div>
      </>
    </div>
  )
}