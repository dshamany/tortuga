import React, { useState } from 'react';
import NavBar from '../components/NavBar';

let formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
    margin: '0 auto',
}

let inputStyle = {
    margin: 5
}

let greenBtn = {
    backgroundColor: 'green',
    color: 'white',
    border: '1px solid #000',
    borderRadius: '5px',
    height: '30px',
    margin: '20px auto'
}

function Signin(props) {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitForm() {
        const payload = {
            full_name: fullName,
            email,
            password,
        };

        let url = '/users/sign';        
        
        await fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type':'application/json'
            }),
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            fullName === '' 
            ? props.history.push('/') 
            : props.history.push('/profile')
        });
        
    }

    return (
        <div>
            <NavBar items={['browse']} />
            <h1>Sign In/Sign Up</h1>
            <div style={formStyle}>
                <input
                    style={inputStyle}
                    placeholder='Full Name (Only for Sign Up)'
                    name='fullName'
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    style={inputStyle}
                    placeholder='Email'
                    type='email'
                    name='emailAddress'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    style={inputStyle}
                    placeholder='Password'
                    type='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    style={greenBtn}
                    type='submit'
                    value='Sign In/Sign Up'
                    onClick={submitForm}
                />
            </div>
            <p><b>PS!</b> If signing in, leave the name field empty</p>
        </div>
    );
}

export default Signin;