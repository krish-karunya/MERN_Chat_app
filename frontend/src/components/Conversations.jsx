import React from "react";
import { useGetUser } from "../hooks/useGetUser";
import Conversation from "./Conversation";
import getRandomEmoji from "../utils/getRandomEmoji";
import { useConversation } from "../store/useConversation";

const Conversations = () => {
  const { loading, user } = useGetUser();
  const { setSelectedConversation } = useConversation();

  if (user.length == 0) {
    return (
      <p className='text-center mt-20'>
        <span className='loading loading-spinner loading-md'></span>
      </p>
    );
  }
  return (
    user.length != 0 && (
      <>
        <div className=' scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-600 overflow-y-scroll'>
          <div className='py-2'>
            {user.map((u, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedConversation(u);
                }}>
                <Conversation
                  user={u}
                  emoji={getRandomEmoji()}
                  lastIndex={user.length - 1 === index}
                />
              </div>
            ))}
          </div>
        </div>
        {loading && (
          <span className='loading loading-spinner loading-md'></span>
        )}
      </>
    )
  );
};

export default Conversations;
