import React from 'react';
import Spinner from 'react-spinkit';
import { Container } from './styles';

const Loader = (props) => {
	console.log(props);
	if (props.pastDelay) {
		return (
			<Container>
				<Spinner name='ball-clip-rotate-multiple' color='red' />
			</Container>
		);
	} else {
		return null;
	}
};

export default Loader;
