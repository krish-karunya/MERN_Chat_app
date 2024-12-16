import { useEffect, useState } from 'react'
import axios from '../config/axios'
import toast from 'react-hot-toast'



export const useGetUser = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState([])


    const getAllUser = async () => {
        setLoading(true)
        try {
            const response = await axios.get('/user/getUser')
            // console.log(response);
            setUser(response.data.user)

        } catch (error) {
            console.log(`Error is ${error.message}`);
            toast.error(error.response.data.message)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllUser()
    }, [])

    return { loading, user }
} 