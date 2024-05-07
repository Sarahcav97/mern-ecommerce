import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Andrew',
		email: 'andrew@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Sarah',
		email: 'sarah@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
