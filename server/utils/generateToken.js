import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: '4h',
	});
	return token;
};

export default generateToken;
