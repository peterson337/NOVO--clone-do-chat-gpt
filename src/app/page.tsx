"use client"
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import Footer from "./components/Footer";
import { Chat } from './types/Chat';
import {v4 as uuidv4} from "uuid";

//!                                   2:33:51

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AIloading, setAIloading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList])
  

  const openSidebar = () => setSidebarOpen(true);

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  const handlerClearConversation = () => {
        if (AIloading) return;
        setChatActiveId('');
        setChatList([]);
  }

  const handlerNewChat = () => {
        if (AIloading) return;
        setChatActiveId('');
        closeSidebar();
  }

  const handlerSendMensage = (message: string) => {
    if (!chatActiveId){
      // Creating a new chat
      let newChatId = uuidv4();
      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          {id:uuidv4(), 
           author: 'me',
            body: message}
        ]
      }, ...chatList]);
      setChatActiveId(newChatId)
    }else{
      //Updating existing chat
        let chatListClone = [...chatList];
        let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
        chatListClone[chatIndex].messages.push({
          id: uuidv4(),
          author: 'me',
          body: message
        });
        setChatList(chatListClone);
    }
        setAIloading(true);
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
        chat={chatActive}
        loading={AIloading}/>

        <Footer
        onSendMessage={handlerSendMensage}
        disable={AIloading}
        />

    </section>

       </main>
  )
}

export default Page
