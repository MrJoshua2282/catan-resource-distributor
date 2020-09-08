import React from 'react';

export default function AllPlayersResources(props) {
    // let resource = Object.entries(props.resource).map((el, i) => {
    //     return (

    //     )
    // })
    return (
        <React.Fragment>
            <span>{props.name}</span>
            <span className='resource__btn-align'>
                <span>{props.resource}</span>
                <span>{props.count}</span>
            </span>
        </React.Fragment>
    )
}
