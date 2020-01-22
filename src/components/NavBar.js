import React from 'react';
import { Link } from 'react-router-dom'

let ulStyle = {
    margin: 0,
    listStyle: 'none',
    display: 'flex',
    color: 'white',
    backgroundColor: 'black',
    justifyContent: 'flex-end',
};

let liStyle = {
    margin: 10,
}

function NavBar(props) {
    let items = props.items;
    return (
        <div style={ulStyle}>
            {
                items ?
                items.map(item => {
                    return (<li key={item} style={liStyle}>{item}</li>);
                })
                : <li style={liStyle}>Sign In</li>
            }
        </div>
    )
}

export default NavBar;