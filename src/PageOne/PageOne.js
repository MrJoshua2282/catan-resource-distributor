import React, { useState, useContext } from 'react';

import './PageOne.css';
import { StoreContext } from '../context';

export default function PageOne(props) {
    const context = useContext(StoreContext);
    const [name, setName] = useState('');

    const nameChangeHandler = (e) => {
        const { value } = e.target;
        setName(value);
    }
    let players = context.players.map(el => {
        return (
            <li key={el.unique}>{el.name} <button onClick={() => context.deletePlayerHandler(el.unique)}>&#x000D7;</button></li>
        )
    })
    return (
        <div className='page__one'>
            <label htmlFor='name-input'></label>
            <input id='name-input' type='text' placeholder='Add Name' value={name} onChange={(e) => nameChangeHandler(e)} />
            <button className='name-input__btn' onClick={() => {
                context.addPlayerHandler(name);
                setName('');
            }}>+ PLAYER</button>
            <ul>
                {players}
            </ul>
            <button className='let__games__begin' onClick={() => context.setPageHandler(2)} >LET THE GAMES BEGIN!</button>
        </div>
    )
}
