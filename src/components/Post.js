import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { getUserFromToken, getToken } from '../utils/auth';
import { createPost, getOne, updatePost } from '../utils/posts';

function Post(props){
    
    let action = props.location.pathname.split('/')[2];
    
    
    let user = getUserFromToken(getToken()).user;
    let firstUpper = action[0].toUpperCase();
    action = action.split('');
    action.splice(0, 1, firstUpper);
    action = action.join('')
    
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [content, setContent] = useState('');
        
    useEffect(() => {
        if (action !== 'Create' && isLoading){
            getOne(action)
            .then((data) => {
                setTitle(data.post.title);
                setImgUrl(data.post.imgUrl);
                setContent(data.post.content);
                setIsLoading(false);
            });
        }
    })
    return (
        <div>
            <NavBar items={['browse']} />
            {action === 'Create' && <h1>Create Post</h1>}
            <div>
                <div style={createDiv}>
                    <input 
                        style={{...inputStyle, ...borderStyle}}
                        placeholder='Title'
                        name='title'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <input
                        style={{...inputStyle}}
                        placeholder='Image Url'
                        type='file'
                        name='ImgUrl'
                        onChange={(e) => setImgUrl(e.target.value)}
                        value={imgUrl}
                    />
                </div>
                    <div style={{...createDiv}}>
                <textarea 
                    style={{...contentStyle, ...borderStyle}}
                    placeholder='Content'
                    name='content'
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
                </div>
                {
                    action === 'Create' ?
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
                            createPost(body, () => {
                                props.history.push('/profile');
                            })
                        }}
                    /> :
                    <input 
                        style={submitBtn}
                        type='submit'
                        value='Update Post'
                        onClick={() => {
                            let body = {
                                title,
                                imgUrl,
                                content,
                                user: user._id,
                            }
                            updatePost(action, body, () => {
                                props.history.push('/profile');
                            })
                        }}
                    />

                }
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