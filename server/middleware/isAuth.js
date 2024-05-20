import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
export async function isAuth(req, res, next) {
	console.log('isAuth');
	if (req.headers && req.headers.authorization) {
		const token =
			req.headers.authorization.split(' ')[1] ||
			req.headers.Authorization.split(' ')[1];
		console.log({ token });

		try {
			const decodedJwt = jwt.decode(token);

			if (!decodedJwt) throw new Error('JWT verification failed');
			const user = await User.findById(decodedJwt.userId);
			console.log({ user });

			if (!user) {
				return res.json({
					success: false,
					message: 'No user - unauthorized access request!',
				});
			}
			req.user = user;
			req.isAdmin = user.isAdmin;
			next();
		} catch (error) {
			if (error.name === 'JsonWebTokenError') {
				return res.json({ success: false, message: 'JSON Web Token Error!' });
			}
			if (error.name === 'TokenExpiredError') {
				return res.json({ success: false, message: 'Token Expired' });
			}
			return res.json({
				success: false,
				message: 'Unauthorized access request!',
			});
		}
	} else return res.json({ success: false, message: 'Unauthorized Request' });
}
