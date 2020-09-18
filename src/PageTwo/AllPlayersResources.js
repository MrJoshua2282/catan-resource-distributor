import React from 'react';

import brickImg from '../asset/brick.jpg';
import wheatImg from '../asset/wheat.jpg';
import woolImg from '../asset/wool.jpg';
import oreImg from '../asset/ore.jpg';
import lumberImg from '../asset/lumber.png';

export default function AllPlayersResources(props) {

    return (
        <span className='condensed__resources'>
            <span >{props.name}</span>
            <span className='condensed__resources__group'>
                <img src={wheatImg} alt='wheat' />
                <span>{props.resources.wheat}</span>
            </span>
            <span className='condensed__resources__group'>
                <img src={brickImg} alt='brick' />
                <span>{props.resources.brick}</span>
            </span>
            <span className='condensed__resources__group'>
                <img src={woolImg} alt='wool' />
                <span>{props.resources.wool}</span>
            </span>
            <span className='condensed__resources__group'>
                <img src={lumberImg} alt='wood' />
                <span>{props.resources.wood}</span>
            </span>
            <span className='condensed__resources__group'>
                <img src={oreImg} alt='ore' />
                <span>{props.resources.ore}</span>
            </span>
        </span>
    )
}
