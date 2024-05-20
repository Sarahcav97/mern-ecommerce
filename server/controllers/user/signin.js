import asyncHandler from 'express-async-handler';
import User from '../../models/userModel.js';
import generateToken from '../../utils/generateToken.js';
import { isAuth } from '../../middleware/isAuth.js';
const authUser = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	const isCorrectPassword = await user.matchPassword(password);

	if (user && isCorrectPassword) {
		const token = generateToken(user._id);

		res.json({
			user,
			token,
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
};

// Get user profile
// GET /api/users/profile
// private access

const getUserProfile = async (req, res) => {
	console.log('inside profile route');

	if (req.user) {
		res.json({ user: req.user });
	} else console.log('user is not signed in');
};

export { authUser, getUserProfile };
