import React from 'react'

const Form = (props) => {
    const { getFormValue, submitFormData, onSubmitClick } = props

    return (
        <form method='post' action=''>
            <label htmlFor="guess">Enter your guess here:</label>
            <input type="text"
                guess="guess"
                name="guessInput"
                id="guess" required onChange={getFormValue} />
            <input type="submit" value="Submit" onClick={(event) => onSubmitClick(event)} />
        </form>
    )
}

export default Form