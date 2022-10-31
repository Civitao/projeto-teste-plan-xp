
interface TopBarMenuOptionProps {
  function: any;
  menuName: string;
}

export function TopBarMenuOption({...props}: TopBarMenuOptionProps) {
  return(
    <a onClick={props.function} className='cursor-pointer text-lg text-[#939598] uppercase'>/{props.menuName}</a>
  )
}