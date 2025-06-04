/* @font-face {
	font-family: Laila_Med;
	src: url('./assets/fonts/Laila/Laila-Medium.ttf');
}

@font-face {
	font-family: Roboto;
	src: url('./assets/fonts/Roboto/Roboto-Regular.ttf');
}

@font-face {
	font-family: Orbitron;
	src: 	url('./assets/fonts/Orbitron/Orbitron-VariableFont_wght.ttf'),
				format('truetype');
}

@font-face {
	font-family: Ubuntu_Reg;
	src: url('./assets/fonts/Ubuntu/Ubuntu-Regular.ttf');
}

@font-face {
	font-family: KodeMono_Var;
	src: url('./assets/fonts/Kode_Mono/KodeMono-VariableFont_wght.ttf');
} */

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		--earth-brown: #8d6748;
		--earth-green: #6b8e23;
		--earth-olive: #b5a642;
		--earth-clay: #b66a50;
		--earth-sand: #e2c290;
		--earth-stone: #a9a9a9;
		--earth-sky: #7ec850;
		--earth-forest: #355e3b;
		--earth-moss: #8a9a5b;
		--earth-terracotta: #d36c4a;

		--font-family: 'Roboto', sans-serif;
	}

	*,
	*:before,
	*:after {
		margin: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: black;
	}

	button {
		cursor: pointer;
		display: inline-block;
		border: none;
		margin: 0;
		text-decoration: none;
		background: none;
		text-align: center;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	html {
		font-size: 62.5%;
	}

	html, body {
		box-sizing: border-box;
		overflow: auto;
		background-color: var(--earth-olive);
		font-family: var(--font-family);
	}
`;

export default GlobalStyles;