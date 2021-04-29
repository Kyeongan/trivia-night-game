import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/bg.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    // background-image: url(${BGImage});
    background-size: cover;
    margin: 0px;
    // padding: 100px;
    display: flex;
    justify-content: center;
		text-align: center
		
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
	p {
		font-size: 1.5rem;
		color: #000;
		background: #fff;
	}
	h1 {
		font-size: 80px;
	}
	.flex-container {
		/* We first create a flex layout context */
		display: flex;
		
		/* Then we define the flow direction 
			and if we allow the items to wrap 
		* Remember this is the same as:
		* flex-direction: row;
		* flex-wrap: wrap;
		*/
		flex-flow: row wrap;
		
		/* Then we define how is distributed the remaining space */
		justify-content: space-around;
		
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.flex-item {
		// background: tomato;
		// padding: 5px;
		// width: 200px;
		// height: 150px;
		// margin-top: 10px;
		// line-height: 150px;
		// color: white;
		// font-weight: bold;
		// font-size: 3em;
		// text-align: center;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> p {
		color: #fff;
		font-size: 3rem;
	}
	.score {
		color: #fff;
		font-size: 4rem;
		margin: 10;
	}
	h1 {
		font-family: Fascinate Inline;
		background-image: linear-gradient(180deg, #fff, #fff);
		font-weight: 400;
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		filter: drop-shadow(2px 2px #fff);
		font-size: 70px;
		text-align: center;
		margin: 20px;
	}
	.start,
	.next {
		cursor: pointer;
		background: linear-gradient(180deg, #ffffff, #ffcc91);
		border: 2px solid #d38558;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		height: 40px;
		margin: 20px 0;
		padding: 0 40px;
	}
	.start {
		max-width: 200px;
	}
`;
