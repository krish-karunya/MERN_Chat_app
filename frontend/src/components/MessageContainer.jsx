import React from "react";
import MessageNav from "./MessageNav";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  return (
    <div className='flex-1 flex flex-col overflow-hidden'>
      <MessageNav />
      <Messages />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
