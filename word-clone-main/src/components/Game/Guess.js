import React from 'react';
import {checkGuess} from '../../../src/game-helpers.js';

function Guess({answer, id, word}) {    
    // console.log(word)
    const wordArray = word ? word.split('') : ['', '', '', '', ''];
    const newWord = wordArray ? wordArray.map(w => ({id:Math.random(), letter:w})) : ['', '', '', '', ''].map(w => ({id:Math.random(), letter:w}));
    if (word) {
        const statusCheck = checkGuess(word, answer)
        // console.log(statusCheck)
        statusCheck.map((statusItem, i) => newWord[i].status = statusItem.status)
    }
    
    // console.log(newWord);        
    return (
        <p key={id} className="guess">
        {
            newWord.map(w => {
                return (<span key={w.id} className={"cell " + w.status} >{w.letter}</span>)
            })
        }
        </p>
    )
}

export default Guess;