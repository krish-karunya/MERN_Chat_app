import { str } from "ajv";
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String
    },
    image: {
        type: String,
        default: ""

    }
}, { timestamps: true })


export const Message = mongoose.model('Message', messageSchema)