import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useConversation } from '../store/useConversation'
import notificationSound from '../assets/sound/notification.mp3'


const useListenMessage = () => {

    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation()
    const { selectedConversation } = useConversation()

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const isMessageSentFromSelectedUser = newMessage.senderId === selectedConversation._id;
            if (!isMessageSentFromSelectedUser) return;
            newMessage.shouldShake = true
            const sound = new Audio(notificationSound)
            sound.play()
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);

}
export default useListenMessage
