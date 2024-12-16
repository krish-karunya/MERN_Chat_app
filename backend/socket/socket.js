import { Server } from 'socket.io'
import express from 'express'
import http from 'http'

const app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST']
    }
})

export const getReceiverId = (receiverId) => {
    return getOnlineUserMap[receiverId]
}
let getOnlineUserMap = {} //userId : socketId



io.on('connection', (socket) => {
    console.log(`New User Connected userId is ${socket.id}`);
    const userId = socket.handshake.query.userId
    console.log("userId", userId);

    if (userId != 'undefined') getOnlineUserMap[userId] = socket.id



    // io.emit() is used to send events to all the connected clients
    console.log(Object.keys(getOnlineUserMap));

    io.emit("getOnlineUsers", Object.keys(getOnlineUserMap))

    // Socket.on is used to listen to the events, can be used on client and Server side 
    socket.on('disconnect', (socket) => {
        console.log(`User disconnected socketId is ${socket.id}`);
        delete getOnlineUserMap[userId];
        io.emit("getOnlineUsers", Object.keys(getOnlineUserMap))


    })

})


export { app, io, server }