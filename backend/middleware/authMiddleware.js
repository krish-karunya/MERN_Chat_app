import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js'
// import dotenv from 'dotenv'
// dotenv.config()

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).send('User UnAuthorized')
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await User.findById(decode.userId)

        if (!decode || !user) {
            return res.status(401).send('User UnAuthorized')
        }

        req.user = user

        next()

    } catch (error) {
        console.log(`Error in protect Routes : ${error.message}`);
        res.status(500).send(`Error is ${error.message}`)

    }
}