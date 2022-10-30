import { ContactHeader } from "../components/ContactHeader";

export function Contact() {
  return(
    <div id="contact" className="w-screen pt-48  pl-28 bg-[#1e1e1e]  h-screen">
        <ContactHeader />

        <form className="w-[600px] flex flex-col relative text-white h-[340px]">
          
        <label className="text-[15px]" htmlFor="name" >Nome:</label>
        <div className="bg-[#1e1e1e] rotate-45 w-6 h-6 absolute border-b-2 border-[#363636] -right-3 top-4"> </div> 
          <input name="name" className="w-full h-9 mt-1 bg-[#1e1e1e]  outline-none text-white border-2 border-[#363636]" type='name'/>
                
        <div className="columns-2 mt-4">

        <div className="flex flex-col relative ">
        <label className="text-[15px]" htmlFor="e-mail">E-mail: </label>
        <div className="bg-[#1e1e1e] rotate-45 w-6 h-6 absolute border-b-2 border-[#363636] -right-2 top-4"> </div> 
          <input name="e-mail" className="w-[290px] h-9 mt-1 bg-[#1e1e1e]  outline-none text-white border-2 border-[#363636]" type='email'/>
        </div>

        <div className="flex flex-col relative">
        <label className="text-[15px]" htmlFor="cellphone"  >Telefone:  </label>
        <div className="bg-[#1e1e1e] rotate-45 w-6 h-6 absolute border-b-2 border-[#363636] -right-2 top-4"> </div>
          <input id="cellphone" name="cellphone" className="w-[290px] h-9 bg-[#1e1e1e] outline-none text-white border-2 mt-1 border-[#363636]" type='text'/>     
        </div>

        </div>

        <div className="relative mt-4">
        <label className="text-[15px] " htmlFor="message">Mensagem:</label>
        <div className="bg-[#1e1e1e] rotate-45 w-6 h-6 absolute border-b-2 border-[#363636] -right-3 top-4"> </div>
        <textarea name="message"  className="w-full mt-1 resize-none h-28  bg-[#1e1e1e]  text-white outline-none border-2 border-[#363636]" />
        </div>

        <div className="flex flex-row items-center">
        <button className="text-[#939598] items-center  content-center  text-center text-sm uppercase h-5 w-16" type="submit">
          Enviar  
          
          </button>
          <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" className=" text-white mb-1 mt-auto fill-white "><path d="m8.4 9.2h-7.5c-0.5 0-0.9-0.4-0.9-0.9q0 0 0 0c0-0.4 0.4-0.8 0.9-0.8q0 0 0 0h5.3l-5.7-5.8c-0.4-0.3-0.4-0.9 0-1.2 0.3-0.4 0.9-0.4 1.2 0l5.8 5.7v-5.3c0-0.5 0.4-0.9 0.9-0.9 0.5 0 0.8 0.4 0.8 0.9v7.4c0.1 0.5-0.3 0.9-0.8 1q0 0 0-0.1z"/></svg>
          </div>
        </form>
    </div>
  )
}