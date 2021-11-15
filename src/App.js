import React from 'react';
import {
	Announcement,
	Categories,
	Navbar,
	Newsletter,
	Products,
	Slider,
} from './loadable';

const App = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
		</>
	);
};

export default App;
