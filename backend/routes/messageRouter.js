import express from 'express'
import { GetMessage, SendMessage } from '../controllers/messageController.js'
import { protectRoute } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/send/:id', protectRoute, SendMessage)
router.get('/:id', protectRoute, GetMessage)


export default router