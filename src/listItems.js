import React from 'react';
import Item from './item.js';
const listItems = props => {

    const all = props.data.map((item, key) => {
        if ((item.type === props.type || props.type === "all") && (item.namePl.toLowerCase().indexOf(props.text.toLowerCase()) === 0 || item.nameEng.toLowerCase().indexOf(props.text.toLowerCase()) === 0))
            return <Item key={key} namePl={item.namePl} nameEng={item.nameEng} type={item.type} path={item.path} id={item.id} click={props.click}></Item>
    })

    return (
        <div id="list">
            {all}
        </div>);
}

export default listItems;
