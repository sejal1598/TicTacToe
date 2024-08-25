// const InitialgameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]

import React, { useState } from 'react'

const GameBoard = ({ onSelectPlayer, turns, board }) => {
    // let gameBoard = InitialgameBoard;
    // for (const turn of turns) {
    //     const { square, player } = turn;
    //     const { row, col } = square;
    //     gameBoard[row][col] = player;
    // }


    // const [gameBoard, setGameBoard] = useState(InitialgameBoard)
    // console.log("gameBoard", gameBoard);


    // const handleSelectSquare = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGame = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedGame[rowIndex][colIndex] = activePlayerSymbol
    //         return updatedGame;

    //     });
    //     onSelectPlayer()
    // }


    return (
        <ol id='game-board'>
            <li>
                <ol>
                    {board.map((row, rowIndex) => (<li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}><button onClick={() => onSelectPlayer(rowIndex, colIndex)} disabled={playerSymbol != null}>{playerSymbol}</button></li>
                            ))}
                        </ol>
                    </li>))}
                </ol>
            </li>
        </ol>
    )
}

export default GameBoard
