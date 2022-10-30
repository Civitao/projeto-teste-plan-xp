import { ContactHeader } from "../components/ContactHeader";

export function Contact() {
  return(
    <div id="contact" className="w-screen pt-48  pl-28 bg-[#1e1e1e]  h-screen">
        <ContactHeader />

        <form className="w-[600px] flex flex-col relative text-white h-[340px]">
          
        <label className="text-[15px]" htmlFor="name" >Nome:</label>
        <div className="bg-[#1e1e1e] rotate-45 w-6 h-6 absolute border-b-2 border-[#2c2c2c] -right-3 top-4"> </div> 
          <input name="name" className="w-full h-9 mt-1 bg-[#1e1e1e]  outline-none text-white border-2 border-[#2c2c2c]" type='name'/>
                
        <div className="columns-2 mt-4">

        <div className="flex flex-col relative ">
        <label className="text-[15px]" htmlFor="e-mail">E-mail: </label>
        <div className="bg-[#1e1e1e] rotate-45 w-6 h-6 absolute border-b-2 border-[#2c2c2c] -right-2 top-4"> </div> 
          <input name="e-mail" className="w-[290px] h-9 mt-1 bg-[#1e1e1e]  outline-none text-white border-2 border-[#2c2c2c]" type='email'/>
        </div>

        <div className="flex flex-col relative">
        <label className="text-[15px]" htmlFor="cellphone"  >Telefone:  </label>
        <div className="bg-[#1e1e1e] rotate-45 w-6 h-6 absolute border-b-2 border-[#2c2c2c] -right-2 top-4"> </div>
          <input id="cellphone" name="cellphone" className="w-[290px] h-9 bg-[#1e1e1e] outline-none text-white border-2 mt-1 border-[#2c2c2c]" type='text'/>     
        </div>

        </div>

        <div className="relative mt-4">
        <label className="text-[15px] " htmlFor="message">Mensagem:</label>
        <div className="bg-[#1e1e1e] rotate-45 w-6 h-6 absolute border-b-2 border-[#2c2c2c] -right-3 top-4"> </div>
        <textarea name="message"  className="w-full mt-1 resize-none h-28  bg-[#2c2c2c]  text-white outline-none border-2 border-[#404040]" />
        </div>
        </form>
    </div>
  )
}