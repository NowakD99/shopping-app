import React from 'react';

const shoppingList = props => {
    const list = props.items.map(item => {
        const x = props.listItems.map(element => {
            if (item.id * 1 === element * 1) {
                return <li key={item.id}>{item.namePl} <button name={item.id} onClick={props.click}>x</button></li>

            }
            else return null
        });
        return x
    })
    return (
        <div id="shoppingList">
            <p>Lista zakupów do kupienia</p>
            <ul>{list}</ul>
        </div>);
}

export default shoppingList;
