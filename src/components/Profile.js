import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
const AuthUtil = require('../utils/auth');
const PostUtil = require('../utils/posts');


function Profile(props){
    const USER_OBJ = AuthUtil.getUserFromToken(AuthUtil.getToken());
    let user = USER_OBJ ? USER_OBJ.user : null;

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]); 

    useEffect(() => {
        if (isLoading){
            PostUtil.getUserPosts(user._id)
            .then((data) => {
                setPosts(data);
                setIsLoading(false);
            });
        }
    });

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
                </div>
                <div>
                    <h2>Posts</h2>
                    <div style={{...flexContainer}}>
                        {
                             posts
                             ? posts.map((post) => {
                                 return (
                                     <Link to={`/posts/${post._id}`}>
                                        <div style={{...postCardStyle}} key={post.title}>
                                            <h3>{post.title}</h3>
                                        </div>
                                     </Link>
                                 );
                             })
                             : <p>Data unavailable</p>
                        }
                    </div>
                </div>
            </div>
        )
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

let flexContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    maxWidth: '900px',
    margin: '0px auto',
}

let postCardStyle = {
    border: '1px solid #000',
    borderRadius: '5px',
    width: '200px',
    height: '100px',
    margin: '10px',
} 

export default Profile;