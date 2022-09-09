import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	:root {
		--font-family: "Poppins", sans-serif;

		--txt-white: #fff;
		--txt-black: #000;

		--bgc-white: #fff;
		--bgc-black: #000;

		--main-color: #003580;
		--second-color: #bc5b01;
		--third-color: #febb02;

		--max-width: 1110px;
		--navbar-height: 60px;

		--border-radius: 3px;
		--transition: all 0.1s linear;

		--font-xs: 12px;
		--font-sm: 14px;
		--font-md: 16px;
		--font-lg: 18px;
		--font-xl: 20px;
		--font-2xl: 24px;
		--font-3xl: 28px;
		--font-4xl: 32px;
		--font-5xl: 36px;
		--font-6xl: 40px;
		--font-7xl: 44px;
		--font-8xl: 48px;
	}

	html {
		font-size: 62.5%;
		scroll-behavior: smooth;
	}

	body {
		font-family: var(--font-family);
		font-size: 1.6rem;
		color: var(--txt-black);
		background-color: var(--bgc-white);
		overflow-x: hidden;
	}

	svg {
		font-size: var(--font-xl);
	}

	input {
		::placeholder {
			opacity: 0.7;
		}
	}
`;
