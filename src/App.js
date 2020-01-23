import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Postlist from './components/Postlist';
import Post from './components/Post';
import SignOut from './components/Signout';



function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Index}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/signout' component={SignOut}/>
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/posts' component={Postlist}/>
        <Route exact path='/posts/:id' component={Post}/>
      </Switch>
    </div>
  );
}

export default App;
