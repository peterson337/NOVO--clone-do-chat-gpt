import React, {ReactNode} from 'react'
type Props = {
    icon?: ReactNode;
    label: string;
    onClick: () => void;
}
const SidebarButton = ({icon, label, onClick} : Props) => {
  return (
    <div>
        <div onClick={onClick} className='flex items-center rounded-md p-3 text-sm cursor-pointer
        hover:bg-gray-500/20'>

           <div className='mr-3'>
            {icon}
           </div> 

           <div className='flex-1 truncate'>
            {label}
           </div>

        </div>
    </div>
  )
}

export default SidebarButton