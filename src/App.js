import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Nav from './components/Nav'
import Home from './pages/Home'
import FrozenFood from './pages/FrozenFood'
import Livefood from './pages/Livefood'
import Pinkies from './pages/Mice/Pinkies'
import LargePinkies from './pages/Mice/LargePinkies'
import Fuzzies from './pages/Mice/Fuzzies'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Nav/>
            <Route exact path="/" component={Home}/>
            <Route path="/frozenfood" component={FrozenFood}/>
            <Route path="/livefood" component={Livefood}/>
            <Route path="/mice/pinkies" component={Pinkies}/>
            <Route path="/mice/largepinkies" component={LargePinkies}/>
            <Route path="/mice/fuzzies" component={Fuzzies}/>
      </HashRouter>
    );
  }
}

export default App;
