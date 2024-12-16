import { useState } from "react";
import axios from "../config/axios";
import { useConversation } from "../store/useConversation";

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation()

  const sendMessage = async (message, image) => {
    setLoading(true);
    try {
      const response = await axios.post(`/message/send/${selectedConversation._id}`, { message, image });
      console.log(response);
      setMessages([...messages, response.data.message])
      console.log(messages);

    } catch (error) {
      console.log(error);

      console.log(`Error is ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};
