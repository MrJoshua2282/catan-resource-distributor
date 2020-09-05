import React from 'react';

import './PageTwo.css';

export default function PageTwo(props) {

    const dicePress = props.dice.map((el, i) => {
        return (
            <span className='dice__press' key={`${el}${i}`} >{el.die}</span>
        );
    });

    const diceWithResources = props.dice.map((el, i) => {
        const players = props.players.map((el, i) =>
            (<div key={`${el.name}${Math.random()}`} >{el.name}</div>)
        );
        const personRowResources = el.inventory.map((cur, index) => {
            return (
                <span key={`aaa${cur.name}${index}`} className='resource__row'>
                    <name>{cur.name}</name>
                    <span className='resource__btn-align'>
                        <button>+</button>
                        <span>WHEAT</span>
                        <span>{cur.resources.wheat}</span>
                        <button>-</button>
                    </span>
                    <span className='resource__btn-align'>
                        <button>+</button>
                        <span>BRICK</span>
                        <span>{cur.resources.brick}</span>
                        <button>-</button>
                    </span>
                    <span className='resource__btn-align'>
                        <button>+</button>
                        <span>WOOL</span>
                        <span>{cur.resources.wool}</span>
                        <button>-</button>
                    </span>
                    <span className='resource__btn-align'>
                        <button>+</button>
                        <span>WOOD</span>
                        <span>{cur.resources.wood}</span>
                        <button>-</button>
                    </span>
                    <span className='resource__btn-align'>
                        <button>+</button>
                        <span>ORE</span>
                        <span>{cur.resources.ore}</span>
                        <button>-</button>
                    </span>
                    <button>ROBBER</button>
                    <button>DELETE</button>
                </span>
            )
        });
        return (
            <div key={`bbb${el.die}${i}zzz`}>
                <div className='die__row' >{el.die}</div>
                {personRowResources}
                <div className="dropdown">
                    <span className="dropbtn" onClick={() => { document.querySelector(`#myDropdown${el.die}`).classList.toggle("show") }}>+ PERSON</span>
                    <div id={`myDropdown${el.die}`} className="dropdown-content">
                        {players}
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div>
            <span className='dice__press-container'>
                {dicePress}
            </span>
            <div>Display who gets what resources and how many</div>
            {diceWithResources}
            <button className='go_to_page_one' onClick={() => props.changePageHandler(1)} >PAGE ONE</button>
        </div>
    )
}
