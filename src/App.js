import React from 'react';
import { Announcement, Categories, Navbar, Slider } from './loadable';

const App = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
		</>
	);
};

export default App;
