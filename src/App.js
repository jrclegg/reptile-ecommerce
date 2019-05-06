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
import RatPups from './pages/Rats/RatPups';
import RatFuzzies from './pages/Rats/RatFuzzies';
import SmallWeanerRats from './pages/Rats/SmallWeanerRats';
import LargeWeanerRats from './pages/Rats/LargeWeanerRats';
import SmallRats from './pages/Rats/SmallRats';
import MediumRats from './pages/Rats/MediumRats';
import LargeRats from './pages/Rats/LargeRats';
import ExtraLargeRats from './pages/Rats/ExtraLargeRats';
import GiantRats from './pages/Rats/GiantRats';

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
            <Route path="/rats/ratpups" component={RatPups}/>
            <Route path="/rats/ratfuzzies" component={RatFuzzies}/>
            <Route path="/rats/smallweaners" component={SmallWeanerRats}/>
            <Route path="/rats/largeweaners" component={LargeWeanerRats}/>
            <Route path="/rats/smallrats" component={SmallRats}/>
            <Route path="/rats/mediumrats" component={MediumRats}/>
            <Route path="/rats/largerats" component={LargeRats}/>
            <Route path="/rats/extralargerats" component={ExtraLargeRats}/>
             <Route path="/rats/giantrats" component={GiantRats}/>
      </HashRouter>
    );
  }
}

export default App;
