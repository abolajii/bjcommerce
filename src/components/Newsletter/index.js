import { Send } from '@material-ui/icons';
import React from 'react';
import {
	Button,
	Container,
	Desc,
	Inner,
	Input,
	InputContainer,
	Title,
} from './styles';

const Newsletter = () => {
	return (
		<Container>
			<Inner>
				<Title>Newsletter</Title>
				<Desc>Get timely update from your favorite products</Desc>
				<InputContainer>
					<Input text='text' placeholder='Your email' />
					<Button>
						<Send />
					</Button>
				</InputContainer>
			</Inner>
		</Container>
	);
};

export default Newsletter;
