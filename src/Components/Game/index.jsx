import React from "react";
import Form from "../Form/";

const state = {
	guessCount: [],
	magicNumber: null,
	gameMode: "",
	guessInput: "",
	resultMessage: null,
	standardScore: null,
	expertScore: null,
	gameAct: 0
};

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.getFormValue = this.getFormValue.bind(this);
		this.onSubmitNumber = this.onSubmitClick.bind(this);
		this.state = state;
	}
	componentDidMount() {
		let setMode = () => {
			this.setState({
				gameMode: this.props.difficulty,
				guessInput: "",
				gameAct: 1
			});
		};
		setMode();

		let setMagicNumber = () => {
			let target;
			if (this.props.difficulty === "Standard") {
				target = Math.floor(Math.random() * 10) + 1;
			} else if (this.props.difficulty === "Expert") {
				target = Math.floor(Math.random() * 100) + 1;
			}
			this.setState({ magicNumber: target });
		};
		setMagicNumber();
	}
	//form
	getFormValue = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	submitFormData(event) {
		event.preventDefault();
	}

	onSubmitClick = event => {
		event.preventDefault();
		const userInput = parseInt(this.state.guessInput);
		const answer = this.state.magicNumber;
		let guessCountArray = this.state.guessCount;
		let newRound = this.state.gameAct;

		guessCountArray.push(userInput);

		if (userInput === answer) {
			let currentStandardScore =
				this.state.standardScore === null ? 0 : this.state.standardScore;
			let currentExpertScore = this.state.expertScore;
			newRound = 2;

			if (this.state.gameMode === "Standard") {
				if (guessCountArray.length > currentStandardScore) {
					currentStandardScore = guessCountArray.length;
				}
			} else if (this.state.gameMode === "Expert") {
				if (guessCountArray.length > currentExpertScore) {
					currentExpertScore = guessCountArray.length;
				}
			}

			this.setState({
				resultMessage: `You won in ${this.state.guessCount.length} guesses`,
				guessCount: guessCountArray,
				standardScore: currentStandardScore,
				expertScore: currentExpertScore,
				gameAct: newRound
			});
		} else if (userInput < answer) {
			this.setState({
				resultMessage: "Too Low"
			});
		} else if (userInput > answer) {
			this.setState({
				resultMessage: "Too hight"
			});
		}
		let newTotalGuessArray = [...this.state.guessCount];
		newTotalGuessArray = guessCountArray;
		this.setState({
			guessCount: newTotalGuessArray
		});
	};

	resetGame() {
		this.setState(state);
	}

	render() {
		if (this.state.gameAct < 2) {
			return (
				<div>
					<header>
						<h1>{this.state.gameMode}</h1>
					</header>
					<p>{this.state.userMessage}</p>
					<p>Total Guesses: {this.state.guessCount.length}</p>
					<Form
						getFormValue={this.getFormValue}
						onSubmitClick={this.onSubmitClick}
					/>
					<p> You've made this many guesses {this.state.guessCount.length}</p>
					<p>{this.state.resultMessage}</p>
				</div>
			);
		} else {
			return (
				<div className="tada">
					<p>It took you these many guesses {this.state.guessCount.length}</p>
					<p className="what">
						Your guesses were these:{this.state.guessCount.join(", ")}
					</p>
				</div>
			);
		}
	}
}

export default Game;
