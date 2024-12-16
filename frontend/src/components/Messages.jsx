import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { useGetConversation } from "../hooks/useGetConversation";
import MessageSkeleton from "./shimmer/MessageSkeleton";
import useListenMessage from "../hooks/useListenMessage";
import { useConversation } from "../store/useConversation";

const Messages = () => {
  const { messages, loading } = useGetConversation();
  const { selectedConversation } = useConversation();
  useListenMessage();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className='p-4 h-[400px]  mt-2 md:w-full scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-600 overflow-y-scroll'>
      {!loading &&
        messages.length !== 0 > 0 &&
        selectedConversation &&
        messages.map((mes) => (
          <div key={mes._id} ref={lastMessageRef}>
            <Message message={mes} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && selectedConversation && (
        <p className='text-center text-gray-300 text-lg md:text-xl lg:text-2xl font-semibold mt-24 flex flex-col items-center justify-center gap-3'>
          <span className='text-8xl md:text-6xl lg:text-7xl  text-sky-500 animate-pulse'>
            💬
          </span>
          <span className='text-gray-200 text-xl'>
            Send a message to start the conversation
          </span>
        </p>
      )}
    </div>
  );
};

export default Messages;
