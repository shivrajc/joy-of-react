import React from 'react';
import {checkGuess} from '../../../src/game-helpers.js';

function KeyBoard ({answer, guess}) {
    // const letters = "QWERTYUIOPASDFGHJKLZXCVBNM".split('').map(letter => ({label:letter, status:''}));
    const lettersRow1 = "QWERTYUIOP".split('').map(letter => ({label:letter, status:''}));
    const lettersRow2 = "ASDFGHJKL".split('').map(letter => ({label:letter, status:''}));
    const lettersRow3 = "ZXCVBNM".split('').map(letter => ({label:letter, status:''}));
    let status = [];
    const currentGuessed = guess.filter(g => Object.keys(g).length>0);

    if (currentGuessed.length>0){
        
        currentGuessed.forEach(g => {
            status = [...status, ...checkGuess(g.word, answer)]
        })
        console.log(status);
        status.forEach(element => {
            lettersRow1.forEach(letter => {
                if (element.letter === letter.label) {
                    letter.status = `keyboard-letter-${element.status}`;                
                }
            })    
            lettersRow2.forEach(letter => {
                if (element.letter === letter.label) {
                    letter.status = `keyboard-letter-${element.status}`;                
                }
            })    
            lettersRow3.forEach(letter => {
                if (element.letter === letter.label) {
                    letter.status = `keyboard-letter-${element.status}`;                
                }
            })  
            
        });
        
    }

    return (
        <div className='keyboard'>
            <div className='keyboard-row'>{lettersRow1.map(letter => <span className={`keyboard-letter ${letter.status}`}>{letter.label}</span>)}</div>
            <div className='keyboard-row'>{lettersRow2.map(letter => <span className={`keyboard-letter ${letter.status}`}>{letter.label}</span>)}</div>
            <div className='keyboard-row'>{lettersRow3.map(letter => <span className={`keyboard-letter ${letter.status}`}>{letter.label}</span>)}</div>
        </div>
    )
}

export default KeyBoard;