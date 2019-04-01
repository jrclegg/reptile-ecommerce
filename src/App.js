import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Nav from './components/Nav'
import Home from './pages/Home'
import FrozenFood from './pages/FrozenFood'
import Livefood from './pages/Livefood'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Nav/>
            <Route exact path="/" component={Home}/>
            <Route path="/frozenfood" component={FrozenFood}/>
            <Route path="/livefood" component={Livefood}/>
      </HashRouter>
    );
  }
}

export default App;
