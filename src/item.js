import React from 'react';
//import picture from './pictures/pianino.jpg'
const Item = props => {
    //import picture from `./pictures/${props.path}`
    return (
        <div className="item" value={props.id}>
            <img src={props.path} alt={props.nameEng} name={props.id} onClick={props.click}></img>
            <p name={props.id} value={props.id} onClick={props.click}>{props.nameEng}</p>
        </div>);
}

export default Item;
