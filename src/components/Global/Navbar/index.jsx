import React from 'react';
import {
	Container,
	Inner,
	Left,
	Right,
	Input,
	Center,
	Language,
	SearchContainer,
	Logo,
	SignIn,
	Register,
} from './styles';
import { Search } from '@material-ui/icons';

import { ShoppingCart } from '@material-ui/icons';
import Badge from '@mui/material/Badge';
const Navbar = () => {
	return (
		<Container>
			<Inner>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input type='text' placeholder='Search' />
						<Search />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Abolaji</Logo>
				</Center>
				<Right>
					<SignIn to='/signin'>Sign in</SignIn>
					<Register to='/register'>Register</Register>

					<Badge badgeContent={4} color='primary'>
						<ShoppingCart />
					</Badge>
				</Right>
			</Inner>
		</Container>
	);
};

export default Navbar;
