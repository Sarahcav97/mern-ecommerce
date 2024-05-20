import express from 'express';
import { authUser } from '../controllers/user/signin.js';
const router = express.Router();

router.post('/login', authUser);

export default router;
