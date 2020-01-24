import React from 'react';
import NavBar from '../components/NavBar';

function Index(props){
    return (
        <div>
            {
                localStorage.getItem('token') ?
                <NavBar items={['browse']} /> :
                <NavBar items={['browse']} />
            }
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Find a crew for your next journey.</h1>
        </div>
    )
}

export default Index;