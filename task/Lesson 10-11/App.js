import React, { Component } from 'react';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Todos from './Components/Todos';
import Posts from './Components/Posts';
import Profile from './Components/Profile';
import Home from "./Components/Home"

import HomeGallery from "./Decorators/HomeGallery"

const HomePage = Home(HomeGallery)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
            <ul>
              <li> <Link to="/">Todos</Link> </li>
              <li> <Link to="/todos">Todos</Link> </li>
              <li> <Link to="/messages">Posts</Link> </li>
              <li> <Link to="/about">Profile</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"> <HomePage/>> </Route>
            <Route path="/todos"  component={Todos} />
            <Route path="/messages" component={Posts} />
            <Route path="/about" component={Profile} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;