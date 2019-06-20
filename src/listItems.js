import React from 'react';
import Item from './item.js';
const listItems = props => {

    const all = props.data.map(item => {
        if ((item.type === props.type || props.type === "all") && (item.namePl.toLowerCase().indexOf(props.text.toLowerCase()) != -1 || item.nameEng.toLowerCase().indexOf(props.text.toLowerCase()) != -1))
            return <Item namePl={item.namePl} nameEng={item.nameEng} type={item.type} path={item.path}></Item>
    })

    return (
        <div id="list">
            {all}
        </div>);
}

export default listItems;
