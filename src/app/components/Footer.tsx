import React from 'react'
import ChatMesseInput from "./ChatMesseInput";


type  Props = {
    onSendMessage: (message: string) => void;
    disable: boolean;
}

const Footer = ({onSendMessage, disable} : Props) => {
  return (
    <footer className='w-full border-t border-t-gray-600 p-2'>
        <div className='max-w-4x1 m-auto'>
        <ChatMesseInput
        disable={disable}
        onSend={onSendMessage}/>
        </div>

        <div className='pt-3 text-center text-xs text-gray-300'>
        Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.
        <a href="#" className='underline'>ChatGPT May 12 Version</a>
        </div>
        
    </footer>

  )
}

export default Footer