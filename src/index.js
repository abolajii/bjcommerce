import { render } from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Baloo 2', cursive;
    font-family: 'Roboto', sans-serif;
}

html{
    /* --bgCl: black; */
}


`;

render(
	<>
		<Router>
			<GlobalStyle />
			<App />
		</Router>
	</>,
	document.getElementById('root')
);
