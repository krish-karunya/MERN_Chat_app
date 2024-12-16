import express from 'express'
import { getProfile, UpdateProfile, getUserForSidebar} from '../controllers/userController.js'
import { protectRoute } from '../middleware/authMiddleware.js'

const router = express.Router()



router.get('/profile', protectRoute, getProfile)
router.get('/getUser', protectRoute, getUserForSidebar)
router.patch('/edit-profile', protectRoute, UpdateProfile)

export default router