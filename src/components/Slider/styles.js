import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	top: 80px;
	width: 100%;
	height: calc(100vh);
	/* background-color: red; */
`;

export const Inner = styled.div`
	display: flex;
	overflow: hidden;
	height: inherit;
	position: relative;
`;

export const ArrowContainer = styled.div`
	height: 50px;
	width: 50px;
	background: #ffffff;
	border-radius: 50%;
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: center;
	top: 0;
	bottom: 0;
	margin: auto;
	cursor: pointer;
	z-index: 99;
	opacity: 0.5;
	${({ direction }) => (direction === 'left' ? 'left: 9px' : 'right: 9px')}
`;

export const SlideContainer = styled.div`
	height: 100%;
	display: flex;
`;

export const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: ${({ background }) => background};
	transform: translateX(${({ view }) => view * -100}vw);
	transition: transform 1.5s ease;
`;

export const ImageContainer = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Image = styled.img`
	height: 80%;
	border-radius: 7px;
`;

export const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

export const Title = styled.h1`
	font-size: 70px;
`;

export const Desc = styled.p`
	margin: 50px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;

export const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	outline: none;
	border: none;
	cursor: pointer;
	background: transparent;
	border: 1px solid black;
	border-radius: 5px;
`;

export const ArrowLeft = styled(ArrowLeftOutlined)``;

export const ArrowRight = styled(ArrowRightOutlined)``;
