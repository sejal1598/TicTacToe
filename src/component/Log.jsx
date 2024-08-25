import React from 'react'

const Log = ({ turns }) => {

    const sendData = () => {
        onSelectName("Hi from Child");

    }
    return (
        <div>
            {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>)}
        </div>
    )
}

export default Log
