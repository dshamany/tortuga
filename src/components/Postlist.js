import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
let PostUtil = require('../utils/posts');

function Postlist(props){
    
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (isLoading){
            PostUtil.getAll()
            .then((data) => {
                setPosts(data);
                setIsLoading(false);
            });
        }
    });

    return (
        <div>
            <NavBar items={['index']} />
            <h1>Postlist</h1>
            <div style={{...flexContainer}}>
            {
                posts
                ? posts.map((post) => {
                    return (
                        <div style={{...postCardStyle}} key={post.title}>
                            <h3>{post.title}</h3>
                        </div>
                    );
                })
                : <p>Data unavailable</p>
            }
            </div>
        </div>
    );
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
    height: '200px',
    margin: '10px',
} 


export default Postlist;