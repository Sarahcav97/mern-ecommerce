import { errorHandler } from '../../middleware/errorMiddleware.js';
import User from '../../models/userModel.js';
import generateToken from '../../utils/generateToken.js';

const updateProfile = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const existingUser = await User.findById(req.user._id);

		if (!existingUser) errorHandler('User does not exist', req, res);

		if (!name || !email || !password) {
			errorHandler('Missing required info', req, res);
		}
		const user = await existingUser.findByIdAndUpdate(req.user._id, {
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

export default updateProfile;
