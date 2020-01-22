import React from 'react';
import NavBar from '../components/NavBar';

function Signup(props){
    return (
        <div>
        <NavBar items={['SignIn', 'Browse']} />
        <h1>Sign Up Page</h1>
        </div>
    );
}

export default Signup;