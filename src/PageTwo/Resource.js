import React from 'react';

import brickImg from '../asset/brick.jpg';
import wheatImg from '../asset/wheat.jpg';
import woolImg from '../asset/wool.jpg';
import oreImg from '../asset/ore.jpg';
import lumberImg from '../asset/lumber.png';

export default function Resource(props) {
    let image;
    switch (props.resourceName) {
        case "WHEAT":
            image = <img src={wheatImg} alt='wheat' />;
            break;
        case "WOOD":
            image = <img src={lumberImg} alt='wood' />;
            break;
        case "ORE":
            image = <img src={oreImg} alt='ore' />;
            break;
        case "WOOL":
            image = <img src={woolImg} alt='wool' />;
            break;
        case "BRICK":
            image = <img src={brickImg} alt='brick' />;
            break;
        default:
            image = <img src={wheatImg} alt='wheat' />;
    }
    return (
        <span className={`${props.className} resource__btn-align`}>
            <button className={`${props.className}`} onClick={() => props.addResourceHandler(props.uniqueRowId, props.die, props.resource)} >+</button>
            {image}
            <span>{props.count}</span>
            <button className={`${props.className}`} onClick={() => props.removeResourceHandler(props.uniqueRowId, props.die, props.resource)}>-</button>
        </span>
    );
};
