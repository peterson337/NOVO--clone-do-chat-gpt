import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';



type Props = {
    openSidebarClick: () => void;
    newChatClick: () => void;
    title: string;
}

const Header = ({openSidebarClick, newChatClick, title} : Props) => {
  return (

    <header className='flex justify-between items-center w-full border-b border-b-gray-600 
        p-2 text-white md:hidden'>

        <div onClick={openSidebarClick} className=' p-1'>
        <AiOutlineMenu className='text-2xl'/>
        </div>

        <div className='mx-2 truncate'>{title}</div>

        <div onClick={newChatClick} className=' p-1'>
        <AiOutlinePlus className='text-white mr-2 ml-1 text-2xl'/>

        </div>

    </header>
  )
}

export default Header