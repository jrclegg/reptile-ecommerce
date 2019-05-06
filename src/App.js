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
import Hoppers from './pages/Mice/Hoppers'
import './App.css';
import SmallMice from './pages/Mice/SmallMice';
import MediumMice from './pages/Mice/MediumMice';
import LargeMice from './pages/Mice/LargeMice';
import ExtraLargeMice from './pages/Mice/ExtraLargeMice';

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
            <Route path="/mice/hoppers" component={Hoppers}/>
            <Route path="/mice/smallmice" component={SmallMice}/>
            <Route path="/mice/mediummice" component={MediumMice}/>
            <Route path="/mice/largemice" component={LargeMice}/>
            <Route path="/mice/extralargemice" component={ExtraLargeMice}/>
      </HashRouter>
    );
  }
}

export default App;
