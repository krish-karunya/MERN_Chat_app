import React, { useState } from "react";
import { useConversation } from "../store/useConversation";
import { useAuthContext } from "../context/AuthUser";
import Sidebar from "./Sidebar";

const MessageNav = () => {
  const { selectedConversation } = useConversation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!selectedConversation) {
    return <NoChatSelected />;
  }
  //   console.log(selectedConversation);
  const { name, profilePic } = selectedConversation;

  return (
    <div className='navbar  w-full h-[40px] bg-slate-800 text-white rounded mt-0.5 relative'>
      <div className='flex-1  items-center'>
        <img
          src={profilePic}
          alt='profile-pic'
          className='w-10 h-10 rounded-full object-cover object-center ml-4'
        />
        <a className='btn btn-ghost text-xl'>{name}</a>
      </div>
      <div className='flex-none'>
        <button
          className='btn btn-square btn-ghost'
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-5 w-5 stroke-current'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className='block sm:hidden absolute top-0 right-0 z-50'>
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default MessageNav;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full mt-40 min-w-40'>
      <div className='px-4 flex text-center sm:text-lg md:text-xl text-gray-200 font-semibold  flex-col items-center gap-2'>
        <p>
          Welcome 👋 <span className='text-sky-400'>{authUser.name}</span> ❄
        </p>
        <p>Select a chat to start messaging</p>
        <img
          src='https://media1.tenor.com/m/IPREF5IxcSgAAAAd/cat-typing.gif'
          alt='A fun GIF'
          className='w-40 h-40 rounded-full mt-8'
        />
      </div>
    </div>
  );
};
