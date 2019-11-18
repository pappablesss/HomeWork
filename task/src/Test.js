/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Test(props){
    return(
        <div>
        <div>{props.author}</div>
        <img src={props.download_url} style={{width:800}}></img>
        </div>
    )
}
export default Test