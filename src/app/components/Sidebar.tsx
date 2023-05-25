import React, {ReactNode}  from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import SidebarButton from "../components/SidebarButton";
import {FaTrash} from "react-icons/fa";


type Props = {
    children: ReactNode;
    open: boolean;
    onCLose: () => void;
    onCLear: () => void;
    onNewChat: () => void;

}

const Sidebar = ({open, onCLose, onCLear, onNewChat, children} : Props) => {
  return (
    <section className={`fixed left-0 bottom-0 top-0 text-white 
    ${open? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64 md:static`}>
            <div className={`transition-all duration-200 flex h-screen ${open?'ml-0':'-ml-96' } md:ml-0`}>

            <div className='flex flex-col w-64 p-2 bg-[#202123]'> 

            <div onClick={onNewChat} className='flex items-center p-3 rounded-md text-sm cursor-pointer border border-white/20 hover:bg-gray-500/20'>

            <AiOutlinePlus className='text-white mr-2 ml-1' />
            
                New chat
            </div>

            <nav className='flex-1 pt-2 overflow-y-auto'>
                {children}
            </nav>


            <div className='border-t border-gray-700 pt-2'>
                <SidebarButton
                 icon={<FaTrash/>}
                 label={"Limpar todas as conversas"}
                 onClick={onCLear}/>
            </div>

            </div>

            <div onClick={onCLose} className='flex justify-center item-center w-10 h-10 cursor-pointer md:hidden'>
            <AiOutlineClose className='text-2xl relative top-2'/>
            </div>
        </div>
    </section>
  )
}

export default Sidebar