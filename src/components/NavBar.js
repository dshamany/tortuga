import React from 'react';
import { Link } from 'react-router-dom'
import NavLinks from '../constants/NavLinks';

const logo = "../../tortuga-full-logo.png";

let ulStyle = {
    margin: 0,
    listStyle: 'none',
    display: 'flex',
    color: 'black',
    backgroundColor: 'tansparent',
    justifyContent: 'flex-end',
};

let liStyle = {
    margin: 10,
    color: 'black',
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
            <Link
                to="/"
                key="00"
            >
                <img 
                    src={logo}
                    style={{
                        width: 50,
                        height: 50,
                        position: "fixed",
                        left: 20,
                        top: 6,
                    }}
                />
            </Link>
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