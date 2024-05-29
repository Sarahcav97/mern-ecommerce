import User from '../../models/userModel.js';
import generateToken from '../../utils/generateToken.js';
const authUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		const isCorrectPassword = await user.matchPassword(password);

		if (user && isCorrectPassword) {
			const token = generateToken(user._id);

			res.json({
				user,
				token,
			});
		}
	} catch (error) {
		res.status(401).json({ success: false, error });
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
