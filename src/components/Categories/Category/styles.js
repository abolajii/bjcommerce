import styled from 'styled-components';

export const ImageContainer = styled.div`
	flex: 1;
	height: 80vh;
	display: flex;
	margin: 3px;
	flex-direction: column;
	position: relative;
	opacity: 0.9;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const InfoContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.p`
	color: white;
	text-transform: uppercase;
	font-size: 30px;
	font-weight: 500;
	margin-bottom: 10px;
`;

export const Button = styled.button`
	height: 39px;
	width: 130px;
	font-weight: 500;
	font-size: 20px;
	cursor: pointer;
	outline: none;
	border: none;
	border-radius: 3px;
	color: grey;
`;
