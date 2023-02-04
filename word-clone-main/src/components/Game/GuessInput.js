import React from 'react';
import GuessResults from './GuessResults';
import KeyBoard from './KeyBoard';

function GuessInput({gameOver, setGameOver, answer}) {    
    const [guess, setGuess] = React.useState([{}, {}, {}, {}, {}, {}]);    
    const [guessTerm, setGuessTerm] = React.useState('');
    const [currentGuess, setCurrentGuess] = React.useState('');
    const numOfGuesses = guess.filter(o => Object.keys(o).length > 0).length;


    function handleSubmit(event) {        
        event.preventDefault();
        setCurrentGuess(guessTerm);
        const nextGuesses = [...guess];
        nextGuesses[numOfGuesses] = {id:Math.random(), word: guessTerm};

        setGuess(nextGuesses);        
        // console.log(numOfGuesses)
        setGuessTerm('');

        if (answer === guessTerm || numOfGuesses + 1  >= 6) {
            setGameOver(true);
            return
        }

        // if (gameOver) {
        //     // setGuessTerm('');
            
        //     return;
        // }

    }

    return (
        <div>
            {console.log(gameOver, answer, currentGuess,  answer === currentGuess)}
            <GuessResults answer={answer} guess={guess}/>
            
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input 
                id="guess-input" 
                type="text"
                minLength={5}
                maxLength={5}
                value={guessTerm}
                disabled={gameOver}
                onChange={(e) => {
                    setGuessTerm(e.target.value.toUpperCase());
                    // setCurrentGuess(guessTerm);
                }}
            />
        </form>
            <KeyBoard answer={answer} guess={guess}/>
        {
            (gameOver && answer === currentGuess)
            ? (<div class="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in <strong>{numOfGuesses} guesses</strong>.
            </p>
            </div>)
            : (!gameOver && answer !== currentGuess)
                ? undefined
                : (gameOver && answer !== currentGuess)
                   ? (
                    <div class="sad banner">
                        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
                    </div>
                    )
                    : undefined
            }
        </div>
    )
}

export default GuessInput;