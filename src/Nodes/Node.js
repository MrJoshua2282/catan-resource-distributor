import React from 'react';

import './Nodes.css';

export default function Nodes(props) {
    return (
        <div className={`${props.className} node`} id={`${props.id}`}>
        </div>
    )
}
