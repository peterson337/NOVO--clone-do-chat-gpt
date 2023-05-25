import React, {useState} from 'react'
import { Chat } from '../types/Chat'
// ?    Lapis
import {BsPencil} from "react-icons/bs";

//TODO: Cheack FaTrash BiPlusMedical
import {AiOutlineCheck} from "react-icons/ai";

//!     Lixo
import {FaTrash} from "react-icons/fa";

//*     Chat
import { BsChatLeft } from 'react-icons/bs';

//      Close
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
    chatItem: Chat
    active: boolean;
    onClick: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}

const SidebarChatButton = ({chatItem, active, onClick, onDelete, onEdit } : Props) => {
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false);
    const [titleInput, setTitleInput] = useState(chatItem.title);

    const handleClickButton = () => {
            if (!editing || !deleting) {
                onClick(chatItem.id);
            }
    }
  
    const handleComfirmButton = () => {
        if (deleting) onDelete(chatItem.id);

        if (editing && titleInput.trim() !== '') {
            onEdit(chatItem.id, titleInput.trim())
        }
        
        setDeleting(false);
        setEditing(false);
    }

    const handleCancelButton = () => {
        setDeleting(false);
        setEditing(false);
    }

    return (
    <div onClick={handleClickButton} className={`flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/10 
    ${active? 'bg-gray-500/20':
    'bg-transparent'}`}>

        <div className='mr-3'>
            {!deleting && <BsChatLeft/>}
            {deleting && <FaTrash/>}
        </div>

        <div className='flex-1 text-sm overflow-x-hidden'>
             {editing &&
               <input type="text" className='w-full bg-transparent text-sm outline-none border border-blue-500'
               value={titleInput} 
               onChange={e => setTitleInput(e.target.value)}
               />     
             }

             {!editing &&
                <div className='border border-transparent truncate'>
                {!editing && chatItem.title}
                {editing && `Delete "${chatItem.title}"`}
                </div>
             }

             {active && !deleting && !editing &&
                <div className='flex'>
                      <div onClick={() => setEditing(true)} className='cursor-pointer mx-1 
                      opacity-60 hover:opacity-100'>
                      <BsPencil/>
                      </div>  

                      <div onClick={() => setDeleting(true)} className='cursor-pointer mx-1
                       opacity-60 hover:opacity-100'>
                      <FaTrash/>
                     </div>  
                </div>
             }

                {(deleting || editing) &&
                <div className='flex'>
                      <div onClick={handleComfirmButton} className='cursor-pointer mx-1 opacity-60 hover:opacity-100'>
                      <AiOutlineCheck/>
                      </div>  

                      <div onClick={handleCancelButton} className='cursor-pointer mx-1 opacity-60 hover:opacity-100'>
                      <AiOutlineClose/>
                     </div>  
                </div>
             }

        </div>

    </div>
  )
}

export default SidebarChatButton