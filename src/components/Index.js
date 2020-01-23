import React from 'react';
import NavBar from '../components/NavBar';

function Index(props){
    return (
        <div>
            {
                localStorage.getItem('token') ?
                <NavBar items={['browse']} /> :
                <NavBar items={['browse']} />
            }
            <h1>Home</h1>
        </div>
    )
}

export default Index;