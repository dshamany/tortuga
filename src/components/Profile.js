import React from 'react';
import NavBar from '../components/NavBar';

function Profile(props){
    
    return (
        <div>
            <NavBar items={['browse', 'signout']} />
            <h1>Profile</h1>
        </div>
    )
}

export default Profile;