import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
export default function MainLayout() {
	return (
		<div>
			<Header />
			<main
				className='py-3'
				style={{ minHeight: '80vh' }}
			>
				<Container>
					<Outlet />
				</Container>
			</main>
			<Footer />
		</div>
	);
}
