import React from 'react';

export default function Resource(props) {
    return (
        <span className='resource__btn-align'>
            <button onClick={() => props.addResourceHandler(props.uniqueRowId, props.die, props.resource)} >+</button>
            <span>{props.resourceName}</span>
            <span>{props.count}</span>
            <button onClick={() => props.removeResourceHandler(props.uniqueRowId, props.die, props.resource)}>-</button>
        </span>
    );
};
