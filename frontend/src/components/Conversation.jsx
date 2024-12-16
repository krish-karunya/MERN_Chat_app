import React from "react";
import { useConversation } from "../store/useConversation";
import { useSocketContext } from "../context/SocketContext";

const Conversation = ({ user, emoji, lastIndex }) => {
  const { profilePic, name } = user;
  const { selectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { onlineUser } = useSocketContext();
  // console.log(onlineUser);

  const isOnlineUser = onlineUser.includes(user._id);
  // console.log(isOnlineUser);

  return (
    <div>
      <div
        className={`flex gap-4 items-center  h-full py-4 px-2 mr-2 rounded-lg ${
          isSelected ? "bg-sky-800" : ""
        }`}>
        <div className='relative'>
          <img
            src={profilePic}
            className='w-10 h-10 rounded-full object-cover object-center'
          />
          <span
            className={`absolute rounded-full ${
              isOnlineUser ? "bg-green-400" : ""
            } h-3 w-3 top-[-2px] left-1`}></span>
        </div>
        <h1>{name}</h1>
        <p className='ml-28 text-2xl'>{emoji}</p>
      </div>
      {!lastIndex && <div className='divider my-0 py-0'></div>}
      {lastIndex && <div className='mb-24'></div>}
    </div>
  );
};

export default Conversation;
