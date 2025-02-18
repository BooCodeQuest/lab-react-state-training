import React, { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
    const randomDiceImage = () => diceImages[Math.floor(Math.random() * diceImages.length)];

    const [currentDice, setCurrentDice] = useState(randomDiceImage);

    const rollDice = () => {
        setCurrentDice(emptyDice);

        setTimeout(() => {
            setCurrentDice(randomDiceImage);
        }, 1000);
    };

    return (
        <img src={currentDice} alt="Dice" onClick={rollDice} style={{ cursor: 'pointer' }} />
    );
}

export default Dice;
