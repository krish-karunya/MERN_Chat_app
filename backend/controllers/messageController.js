import cloudinary from "../config/cloudinary.js";
import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";
import { getReceiverId, io } from "../socket/socket.js";


export const SendMessage = async (req, res) => {
    try {
        const senderId = req.user._id
        const { id: receiverId } = req.params
        const { message, image } = req.body

        // Checking whether it is existing conversation or not :
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = new Conversation({
                participants: [senderId, receiverId]
            })
        }
        let imageUrl;
        if (image) {
            // Upload base64 image to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        // Creating new Message using MessageModel :
        const newMessage = new Message({
            senderId,
            receiverId,
            content: message,
            image: imageUrl
        })

        if (newMessage) {
            conversation.message.push(newMessage._id)
        }

        await Promise.all([conversation.save(), newMessage.save()]).then(() => console.log('Both saved Successfully')).catch((err) => console.log(`Error is ${err}`))

        // Socket Implementation :
        const receiver_Id = getReceiverId(receiverId)
        if (receiver_Id) {
            io.to(receiver_Id).emit('newMessage', newMessage)
        }


        res.status(201).json({ message: newMessage })

    } catch (error) {
        console.log(`Error in SendMessage Controller ${error.message}`);
        res.status(500).send(`Error is ${error.message}`)

    }
}

export const GetMessage = async (req, res) => {
    try {
        const senderId = req.user._id
        const { id: receiverId } = req.params

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate("message");

        console.log(conversation);

        if (!conversation) return res.status(200).json([]);
        const message = conversation.message
        res.status(200).json(message)

    } catch (error) {
        console.log(`Error in GetMessage Controller ${error.message}`);
        res.status(500).send(`Error is ${error.message}`)

    }
}