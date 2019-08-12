import React from 'react'

const Leaderboard = (props) => {
    return (
        <ul>
            {props.users.map(u => {
                return (
                    <li>Name:{u.name}  Guesses:{u.guessCount}</li>
                )
            })}
        </ul>
    )
}

export default Leaderboard 