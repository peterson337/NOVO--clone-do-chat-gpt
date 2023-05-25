import React from 'react'

const ChatPlaceholder = () => {
  return (
    <div className='m-5'>

        <h3 className='text-4xl font-bold text-center my-16 mt-60 text-white'>
            ChatGPT
        </h3>

            <div className='flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4x1'>

            <div>

            <div className='flex justify-center items-center text-lg mb-3 md:flex md:flex-col'>

            <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" 
            className="h-6 w-6 text-white " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            

           <p className='ml-2 text-white'> Examples</p>

            </div>

            <div>

                <div className='bg-white/5 rounded text-center text-sm text-white mb-3 p-3'>
                &quot;Explain quantum computing in simple terms&quot; →
                </div>

                <div className='bg-white/5 rounded text-center text-sm text-white mb-3 p-3'>
                &quot;Got any creative ideas for a 10 year old’s birthday?&quot; →
                </div>

                <div className='bg-white/5 rounded text-center text-sm text-white mb-3 p-3'>
                &quot;How do I make an HTTP request in Javascript?&quot; →
                </div>

            </div>

            

            </div>

            <div>

<div className='flex justify-center items-center text-lg mb-3 md:flex md:flex-col'>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
 className="h-6 w-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" 
 d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
 </svg>

<p className='text-white ml-2'>Capabilities</p>

    
</div>

<div>

    <div className='bg-white/5 rounded text-center text-sm text-white mb-3 p-3'>
    Remembers what user said earlier in the conversation
    </div>

    <div className='bg-white/5 rounded text-center text-sm text-white mb-3 p-3'>
    Allows user to provide follow-up corrections
    </div>

    <div className='bg-white/5 rounded text-center text-sm text-white mb-3 p-3'>
    Trained to decline inappropriate requests
    </div>

</div>



</div>

<div>

<div className='flex justify-center items-center text-lg mb-3 md:flex md:flex-col'>

<svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" 
className="h-6 w-6 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>

   <p  className='text-white ml-2'> Limitations</p>

    
</div>

<div>

    <div className='bg-white/5 rounded text-center text-sm text-white mb-3 p-3'>
        May occasionally generate incorrect information
    </div>

    <div className='bg-white/5 rounded text-center text-sm text-white mb-3 p-3'>
        May occasionally produce harmful instructions or biased content
    </div>

    <div className='bg-white/5 rounded text-center text-sm text-white mb-3 p-3'>
        Limited knowledge of world and events after 2021
    </div>

</div>



</div>

        </div>

    </div>
  )
}

export default ChatPlaceholder