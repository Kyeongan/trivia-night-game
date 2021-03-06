import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 1100px;
	background: #fff;
	border-radius: 10px;
	border: 2px solid #000;
	padding: 40px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	text-align: center;
	p {
		font-size: 1rem;
	}
	.question {
		color: #000;
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transition: all 0.3s ease;
	:hover {
		opacity: 0.8;
	}
	button {
		cursor: pointer;
		user-select: none;
		font-size: 2rem;
		width: 100%;
		height: 80px;
		margin: 10px 0;
		background: ${({ correct, userClicked }) =>
			correct ? "#2a9d8f" : !correct && userClicked ? "#e63946" : "#48cae4"};
		border: 3px solid #ffffff;
		box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		color: #fff;
		text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
	}
`;
