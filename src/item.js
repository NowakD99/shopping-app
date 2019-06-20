import React from 'react';
//import picture from './pictures/pianino.jpg'
const Item = props => {
    //import picture from `./pictures/${props.path}`
    return (
        <div className="item">
            <img src={props.path}></img>
            <p>{props.namePl + "-" + props.nameEng + "-" + props.type}</p>
        </div>);
}

export default Item;
