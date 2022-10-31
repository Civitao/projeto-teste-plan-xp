import Logo from '../assets/plan-logo.png'
export function TopBar() {
  return (
    <div className="w-full h-36 items-center px-8 flex xl:invisible visible justify-between bg-[#323232]">
      <img className='w-40 h-24 ' src={Logo}></img>
      <button></button>
    </div>
  )
}