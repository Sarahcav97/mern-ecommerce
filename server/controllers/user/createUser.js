import { errorHandler } from '../../middleware/errorMiddleware.js';
import User from '../../models/userModel.js';
import generateToken from '../../utils/generateToken.js';

const createUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const existingUser = await User.findOne({ email });

		if (existingUser) errorHandler('Unable to signup', req, res);

		if (!name || !email || !password) {
			errorHandler('Missing required info', req, res);
		}
		const user = await User.create({
			name,
			email,
			password,
		});

		const token = generateToken(user._id);

		res.json({
			user,
			token,
		});
	} catch (error) {
		console.error(error);
		errorHandler('Issue with signup', req, res);
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

export default createUser;
