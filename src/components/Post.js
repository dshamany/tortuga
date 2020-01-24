import React, { useState } from 'react';
import NavBar from '../components/NavBar';
let AuthUtil = require('../utils/auth');
let PostUtil = require('../utils/posts');

function Post(props){

    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [content, setContent] = useState('');

    let action = props.location.pathname.split('/')[2];
        
        let user = AuthUtil.getUserFromToken(AuthUtil.getToken()).user;
        let firstUpper = action[0].toUpperCase();
        action = action.split('');
        action.splice(0, 1, firstUpper);
        action = action.join('')

        return (
            <div>
                <NavBar items={['browse']} />
                <h1>Post {action}</h1>
                <div>
                    <div style={createDiv}>
                        <input 
                            style={{...inputStyle, ...borderStyle}}
                            placeholder='Title'
                            name='title'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            style={{...inputStyle, ...borderStyle}}
                            placeholder='Image Url'
                            type='url'
                            name='ImgUrl'
                            onChange={(e) => setImgUrl(e.target.value)}
                        />
                    </div>
                        <div style={{...createDiv}}>
                    <textarea 
                        style={{...contentStyle, ...borderStyle}}
                        placeholder='Content'
                        name='content'
                        onChange={(e) => setContent(e.target.value)}
                    />
                    </div>
                    <input 
                        style={submitBtn}
                        type='submit'
                        value='Create Post'
                        onClick={() => {
                            let body = {
                                title,
                                imgUrl,
                                content,
                                user: user._id,
                            }
                            PostUtil.create(body, () => {
                                props.history.push('/profile');
                            });
                        }}
                    />
                </div>
            </div>
        );
}

let createDiv = {
    margin: '20px auto',
    maxWidth: '700px',
    textAlign: 'left',
    display: 'flex',
}

let borderStyle = {
    border: '1px solid #000',
    borderRadius: '5px',
}

let inputStyle = {
    width: '300px',
    height: '20px',
    margin: '5px',
    padding: '10px',
}

let contentStyle = {
    width: '90%',
    height: '500px',
    padding: '10px',
}

let submitBtn = {
    backgroundColor: 'green',
    color: 'white',
    border: '1px solid #000',
    borderRadius: '5px',
    padding: '10px',
}

export default Post;