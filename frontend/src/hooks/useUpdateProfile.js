import { useState } from 'react'
import axios from '../config/axios'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthUser'



export const useUpdateProfile = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const updateProfile = async (data) => {
        setLoading(true)
        try {
            const response = await axios.patch('/user/edit-profile', data)
            toast.success(response.data.message)
            localStorage.setItem('chat-user', JSON.stringify(response.data.user))
            setAuthUser(response.data.user)
        } catch (error) {
            console.log(error);

            console.log(`Error is ${error.response.data}`);
            toast.error(error.response.data)
        } finally {
            setLoading(false)
        }
    }
    return { updateProfile, loading }
}