import React from 'react';
import SignIn from '../components/Signin';

function SignOut(props){
    localStorage.removeItem('token');
    props.history.push('/signin');
    return (
        <SignIn {...props} />
    )
}

export default SignOut;