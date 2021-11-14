import React from 'react';
import { Container } from './styles';
import { category } from './Category/data';

import Loadable from 'react-loadable';
import Loader from '../Loader';

const Category = Loadable({
	loader: () => import('./Category'),
	loading: Loader,
	delay: 100,
});

const Categories = () => {
	return (
		<Container>
			{category.map((category) => {
				return <Category key={category.id} item={category} />;
			})}
		</Container>
	);
};

export default Categories;
