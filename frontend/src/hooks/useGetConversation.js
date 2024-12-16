import { useEffect, useState } from 'react'
import axios from '../config/axios'
import { useConversation } from '../store/useConversation';


export const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation()


    const getConversation = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`/message/${selectedConversation._id}`)
            console.log(response.data);
            setMessages(response.data)


        } catch (error) {
            console.log(error);
            console.log(`Error is ${error.message}`);

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        if (selectedConversation?._id) getConversation()

    }, [selectedConversation?._id, setMessages])

    return { messages, loading }
}