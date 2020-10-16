import React from 'react';

import './Hex.css';
// import Node from '../Nodes/Node';

export default function Hex() {

    return (
        <div className="hex bigHex">

            <div className='hex__row three'>
                <div className="smallHex">1</div>
                <div className="smallHex">2</div>
                <div className="smallHex">3</div>
            </div>
            <div className='hex__row four'>
                <div className="smallHex">1</div>
                <div className="smallHex">2</div>
                <div className="smallHex">3</div>
                <div className="smallHex">4</div>
            </div>
            <div className='hex__row five'>
                <div className="smallHex">1</div>
                <div className="smallHex">2</div>
                <div className="smallHex">3</div>
                <div className="smallHex">4</div>
                <div className="smallHex">5</div>
            </div>
            <div className='hex__row four'>
                <div className="smallHex">1</div>
                <div className="smallHex">2</div>
                <div className="smallHex">3</div>
                <div className="smallHex">4</div>
            </div>
            <div className='hex__row three'>
                <div className="smallHex">1</div>
                <div className="smallHex">2</div>
                <div className="smallHex">3</div>
            </div>
        </div >

    )
}
