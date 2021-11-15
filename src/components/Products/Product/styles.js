import styled from 'styled-components';

export const Container = styled.div``;

export const Circle = styled.div`
	width: 200px;
	height: 200px;
	background-color: white;
	border-radius: 50%;
	z-index: 1;
	position: absolute;
`;

export const InfoContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;

	transition: opacity 0.5s ease;
`;

export const Inner = styled.div`
	margin: 3px;
	flex: 1;
	min-width: 280px;
	height: 350px;
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;

	&:hover ${InfoContainer} {
		opacity: 1;
	}
`;

export const Image = styled.img`
	height: 75%;
	width: 100%;
	object-fit: cover;
	z-index: 2;
	background-color: none;
`;

export const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	cursor: pointer;
`;
