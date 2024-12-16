import { useState } from 'react'
import axios from '../config/axios'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthUser'


export const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const Logout = async () => {
        setLoading(true)
        try {
            const response = await axios.post('/auth/logout')
            console.log(response);
            toast.success(response.data.message)
            localStorage.removeItem('chat-user')
            setAuthUser(null)

        } catch (error) {
            console.log(`Error is ${error.message}`);
            toast.error(error.response.data)

        } finally {
            setLoading(false)
        }
    }
    return { Logout, loading }
}