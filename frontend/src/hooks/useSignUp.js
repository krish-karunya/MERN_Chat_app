import { useState } from 'react';
import axios from '../config/axios'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthUser';




export const useSignUp = () => {
    
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()


    const signUp = async (data) => {
        try {
            setLoading(true)
            const response = await axios.post('/auth/signup', data)
            toast.success(response.data.message)
            localStorage.setItem('chat-user', JSON.stringify(response.data.user))
            setAuthUser(response.data.user)

        } catch (error) {
            console.log(`Error is ${error.message}`);
            toast.error(error.response.data)
        } finally {
            setLoading(false)
        }
    }

    return { signUp, loading }

}