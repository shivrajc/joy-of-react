import React from 'react';
import Guess from './Guess';

function GuessResults({answer, guess}) {    
    return (
        <div className="guess-results">
        {            
            guess.map(g => {
                    return (                        
                        <Guess answer={answer} id={g.id} word={g.word} />                        
                    )
                }
            )            
        }
        </div>
    )
}

export default GuessResults;