import React from 'react'

const Log = ({ onSelectName }) => {

    const sendData = () => {
        onSelectName("Hi from Child");

    }
    return (
        <div>
            <button onClick={sendData}>Send Data to Parent</button>
        </div>
    )
}

export default Log
