const InitialgameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

import React, { useState } from 'react'

const GameBoard = ({ onSelectPlayer, activePlayerSymbol }) => {
    console.log("activePlayerSymbol", activePlayerSymbol);

    const [gameBoard, setGameBoard] = useState(InitialgameBoard)
    console.log("gameBoard", gameBoard);


    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updatedGame = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedGame[rowIndex][colIndex] = activePlayerSymbol
            return updatedGame;

        });
        onSelectPlayer()
    }


    return (
        <ol id='game-board'>
            <li>
                <ol>
                    {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>
                            ))}
                        </ol>
                    </li>))}
                </ol>
            </li>
        </ol>
    )
}

export default GameBoard
