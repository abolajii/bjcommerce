import React from 'react';
import { Button, Image, ImageContainer, InfoContainer, Title } from './styles';
const Category = ({ item }) => {
	console.log(item.img);
	return (
		<ImageContainer>
			<Image src={item.img} />
			<InfoContainer>
				<Title>{item.info}</Title>
				<Button>SHOP NOW</Button>
			</InfoContainer>
		</ImageContainer>
	);
};

export default Category;
