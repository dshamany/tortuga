import React from 'react';
import { Link } from 'react-router-dom'
import NavLinks from '../constants/NavLinks';

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
    color: 'white',
    textDecoration: 'none',
}

function NavBar(props) {
    let items = props.items;

    if (localStorage.getItem('token')) {
        items.push('profile');
        items.push('signout');
    } else {
        items.push('signin');
    }

    items = NavLinks.getItems(items);

    return (
        <div style={ulStyle}>
            {
                items.map(item => {
                    return(
                    <Link 
                        to={item.path} 
                        key={item.key} 
                        style={liStyle}>
                            {item.name}
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default NavBar;