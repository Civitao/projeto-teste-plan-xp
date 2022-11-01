import { ContactDiscoverCard } from "../components/ContactDiscoverCard";
import { ContactForm } from "../components/ContactForm";
import { ContactHeader } from "../components/ContactHeader";
import { ContactLocationCard } from "../components/ContactLocationCard";
import { FollowUsCard } from "../components/FollowUsCard";
import GrupoPlanMarketing from '../assets/web/contato/contact-1.png'
import PlanXp from '../assets/plan-logo.png'
import FullUp from '../assets/web/contato/contact-3.png'



export function Contact() {
  return(
    <div id="contact" className="w-screen pt-80 2xl:mt-0 invisible md:visible lg:pt-48 flex flex-col md:pl-28 md:mt-[940px] lg:flex-row lg:pl-28 bg-[#1e1e1e] 2xl:pl-28 mt-[340px] 2xl:pt-48  h-screen">
        <div className=" h-[660px]">
        <ContactHeader />
        <ContactForm />
        </div>

        <div className="w-[632px] mt-44 lg:ml-28 lg:mt-16 flex flex-col gap-4 h-[480px] ">
          <div className="flex flex-row gap-4">
          <FollowUsCard />
          
          <ContactLocationCard
           uf="/RS" 
           adress="Rua Onze de Junho, 243" 
           country="Brasil" 
           city="Novo Hamburgo / RS" 
           cellphone="+55 51 98229.0400"
           mapLocation="https://goo.gl/maps/GgJDuYy7tdA79Ka88"
           />
          
          <ContactLocationCard
           uf="/SP" 
           adress="Rua Ibijaú, 355/Sala 1309" 
           country="Brasil" 
           city="São Paulo / SP" 
           cellphone="+55 11 98871.8556" 
           mapLocation="https://goo.gl/maps/6Hd7Xoekh616vuYy9"
           />
        </div>

        <div className="flex flex-row gap-4">
            <ContactDiscoverCard
            siteRef="https://www.planmkt.com.br/"
            image={GrupoPlanMarketing}
            imageDimensions=""
            description="A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação completo."
            />
          
            <ContactDiscoverCard
            siteRef="https://planmkt.com.br/planxp"
            imageDimensions="w-[96px] mt-4"
            image={PlanXp}
            description="A Plan XP é especializada em realidade virtual, realidade aumentada e jogos."
            />
          
            <ContactDiscoverCard
            siteRef="https://www.planmkt.com.br/fullup/o-que-fazemos/branding"
            imageDimensions="mt-5"
            image={FullUp}
            description="A FullUp é uma agência especializada em branding, design e campanhas."
            />
          </div>
        </div>

    </div>
  )
}