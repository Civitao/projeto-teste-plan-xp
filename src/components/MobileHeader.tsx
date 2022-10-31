export function MobileHeader () {
  return (
    <div className="h-[122px]  gap-8 w-screen flex  flex-col ">

      <div className="text-[#292929] font-bold object-cover tracking-tight text-[92px] relative w-[300px] h-[80px] ">03.
      <h2 className="text-[32px] left-2 top-[48px] font-normal absolute z-10 tracking-normal  text-[#939598] ">/Plan news</h2>
      </div>
    <div className="flex flex-row z-10 gap-1">
    <a href="https://www.planmkt.com.br/blog" target="_blank" className="text-[13px]  cursor-pointer hover:text-zinc-500 ease-in duration-100 text-[#939598] z-10 uppercase">clique aqui pra ver todo o blog</a>
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" className=" text-white mb-1 mt-auto fill-white "><path d="m8.4 9.2h-7.5c-0.5 0-0.9-0.4-0.9-0.9q0 0 0 0c0-0.4 0.4-0.8 0.9-0.8q0 0 0 0h5.3l-5.7-5.8c-0.4-0.3-0.4-0.9 0-1.2 0.3-0.4 0.9-0.4 1.2 0l5.8 5.7v-5.3c0-0.5 0.4-0.9 0.9-0.9 0.5 0 0.8 0.4 0.8 0.9v7.4c0.1 0.5-0.3 0.9-0.8 1q0 0 0-0.1z"/></svg>
    </div>
    </div>
  )
}