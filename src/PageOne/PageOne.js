import React, { useState } from 'react';

import './PageOne.css';

export default function PageOne(props) {
    const [name, setName] = useState('');

    const nameChangeHandler = (e) => {
        const { value } = e.target;
        setName(value);
    }
    let players = props.players.map(el => {
        return (
            <li key={el.unique}>{el.name} <button onClick={() => props.deletePlayerHandler(el.unique)}>&#x000D7;</button></li>
        )
    })
    return (
        <div className='page__one'>
            <label htmlFor='name-input'></label>
            <input id='name-input' type='text' placeholder='Add Name' value={name} onChange={(e) => nameChangeHandler(e)} />
            <button className='name-input__btn' onClick={() => {
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
