import express from 'express';
import { authUser, getUserProfile } from '../controllers/user/signin.js';
import { isAuth } from '../middleware/isAuth.js';
const router = express.Router();

router.post('/login', authUser);
router.get('/profile', isAuth, getUserProfile);

export default router;
