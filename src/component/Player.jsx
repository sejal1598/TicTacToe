import React, { useState } from 'react'

const Player = ({ initialName, symbol, isActive }) => {
    const [isEditable, setIsEditable] = useState(false)
    const [inputTypeValue, setInputTypeValue] = useState(initialName)

    const handleChnage = () => {
        console.log("h");

        setIsEditable((isEditable) => !isEditable)
    }

    const handleInputChange = (e) => {
        setInputTypeValue(e.target.value)
    }
    return (

        <li className={isActive ? 'active' : 'undefined'}>
            <span className='player'>
                {!isEditable ? <span className='player-name'>{inputTypeValue}</span> :
                    <input type='text' value={inputTypeValue} required onChange={handleInputChange} />}

                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleChnage}>{isEditable ? "Save" : "Edit"}</button>
        </li>

    )
}

export default Player
