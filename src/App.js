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
            <Route exact path="/mice/fuzzies" render={() => { return (<GetProducts name="Mouse Fuzzies"/>); }}/>
            <Route exact path="/mice/hoppers" render={() => { return (<GetProducts name="Hoppers"/>); }}/>
            <Route exact path="/mice/smallmice" render={() => { return (<GetProducts name="Small Mice"/>); }}/>
            <Route exact path="/mice/mediummice" render={() => { return (<GetProducts name="Medium Mice"/>); }}/>
            <Route exact path="/mice/largemice" render={() => { return (<GetProducts name="Large Mice"/>); }}/>
            <Route exact path="/mice/extralargemice" render={() => { return (<GetProducts name="Extra Large Mice"/>); }}/>

            <Route exact path="/rats/ratpups" render={() => { return (<GetProducts name="Rat Pups"/>); }}/>
            <Route exact path="/rats/ratfuzzies" render={() => { return (<GetProducts name="Rat Fuzzies"/>); }}/>
            <Route exact path="/rats/smallweaners" render={() => { return (<GetProducts name="Small Weaner Rats"/>); }}/>

      </HashRouter>
    );
  }
}

export default App;
