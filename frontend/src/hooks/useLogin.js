import { useState } from 'react'
import axios from '../config/axios'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthUser'


export const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const Login = async (data) => {
        setLoading(true)
        try {
            const response = await axios.post('/auth/login', data)
            console.log(response);
            toast.success(response.data.message)
            console.log(response.data.user);
            localStorage.setItem('chat-user', JSON.stringify(response.data.user))
            setAuthUser(response.data.user)

        } catch (error) {
            console.log(error);

            console.log(`Error is ${error.message}`);
            toast.error(error.response.data.error)

        } finally {
            setLoading(false)
        }
    }
    return { Login, loading }
}