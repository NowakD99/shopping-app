import React from 'react';

const Search = props => {
    return (
        <div id="search">
            <form action="">
                <input name="search" type="text" placeholder="Search" onChange={props.change} value={props.text}></input>
                <select name="type" onChange={props.change}>
                    <option name="all">Wszystko</option>
                    <option name="vegetables">Warzywa</option>
                    <option name="fruits">Owoce</option>
                </select>
            </form>
        </div>);
}

export default Search;
