"use client"
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import Footer from "./components/Footer";
import SidebarChatButton from "./components/sidebarChatButton";
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
    // Carregar os chats salvos do localStorage ao carregar a página
    const savedChats = localStorage.getItem('chatList');
    if (savedChats) {
      setChatList(JSON.parse(savedChats));
    }
  }, []);

  useEffect(() => {
    // Salvar os chats no localStorage sempre que houver uma alteração na lista
    localStorage.setItem('chatList', JSON.stringify(chatList));
  }, [chatList]);

  useEffect(() => {
    // Retrieve the active chat ID from localStorage
    const activeChatId = localStorage.getItem('activeChatId');
  
    // Set the active chat ID if it exists
    if (activeChatId) {
      setChatActiveId(activeChatId);
    }
  }, []);
  

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList])

  useEffect(() => {
    if(AIloading){
      getAiResponse()
    }
  
  }, [AIloading])

  const getAiResponse = () => {
    setTimeout(() => {
        let chatLIstClone = [...chatList];
        let chatIndex = chatLIstClone.findIndex(item => item.id === chatActiveId);
        if (chatIndex > -1) {
          chatLIstClone [chatIndex].messages.push({
            id:  uuidv4(),
            author: 'ai',
            body: `Eu sou ChatGPT, um modelo de linguagem desenvolvido pela OpenAI. Meu objetivo é ajudar a fornecer informações e responder a perguntas de maneira útil e compreensível. Posso auxiliar em uma variedade de tópicos e tentarei ajudar da melhor forma possível com base no conhecimento que adquiri até setembro de 2021. Como uma IA, não possuo uma identidade pessoal, mas estou aqui para ajudá-lo com suas dúvidas e solicitações. Como posso ser útil para você hoje? :)`,
          })
            // Save updated chat list to localStorage
          localStorage.setItem('chatList', JSON.stringify(chatLIstClone));
        }

        setChatList(chatLIstClone);
        setAIloading(false);
    }, 2000)
  }
    

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
      const newChat: Chat = {
        id: newChatId,
        title: message,
        messages: [
          {
            id: uuidv4(),
            author: 'me',
            body: message,
          },
        ],
      };

      const updatedChatList: Chat[] = [newChat, ...chatList];
      setChatList(updatedChatList);
      setChatActiveId(newChatId);
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

  const handleSelectChat = (id: string) => {
        if (AIloading) return;
        let item = chatList.find(item => item.id === id);
        if (item) {
          setChatActiveId(item.id);
      
          // Save the active chat ID to localStorage
          localStorage.setItem('activeChatId', item.id);
        }

        /* if (!handleDeleteChat() || !handleEditiChat()) {
            closeSidebar();
        } */
        
  }

  const handleDeleteChat = (id: string) => {
          let chatListClone = [...chatList];
          let chatIndex = chatListClone.findIndex(item => item.id === id);
          chatListClone.splice(chatIndex, 1);
          setChatList(chatListClone);
          setChatActiveId('');

          
  }

  const handleEditiChat = (id: string, newTitle: string) => {
            if (newTitle) {
            let chatListClone = [...chatList];
            let chatIndex = chatListClone.findIndex(item => item.id === id);
            chatListClone[chatIndex].title = newTitle;
            setChatList(chatListClone);
            }

  }

  return (
    <main className='flex min-h-screen bg-gpt-gray'>
       <Sidebar
       open={sidebarOpen}
       onCLose={closeSidebar}
       onCLear={handlerClearConversation}
       onNewChat={handlerNewChat}>

{
  chatList.map(item => {
    return (
      <SidebarChatButton
        key={item.id}
        chatItem={item}
        active={item.id === chatActiveId}
        onClick={handleSelectChat}
        onDelete={handleDeleteChat}
        onEdit={handleEditiChat}
      />
    );
  })
}


      </Sidebar>   

    <section className='flex flex-col w-full '>

      <Header
      openSidebarClick={openSidebar}
      title={chatActive? chatActive.title : 'Nova conversa'}
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
