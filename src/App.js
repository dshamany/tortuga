import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Postlist from './components/Postlist';
import Post from './components/Post';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Index}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/posts' component={Postlist}/>
        <Route exact path='/posts/:id' component={Post}/>
      </Switch>
    </div>
  );
}

export default App;
