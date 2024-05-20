import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useUser } from '../context/UserContext';
const Header = () => {
	const { user, isLoggedIn, handleLogout } = useUser();
	return (
		<header>
			<Navbar
				bg='dark'
				variant='dark'
				collapseOnSelect
				expand='lg'
			>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Store</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							{isLoggedIn ? (
								<>
									<LinkContainer to='/cart'>
										<Nav.Link>
											<i className='fas fa-shopping-cart'></i> Cart
										</Nav.Link>
									</LinkContainer>
									<Nav.Link onClick={handleLogout}>
										<i className='fas fa-logout'></i> Logout
									</Nav.Link>
								</>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user'></i> Sign In
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
					{/* {user && user.name} */}
				</Container>
			</Navbar>
		</header>
	);
};
export default Header;
