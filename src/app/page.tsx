"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import { Chat } from './types/Chat';



const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatArchive, setChatArchive] = useState<Chat>();

  const openSidebar = () => setSidebarOpen(true);

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

    <section className='flex flex-col w-full '>

      <Header
      openSidebarClick={openSidebar}
      title={'title'}
      newChatClick={handlerNewChat}
        />

        <ChatArea
        chat={chatArchive}/>
    </section>

       </main>
  )
}

export default Page
