import React, { useState, useEffect } from "react";

const Game = props => {
	const [magicNumber, setMagicNumber] = useState(null);

	const getNumber = () => {
		let target;
		props.difficulty === "Standard" &&
			(target = Math.floor(Math.random() * 10) + 1);
		props.difficulty === "Expert" &&
			(target = Math.floor(Math.random() * 100) + 1);
		setMagicNumber(target);
	};

	useEffect(() => {
		getNumber();
	});

	return (
		<div>
			<h1>Fuck off {magicNumber}</h1>
		</div>
	);
};

export default Game;
