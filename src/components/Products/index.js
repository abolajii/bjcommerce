import React from 'react';
import { Container, Inner } from './styles';
import Loadable from 'react-loadable';
import Loader from '../Loader';
import { products } from './Product/data';

const Product = Loadable({
	loader: () => import('./Product'),
	loading: Loader,
	delay: 100,
});

const Products = () => {
	return (
		<Container>
			<Inner>
				{products.map((item) => {
					return <Product key={item.id} item={item} />;
				})}
			</Inner>
		</Container>
	);
};

export default Products;
