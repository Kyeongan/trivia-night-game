import React from "react";

import { AnswerObject } from "../App";

import { Wrapper, ButtonWrapper } from "./QuestionCard.Styles";

type Props = {
	question: string;
	answers: string[];
	callback: (e: any) => void;
	userAnswer: AnswerObject | undefined;
	questionNo: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNo,
	totalQuestions
}) => (
	<Wrapper>
		<p className="question">
			Question: {questionNo}/{totalQuestions}
		</p>
		<p className="question" dangerouslySetInnerHTML={{ __html: question }}></p>
		<div>
			{answers.map((answer) => (
				<ButtonWrapper
					key={answer}
					correct={userAnswer?.correctAnswer === answer}
					userClicked={userAnswer?.answer === answer}
				>
					<button
						disabled={userAnswer ? true : false}
						value={answer}
						onClick={callback}
					>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</ButtonWrapper>
			))}
		</div>
	</Wrapper>
);

export default QuestionCard;
