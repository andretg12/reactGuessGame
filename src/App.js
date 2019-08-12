import React from 'react';
import Leaderboard from './Components/Leaderboard'
import { Button } from '@smooth-ui/core-sc'
import Game from './Components/Game'
import './App.css';




class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            difficulty: 'Start'
        };
    }

    render() {
        if (this.state.difficulty === 'Standard') {
            return (
                <Game difficulty="Standard" />
            )
        } else if (this.state.difficulty === 'Expert') {
            return (
                <Game difficulty="Expert" />
            )
        }
        return (
            <div>
                <h1 className="title">Guess the Number Game</h1>
                <p>The computer generates a random number depending on the difficulty.</p>
                <p>If you choose Standard the number is between 1-10</p>
                <p>If you choose Expert the number is between 1-100</p>
                <div className="wrapper">
                    <Button
                        variant="primary"
                        onClick={() => this.setState({ difficulty: 'Standard' })}
                        difficulty="Standard" >
                        Standard
                    </Button>
                    <Button variant="primary" onClick={() => this.setState({ difficulty: 'Expert' })}
                        difficulty="Expert" >Expert</Button>
                </div>
            </div >

        )
    }

}


export default App;