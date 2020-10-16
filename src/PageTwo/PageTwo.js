import React, { useContext } from 'react';

import './PageTwo.css';
import Hex from '../Hex/Hex';
import Resource from './Resource';
import AllPlayersResources from './AllPlayersResources';
import robberImg from '../asset/robber.png';
import { StoreContext } from '../context';
import NodeList from '../Nodes/NodeList';

export default function PageTwo() {
    const context = useContext(StoreContext);

    // const dicePress = context.dice.map((el, i) => {
    //     return (
    //         <span className='dice__press' key={`${el}${i}`} >{el.die}</span>
    //     );
    // });

    // let displayableResources;
    // if (props.displayableResources) {
    //     displayableResources = props.displayableResources.map((player, ind) => {
    //         return (
    //             <AllPlayersResources key={`${ind}${player.unique}`} name={player.name} resources={player.resources} />
    //         )
    //     })
    // }

    // const diceWithResources = props.dice.map((el, i) => {
    //     const players = props.players.map((current, i) =>
    //         (<div key={`${current.name}${Math.random()}`} onClick={() => {
    //             props.addPersonToDiceInventory(current, el.die);
    //             props.dice.forEach(item => document.querySelector(`#myDropdown${item.die}`).classList.remove("show"));
    //         }}>{current.name}</div>)
    //     );

    // const personRowResources = el.inventory.map((cur, index) => {
    //     return (
    //         <span key={`aaa${cur.name}${index}`} className='resource__row'>
    //             <span>{cur.name}</span>

    //             <Resource resourceName='WHEAT' className={cur.robber && 'active__robber noCursor'} count={cur.resources.wheat} addResourceHandler={props.addResourceHandler} removeResourceHandler={props.removeResourceHandler} uniqueRowId={cur.uniqueRowId} die={el.die} resource='wheat' />

    //             <Resource resourceName='BRICK' className={cur.robber && 'active__robber noCursor'} count={cur.resources.brick} addResourceHandler={props.addResourceHandler} removeResourceHandler={props.removeResourceHandler} uniqueRowId={cur.uniqueRowId} die={el.die} resource='brick' />

    //             <Resource resourceName='WOOL' className={cur.robber && 'active__robber noCursor'} count={cur.resources.wool} addResourceHandler={props.addResourceHandler} removeResourceHandler={props.removeResourceHandler} uniqueRowId={cur.uniqueRowId} die={el.die} resource='wool' />

    //             <Resource resourceName='WOOD' className={cur.robber && 'active__robber noCursor'} count={cur.resources.wood} addResourceHandler={props.addResourceHandler} removeResourceHandler={props.removeResourceHandler} uniqueRowId={cur.uniqueRowId} die={el.die} resource='wood' />

    //             <Resource resourceName='ORE' className={cur.robber && 'active__robber noCursor'} count={cur.resources.ore} addResourceHandler={props.addResourceHandler} removeResourceHandler={props.removeResourceHandler} uniqueRowId={cur.uniqueRowId} die={el.die} resource='ore' />

    //             <span className={`${!cur.robber && 'robber__container'}`} onClick={() => props.toggleRobberHandler(cur.uniqueRowId, el.die)} ><img className={`${!cur.robber ? 'active__robber' : 'robber__margin'} robber__img`} src={robberImg} alt='robber' /></span>

    //             <button className='delete__row' onClick={() => {
    //                 props.deletePersonFromDiceInventory(cur.uniqueRowId, el.die);
    //             }} >DELETE</button>
    //         </span>
    //     )
    // });
    //     return (
    //         <div className='die__container__row' key={`bbb${el.die}${i}zzz`}>
    //             <div className='die__row' >{el.die}</div>
    //             {personRowResources}
    //             <div className="dropdown">
    //                 <span className="dropbtn" onClick={() => { document.querySelector(`#myDropdown${el.die}`).classList.toggle("show") }}>+ PERSON</span>
    //                 <div id={`myDropdown${el.die}`} className="dropdown-content">
    //                     {players}
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // });
    return (
        <div className='pageTwo_container'>
            <div>
                <span className='dice__press-container'>
                    {/* {dicePress} */}
                </span>
            </div>
            <NodeList />
            <Hex></Hex>

        </div>

        // <div>
        //     <span className='dice__press-container'>
        //         {dicePress}
        //     </span>
        //     <div>

        //         <span className='displayable__resources'>{displayableResources}</span>
        //         {props.displayableResources && <button className='clear__resources' onClick={() => props.hideResourcesHandler()}>CLEAR RESOURCES</button>}
        //     </div>
        //     {diceWithResources}
        //     <button className='go_to_page_one' onClick={() => context.setPageHandler(1)} >PAGE ONE</button>
        // </div>
    )
}
