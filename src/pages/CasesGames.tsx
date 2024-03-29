import { CasesGamesHeader } from "../components/CasesGamesHeader";

import CompanyOne  from '../assets/web/plan-news/company-1.png'
import CompanyTwo  from '../assets/web/plan-news/company-2.png'
import CompanyThree  from '../assets/web/plan-news/company-3.png'
import CompanyFour  from '../assets/web/plan-news/company-4.png'
import CompanyFive  from '../assets/web/plan-news/company-5.png'
import { CasesGamesCard } from "../components/CasesGamesCard";

export function CasesGames() {

    const newsData = [ 
      {id: 0, imageRef: CompanyOne, name: 'ska', title: 'Plan cria o novo site da SKA', description: 'Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...'},
      
      {id: 1, imageRef: CompanyTwo, name: 'tintas killing', title: 'Plan cria o novo site para a Tintas Killing', description: 'Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...'},

      {id: 2, imageRef: CompanyThree, name: 'cargo br', title: 'Estamos desenvolvendo o novo site da CargoBR', description: 'Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam ferment...'},

      {id: 3, imageRef: CompanyFour, name: 'xalingo', title: 'Clubinho Xalingo com novidades', description: 'Curabitur vitae tellus volutpat, imperdiet est nec, efficitur mi. Cras pellentesque ultricies diam at dictum. Cras pellentesque...'},

      {id: 4, imageRef: CompanyFive, name: 'aromatic', title: 'Novo site da Aromatic no ar', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibed um urna leo, at consectetur consectetur  lorem viverra...'},
    ]

  return(
    <div id="/cases-games" className="w-screen bg-[#1e1e1e] invisible md:h-screen   md:pl-24  md:mt-[360px] md:visible lg:pt-48 pt-80 lg:pl-28 2xl:h-screen 2xl:mt-0  h-screen">
      <CasesGamesHeader/>

      <div className="mt-12 mb-4 md:mt-28 md:h-[1200px] row-span-1 columns-2 2xl:flex 2xl:flex-row 2xl:gap-5 ">  

      {newsData.map((item) => (
        <CasesGamesCard  image={item.imageRef} key={item.id} caseTitle={item.title} description={item.description} caseName={item.name}/>
      ))}

      </div>

    </div>
  )
}