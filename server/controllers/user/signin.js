import asyncHandler from 'express-async-handler';
import User from '../../models/userModel.js';
import generateToken from '../../utils/generateToken.js';

const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	const isCorrectPassword = await user.matchPassword(password);

	if (user && isCorrectPassword) {
		const token = generateToken(user._id);

		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token,
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});
export { authUser };
