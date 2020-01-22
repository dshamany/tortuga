import React from 'react';
import NavBar from '../components/NavBar';

function Postlist(props){
    return (
        <div>
            <NavBar items={['index']} />
            <h1>Postlist</h1>
        </div>
    );
}

export default Postlist;