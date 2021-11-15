import styled from 'styled-components';

export const Container = styled.div``;

export const Inner = styled.div`
	padding: 20px;
	height: 60vh;
	background-color: #fcf5f5;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Title = styled.div`
	font-size: 70px;
	margin-bottom: 20px;
`;
export const Desc = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
`;

export const InputContainer = styled.div`
	background-color: white;
	width: 50%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgrey;
`;

export const Input = styled.input`
	border: none;
	flex: 8;
	outline: none;
	padding-left: 10px;
`;

export const Button = styled.button`
	flex: 1;
	cursor: pointer;
	background-color: teal;
	border: none;
	color: white;
	/* outline: none; */
	height: 100%;

	&:hover {
		opacity: 0.9;
	}
`;
