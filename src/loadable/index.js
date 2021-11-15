import Loadable from 'react-loadable';
import Loader from '../components/Loader';

export const Announcement = Loadable({
	loader: () => import('../components/Announcement'),
	loading: Loader,
	delay: 100,
});

export const Navbar = Loadable({
	loader: () => import('../components/Global/Navbar'),
	loading: Loader,
	delay: 100,
});

export const Slider = Loadable({
	loader: () => import('../components/Slider'),
	loading: Loader,
	delay: 100,
});

export const Categories = Loadable({
	loader: () => import('../components/Categories'),
	loading: Loader,
	delay: 100,
});

export const Products = Loadable({
	loader: () => import('../components/Products'),
	loading: Loader,
	delay: 100,
});
