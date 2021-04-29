import React, { useState } from "react";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";
import { GlobalStyle } from "./App.Styles";
import { Button } from "@material-ui/core";
import QuestionCard from "./components/QuestionCard";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const App: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);
	const [totalQuestion, setTotalQuestion] = useState(5);
	const [difficulty, setDifficulty] = useState("easy");

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(totalQuestion, difficulty);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: any) => {
		if (!gameOver) {
			// User's answer
			const answer = e.currentTarget.value;
			// Check answer against correct answer
			const correct = questions[number].correct_answer === answer;
			// Add score if answer is correct
			if (correct) setScore((prev) => prev + 1);
			// Save pm the answer in the array for user answers
			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		// Move on to the next question if not the last question
		const nextQ = number + 1;

		if (nextQ === totalQuestion) {
			setGameOver(true);
		} else {
			setNumber(nextQ);
		}
	};

	const handleChangeTotalNumberOfQuestion = (event: any) => {
		setTotalQuestion(event.target.value);
	};

	const handleChangeDifficulty = (event: any) => {
		setDifficulty(event.target.value);
	};
	const gameExit = (event: any) => {
		setGameOver(true);
	};

	return (
		<>
			<GlobalStyle />
			<div className="App">
				<h1>Trivia Night Quiz!</h1>
				<div className="flex-container">
					<div className="flex-item">
						{gameOver || userAnswers.length === totalQuestion ? (
							<p>Number of Questions:</p>
						) : null}
						{gameOver || userAnswers.length === totalQuestion ? (
							<FormControl component="fieldset">
								<RadioGroup
									defaultValue="5"
									onChange={handleChangeTotalNumberOfQuestion}
								>
									<FormControlLabel value="5" control={<Radio />} label="5" />
									<FormControlLabel value="10" control={<Radio />} label="10" />
									<FormControlLabel value="20" control={<Radio />} label="20" />
								</RadioGroup>
							</FormControl>
						) : null}
					</div>
					<div className="flex-item">
						{gameOver || userAnswers.length === totalQuestion ? (
							<p>Select Difficulty:</p>
						) : null}
						{gameOver || userAnswers.length === totalQuestion ? (
							<FormControl component="fieldset">
								<RadioGroup
									defaultValue="easy"
									onChange={handleChangeDifficulty}
								>
									<FormControlLabel
										value="easy"
										control={<Radio />}
										label="easy"
									/>
									<FormControlLabel
										value="medium"
										control={<Radio />}
										label="medium"
									/>
									<FormControlLabel
										value="hard"
										control={<Radio />}
										label="hard"
									/>
								</RadioGroup>
							</FormControl>
						) : null}
					</div>
				</div>
				{gameOver || userAnswers.length === totalQuestion ? (
					<Button variant="contained" color="primary" onClick={startTrivia}>
						Start Here
					</Button>
				) : null}
				{!gameOver ? (
					<p className="score">
						Score: {score} / {totalQuestion}{" "}
					</p>
				) : null}
				{loading ? <p>Loading Questions...</p> : null}
				{!loading && !gameOver && (
					<QuestionCard
						questionNo={number + 1}
						totalQuestions={totalQuestion}
						question={questions[number].question}
						answers={questions[number].answers}
						userAnswer={userAnswers ? userAnswers[number] : undefined}
						callback={checkAnswer}
					/>
				)}
				<p></p>
				{!gameOver &&
				!loading &&
				userAnswers.length === number + 1 &&
				number !== totalQuestion - 1 ? (
					<Button variant="contained" color="primary" onClick={nextQuestion}>
						Next
						<ArrowForwardIcon />
					</Button>
				) : null}
				<p></p>
				{!loading && !gameOver && (
					<Button variant="contained" onClick={gameExit}>
						Startover
					</Button>
				)}
			</div>
		</>
	);
};

export default App;
