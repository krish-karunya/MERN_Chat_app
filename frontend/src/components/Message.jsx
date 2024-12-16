import React from "react";
import { useConversation } from "../store/useConversation";
import { useAuthContext } from "../context/AuthUser";

const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  // console.log(selectedConversation);
  // console.log(message);
  const messageFromMe = message?.senderId === authUser._id;
  console.log(messageFromMe);

  const chatClassName = messageFromMe ? "chat-end" : "chat-start";
  const bgColor = messageFromMe ? "bg-sky-800" : "bg-slate-800";
  const profilePicture = !messageFromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className=' px-2'>
      <div className={`chat ${chatClassName} mb-2`}>
        <div className='chat-image avatar '>
          <div className='w-10 rounded-full mb-3 '>
            <img
              alt='Tailwind CSS chat bubble component'
              src={profilePicture}
            />
          </div>
        </div>
        <div>
          <div>
            {" "}
            {!message.image == "" && (
              <img
                src={message.image}
                alt='image'
                className='h-40 w-40 object-cover object-center rounded-lg'
              />
            )}
          </div>
          <div
            className={`chat-bubble ${bgColor} ${shakeClass} relative p-4 text-sm  text-right mt-2`}>
            <p className='inline-block max-w-50 text-right break-words  whitespace-normal'>
              {message.content}
            </p>
            <p
              className={`text-[10px] text-white absolute right-4  bottom-[-1]`}>
              {new Date(message.createdAt).toLocaleString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
