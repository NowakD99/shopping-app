import React from 'react';

const Basket = props => {

    return (
        <div id="basket" onClick={props.basketClick}>
            <img src="http://zelechow.com.pl/wp-content/uploads/2016/06/shop.png" alt="basket"></img>
        </div>);
}

export default Basket;
