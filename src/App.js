import React from 'react';
import { Announcement, Categories, Navbar, Products, Slider } from './loadable';

const App = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
		</>
	);
};

export default App;
