import React, { useState } from 'react';

import './PageOne.css';

export default function PageOne(props) {
    const [name, setName] = useState('');

    const nameChangeHandler = (e) => {
        const nameValue = e.target.value;
        setName(nameValue);
    }
    let players = props.players.map(el => {
        return (
            <li key={el.unique}>{el.name} <span onClick={() => props.deletePlayerHandler(el.unique)}>&#x000D7;</span></li>
        )
    })
    return (
        <div>
            <label htmlFor='name-input'></label>
            <input id='name-input' type='text' value={name} onChange={(e) => nameChangeHandler(e)} />
            <button onClick={() => {
                props.addPlayerHandler(name)
                setName('');
            }}>+ PLAYER</button>
            <ul>
                {players}
            </ul>
            <button className='let__games__begin' onClick={() => props.changePageHandler(2)} >LET THE GAMES BEGIN!</button>
        </div>
    )
}
