import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	z-index: 99;
`;

export const Inner = styled.div`
	padding: 10px 20px;
	align-items: center;
	display: flex;
	justify-content: space-between;
	/* height: inherit; */
`;

export const Left = styled.div`
	/* background: red; */
	flex: 1;
	display: flex;
	align-items: center;
`;

export const Right = styled.div`
	/* background: green; */
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: end;
`;

export const Center = styled.div`
	/* background: yellow; */
	text-align: center;
	flex: 1;
`;
export const Logo = styled.span`
	font-size: 20px;
	text-transform: uppercase;
	font-weight: bold;
`;

export const Language = styled.span`
	cursor: pointer;
	font-size: 14px;
	margin-right: 10px;
`;

export const SearchContainer = styled.div`
	display: flex;
	width: 230px;
	border: 0.5px solid #444;
	align-items: center;
	padding: 0 3px;
`;

export const Input = styled.input`
	width: 100%;
	outline: none;
	border: none;
	height: 100%;
	background: transparent;
`;

export const SignIn = styled(Link)`
	text-decoration: none;
	border: 1px solid crimson;
	width: 120px;
	height: 30px;
	color: crimson;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 6px;
`;

export const Register = styled(SignIn)`
	background: crimson;
	color: white;
`;
