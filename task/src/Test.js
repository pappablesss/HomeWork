/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Test(props){
    return(
        <div>
        <div><strong>USERID:</strong>{props.author}</div>
        <img src={props.url} width= "480" height="720"/>
        <div><strong>body:</strong>{props.download_url}</div>
        </div>
    )
}
export default Test