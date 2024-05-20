import React from 'react';
import { useUser } from '../context/UserContext';
import formatDate from '../utils/formatDate';
export default function ProfileScreen() {
	const { user } = useUser();
	return (
		<div>
			<h1>Profile Screen</h1>
			{user && (
				<div>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<p>member since: {user.createdAt}</p>
				</div>
			)}
		</div>
	);
}
