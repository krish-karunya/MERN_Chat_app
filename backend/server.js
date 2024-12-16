import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import { conn } from './config/connectionDB.js';
import authRouter from '../backend/routes/authRouter.js'
import userRouter from '../backend/routes/userRouter.js'
import messageRouter from '../backend/routes/messageRouter.js'
import { app, server } from './socket/socket.js';

dotenv.config()

// creating instance :

// middleware :
app.use(cookieParser())  // to parse the cookie-data
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}
))
app.use(express.json({ limit: '10mb' })); // Increase JSON body size limit to 10MB
app.use(express.urlencoded({ limit: '10mb', extended: true })); // Increase URL-encoded form data limit

// Route MiddleWare:
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/message', messageRouter)

// Common Middleware to Handle Random Error:
app.use((err, req, res, next) => {

    if (err) {
        console.log(err);
        res.status(500).send('Something Went Wrong')
    }
})

// Connecting Db :
conn(process.env.MONGO_DB_URL).then(() => {
    console.log('Mongo DB Connected Successfully');

    const PORT = process.env.PORT || 8000
    server.listen(PORT, () => {
        console.log('server started successfully', PORT);
    })
}).catch((err) => {
    console.log(`Error:${err.message}`);
    process.exit(1)

})

