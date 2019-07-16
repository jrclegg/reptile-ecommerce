import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Nav from './components/Nav'
import Home from './pages/Home'
import FrozenFood from './pages/FrozenFood'
import Livefood from './pages/Livefood'
import Mice from './pages/Mice/Mice';
import Rats from './pages/Rats/Rats';
import Multimammates from './pages/Multimammates/Multimammates';
import GuineaPigs from './pages/GuineaPigs/GuineaPig';
import Rabbits from './pages/Rabbits/Rabbit';
import Locusts from './pages/Livefood/Locusts';
import BlackCrickets from './pages/Livefood/BlackCrickets';
import BrownCrickets from './pages/Livefood/BrownCrickets';

import GetProducts from './components/Product';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Nav/>
            <Route exact path="/" component={Home}/>
            <Route path="/frozenfood" component={FrozenFood}/>
            <Route path="/livefood" component={Livefood}/>
            <Route exact path="/mice/" component={Mice}/>
            <Route exact path="/rats" component={Rats}/>
            <Route exact path="/multimammates" component={Multimammates}/>
            <Route exact path="/guineapigs" component={GuineaPigs}/>
            <Route exact path="/rabbits" component={Rabbits}/>
            <Route exact path="/locusts" component={Locusts}/>
            <Route exact path="/blackcrickets" component={BlackCrickets}/>
            <Route exact path="/browncrickets" component={BrownCrickets}/>
            {/************* Mice **************/}
            <Route exact path="/mice/pinkies" render={() => { return (<GetProducts name="Pinkie Mice"/>); }}/>
            <Route exact path="/mice/largepinkies" render={() => { return (<GetProducts name="Large Pinkie Mice"/>); }}/>
      </HashRouter>
    );
  }
}

export default App;
