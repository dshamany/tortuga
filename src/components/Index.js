import React from 'react';
import NavBar from '../components/NavBar';

function Index(props){
    return (
        <div>
            <NavBar items={['Browse', 'SignUp', 'SignIn']} />
            <h1>Home</h1>
        </div>
    )
}

export default Index;