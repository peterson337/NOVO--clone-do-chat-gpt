import React, {useState, useRef, KeyboardEvent,useEffect } from 'react'
 type Props = {
    disable: boolean;
    onSend:(message: string) => void;
 }

const ChatMesseInput = ({disable, onSend} : Props) => {
    const [text, setText] = useState('');
    const textEl = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      
        if (textEl.current) {
            textEl.current.style.height = '0px';
            let scrollHeight = textEl.current.scrollHeight;
            textEl.current.style.height = scrollHeight + 'px';
        }
      
    }, [text,textEl])
    

    const handleSendMessage = () => {
        if (!disable && text.trim() !== '') {
            onSend(text);
            setText('');
        }
    }

    const handleTextKeuUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.code.toLowerCase() === 'enter' && !event.shiftKey) {
                event.preventDefault();
                handleSendMessage();
            }
    }

  return (
    <div className={`flex border border-gray-800/50 bg-gpt-lightgray p-2 rounded-md ${disable && 'opacity-50'}`}>

        <textarea className='flex-1 border-0 bg-transparent resize-none outline-none h-7 max-48 overflow-y-auto text-white'
        ref={textEl}
        placeholder='Send a message...'
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyUp={handleTextKeuUp}
        disabled={disable}>
        </textarea>

        <div onClick={handleSendMessage} className={`self-end p-1 cursor-pointer rounded  
        ${text.length? 'opacity-100 hover:bg-black/20' : 'opacity-20'} text-white`}>
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeLinejoin="round" 
        className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13">
        </line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </div>

    </div>
  )
}

export default ChatMesseInput