import React from 'react';

import './PageTwo.css';
import Resource from './Resource';
import AllPlayersResources from './AllPlayersResources'

export default function PageTwo(props) {

    const dicePress = props.dice.map((el, i) => {
        return (
            <span className='dice__press' key={`${el}${i}`} onClick={() => props.showResourcesHandler(el.die)} >{el.die}</span>
        );
    });

    let displayableResources;
    if (props.displayableResources) {
        displayableResources = props.displayableResources.map((player, ind) => {
            return (
                <AllPlayersResources key={`${player.name}${ind}${player.name}`} name={player.name} resources={player.resources} />
            )
        })
    }

    const diceWithResources = props.dice.map((el, i) => {
        const players = props.players.map((current, i) =>
            (<div key={`${current.name}${Math.random()}`} onClick={() => {
                props.addPersonToDiceInventory(current, el.die);
                props.dice.forEach(item => document.querySelector(`#myDropdown${item.die}`).classList.remove("show"));
            }}>{current.name}</div>)
        );

        const personRowResources = el.inventory.map((cur, index) => {
            return (
                <span key={`aaa${cur.name}${index}`} className='resource__row'>
                    <span>{cur.name}</span>

                    <Resource resourceName='WHEAT' count={cur.resources.wheat} addResourceHandler={props.addResourceHandler} removeResourceHandler={props.removeResourceHandler} uniqueRowId={cur.uniqueRowId} die={el.die} resource='wheat' />

                    <Resource resourceName='BRICK' count={cur.resources.brick} addResourceHandler={props.addResourceHandler} removeResourceHandler={props.removeResourceHandler} uniqueRowId={cur.uniqueRowId} die={el.die} resource='brick' />

                    <Resource resourceName='WOOL' count={cur.resources.wool} addResourceHandler={props.addResourceHandler} removeResourceHandler={props.removeResourceHandler} uniqueRowId={cur.uniqueRowId} die={el.die} resource='wool' />

                    <Resource resourceName='WOOD' count={cur.resources.wood} addResourceHandler={props.addResourceHandler} removeResourceHandler={props.removeResourceHandler} uniqueRowId={cur.uniqueRowId} die={el.die} resource='wood' />

                    <Resource resourceName='ORE' count={cur.resources.ore} addResourceHandler={props.addResourceHandler} removeResourceHandler={props.removeResourceHandler} uniqueRowId={cur.uniqueRowId} die={el.die} resource='ore' />

                    <button onClick={() => props.toggleRobberHandler(cur.uniqueRowId, el.die)}>ROBBER{`${cur.robber ? 'On' : 'Off'}`}</button>
                    <button onClick={() => {
                        props.deletePersonFromDiceInventory(cur.uniqueRowId, el.die);
                    }} >DELETE</button>
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
