/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Test(props){
    return(
        <div>
        <div>{props.status}</div>
        <div>{props.text}</div>
        </div>
    )
}
export default Test