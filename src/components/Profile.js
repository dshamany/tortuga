import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
const Utils = require('../utils/auth');
const USER_OBJ = Utils.getUserFromToken(Utils.getToken());


function Profile(props){
    let user = USER_OBJ ? USER_OBJ.user : null;
    if (user){
        return (
            <div>
                <NavBar items={['browse']} />
                <div style={divStyleTop}>
                    <Link 
                        style={{...createBtn}}
                        to='/posts/create'
                    >
                        New Post
                    </Link>
                    <h1>{user.full_name}</h1>
                    <p>{user.email}</p>
                    <p>{user._id}</p>
                </div>
                <div>
                    <h2>Posts</h2>
                </div>
            </div>
        )
    } else {
    }
}

let createBtn = {
    marginTop: '25px',
    border: '1px solid #000',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'green',
    color: 'white',
    textDecoration: 'none',
    float: 'right',
}

let divStyleTop = {
    textAlign: 'left',
    backgroundColor: '#555',
    color: 'white',
    padding: '20px',
}

export default Profile;