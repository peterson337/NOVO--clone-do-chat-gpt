"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Sidebar from "./components/Sidebar";
import { AiOutlineMenu } from 'react-icons/ai';



const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  const handlerClearConversation = () => {

  }

  const handlerNewChat = () => {

  }

  return (
    <main className='flex min-h-screen bg-gpt-gray'>
       <Sidebar
       open={sidebarOpen}
       onCLose={closeSidebar}
       onCLear={handlerClearConversation}
       onNewChat={handlerNewChat}>
        

      </Sidebar>   

    <section className='text-2xl text-white ml-3 mt-3 md:hidden'>
      <button onClick={() => setSidebarOpen(true)}><AiOutlineMenu/></button>
    </section>

       </main>
  )
}

export default Page
