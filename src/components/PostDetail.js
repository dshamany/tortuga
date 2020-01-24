import React, { useState } from 'react';
import NavBar from './NavBar';
const PostUtil = require('../utils/posts');
const CrewUtil = require('../utils/crew');
const AuthUtil = require('../utils/auth');


function PostDetail(props){
    
    let USER_OBJ = AuthUtil.getUserFromToken(AuthUtil.getToken());
    let user = USER_OBJ && USER_OBJ.user;
    
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState(null);
    const [crew, setCrew] = useState(null);
    
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const [isPostUser, setIsPostUser] = useState(false)
    
    let id = props.location.pathname.split('/')[2];

    if (isLoading){
        PostUtil.getOne(id)
        .then(data => {
            setPost(data.post);
            data.crew.length && setCrew(data.crew);
            setIsLoading(false);
            user && setIsPostUser(data.post.user === user._id);
        });
    }

    return (
        <div>
        {
            post ?
            <div>
                <NavBar items={['browse']} />
                <div style={{...postStyle}}>
                    {
                        (user && user._id === post.user) &&
                        <div style={{...userControls}}>
                            <input 
                                style={{...userControlBtn, ...blueBtn}}
                                type="submit" 
                                value="Edit"
                                onClick={() => {
                                    props.history.push(`/posts/${post._id}/edit`);
                                }}                               
                                />
                            <input 
                                style={{...userControlBtn, ...redBtn}}
                                type="button" 
                                value="Delete"
                                onClick={() => PostUtil.removePost(post._id, () => {
                                    props.history.push('/posts');
                                })}
                                />
                        </div>
                    }
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
                <div style={{...interestForm}}>
                    <h2>Join</h2>
                    <input 
                        style={{...inputStyle}}
                        placeholder='Full Name'
                        name='fullName'
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                    />
                    <input 
                        style={{...inputStyle}}
                        placeholder='Email'
                        name='email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input 
                        style={{...inputStyle}}
                        placeholder='Phone Number'
                        name='phone'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <input 
                        style={{...submitBtn}}
                        value='Submit Interest'
                        type='submit'
                        onClick={() => {
                            let payload = {
                                fullName,
                                email,
                                phone,
                                postRef: post && post._id,
                            }
                            CrewUtil.addCrew(payload, () => {
                                setIsLoading(true);
                                setFullName('');
                                setEmail('');
                                setPhone('');
                                props.history.push(`/posts/${post._id}`);
                            })
                        }}
                    />
                </div>
            </div>
            : <div></div>
        }
            <div style={{...signedUp}}>
                <h2>Signed Up</h2>
                {
                    isPostUser ?
                <div>
                    <ul>
                        {
                            crew && crew.map((mem, idx) => {
                                return (
                                    <p key={idx}>{mem.fullName} | {mem.email} | {mem.phone}</p>
                                )
                            })
                        }
                    </ul>
                </div> :
                <div>
                        <div>
                        {
                            crew ?
                            (crew.length > 1 ? `${crew.length} Members` : `${crew.length} Member`) :
                            <p>0</p>
                        }
                        </div>
                    </div>
                }
            </div>
        </div>
    )

}

let userControls = {
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    display: 'flex',
    alignItems: 'space-between',
    padding: '10px',
    zIndex: '10',
}

let userControlBtn = {
    margin: '5px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px 20px',
    width: '100px',
}

let blueBtn = {
    color: 'black',
    backgroundColor: '#66ccff',
}

let redBtn = {
    color: 'black',
    backgroundColor: 'red',
}

let postStyle = {
    width: '80vw',
    height: '100vh',
    margin: '0 auto',
    textAlign: 'justify',
}

let interestForm = {
    position: 'relative',
    bottom: 0,
    backgroundColor: 'black',
    color: 'white',
    padding: 30,
}

let signedUp = {
    position: 'relative',
    bottom: 0,
    backgroundColor: '#555',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
}

let inputStyle = {
    display: 'block',
    margin: '10px auto',
}

let submitBtn = {
    backgroundColor: 'green',
    color: '#fff',
    padding: 10,
    border: '1px solid #000',
    borderRadius: 5,
}

export default PostDetail;