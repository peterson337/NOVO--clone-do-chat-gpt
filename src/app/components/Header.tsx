import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';



type Props = {
    openSidebarClick: () => void;
    newChatClick: () => void;
    title: string;
}

const Header = ({openSidebarClick, newChatClick, title} : Props) => {
  return (

    <header className='flex justify-between items-center w-full border-b border-b-gray-600 
        p-2 text-white md:hidden'>

        <div onClick={openSidebarClick}>
        <AiOutlineMenu/>
        </div>

        <div className='mx-2 truncate'>{title}</div>

        <div>
        <GrAdd className='text-white mr-2 ml-1'/>

        </div>

    </header>
  )
}

export default Header