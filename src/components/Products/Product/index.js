import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@material-ui/icons';
import React from 'react';
import { Circle, Container, Icon, Image, InfoContainer, Inner } from './styles';

const Product = ({ item }) => {
	const { id, img } = item;
	return (
		<Container>
			<Inner>
				<Circle />
				<Image src={img} alt={id} />
				<InfoContainer>
					<Icon>
						<ShoppingCartOutlined />
					</Icon>
					<Icon>
						<SearchOutlined />
					</Icon>
					<Icon>
						<FavoriteBorderOutlined />
					</Icon>
				</InfoContainer>
			</Inner>
		</Container>
	);
};

export default Product;
