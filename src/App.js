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
import SmallMultis from './pages/Multimammates/SmallMultis';
import LargeMultis from './pages/Multimammates/LargeMultis';
import ExtraLargeMultis from './pages/Multimammates/ExtraLargeMultis';
import MiniGuineaPigs from './pages/GuineaPigs/MiniGuineaPigs';
import SmallGuineaPigs from './pages/GuineaPigs/SmallGuineaPigs';
import MediumGuineaPigs from './pages/GuineaPigs/MediumGuineaPigs';
import LargeGuineaPigs from './pages/GuineaPigs/LargeGuineaPigs';
import ExtraLargeGuineaPigs from './pages/GuineaPigs/ExtraLargeGuineaPigs';
import Rabbits from './pages/Rabbits/Rabbit';
import DayOldRabbits from './pages/Rabbits/DayOldRabbits';
import MiniRabbits from './pages/Rabbits/MiniRabbits';
import SmallRabbits from './pages/Rabbits/SmallRabbits';
import MediumRabbits from './pages/Rabbits/MediumRabbits';
import LargeRabbits from './pages/Rabbits/LargeRabbits';
import ExtraLargeRabbits from './pages/Rabbits/ExtraLargeRabbits';
import GiantRabbits from './pages/Rabbits/GiantRabbits';
import Mice from './pages/Mice/Mice';
import Rats from './pages/Rats/Rats';
import Multimammates from './pages/Multimammates/Multimammates';
import GuineaPigs from './pages/GuineaPigs/GuineaPig';
import Gerbils from './pages/Gerbils/Gerbil';
import Hamsters from './pages/Hamsters/Hamster';
import Chicks from './pages/Chicks/Chick';
import Quail from './pages/Quail/Quail';
import Locusts from './pages/Livefood/Locusts';
import HatchlingLocusts from './pages/Livefood/HatchlingLocusts';
import SmallLocusts from './pages/Livefood/SmallLocusts';
import MediumLocusts from './pages/Livefood/MediumLocusts';
import LargeLocusts from './pages/Livefood/LargeLocusts';
import ExtraLargeLocusts from './pages/Livefood/ExtraLargeLocusts';
import AdultLocusts from './pages/Livefood/AdultLocusts';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Nav/>
            <Route exact path="/" component={Home}/>
            <Route path="/frozenfood" component={FrozenFood}/>
            <Route path="/livefood" component={Livefood}/>
            <Route exact path="/mice/" component={Mice}/>
            <Route path="/mice/pinkies" component={Pinkies}/>
            <Route path="/mice/largepinkies" component={LargePinkies}/>
            <Route path="/mice/fuzzies" component={Fuzzies}/>
            <Route path="/mice/hoppers" component={Hoppers}/>
            <Route path="/mice/smallmice" component={SmallMice}/>
            <Route path="/mice/mediummice" component={MediumMice}/>
            <Route path="/mice/largemice" component={LargeMice}/>
            <Route path="/mice/extralargemice" component={ExtraLargeMice}/>
            <Route exact path="/rats" component={Rats}/>
            <Route path="/rats/ratpups" component={RatPups}/>
            <Route path="/rats/ratfuzzies" component={RatFuzzies}/>
            <Route path="/rats/smallweaners" component={SmallWeanerRats}/>
            <Route path="/rats/largeweaners" component={LargeWeanerRats}/>
            <Route path="/rats/smallrats" component={SmallRats}/>
            <Route path="/rats/mediumrats" component={MediumRats}/>
            <Route path="/rats/largerats" component={LargeRats}/>
            <Route path="/rats/extralargerats" component={ExtraLargeRats}/>
            <Route path="/rats/giantrats" component={GiantRats}/>
            <Route exact path="/multimammates" component={Multimammates}/>
            <Route path="/multis/small" component={SmallMultis}/>
            <Route path="/multis/large" component={LargeMultis}/>
            <Route path="/multis/extralarge" component={ExtraLargeMultis}/>
            <Route exact path="/guineapigs" component={GuineaPigs}/>
            <Route path="/guineapigs/miniguineapigs" component={MiniGuineaPigs}/>
            <Route path="/guineapigs/smallguineapigs" component={SmallGuineaPigs}/>
            <Route path="/guineapigs/mediumguineapigs" component={MediumGuineaPigs}/>
            <Route path="/guineapigs/largeguineapigs" component={LargeGuineaPigs}/>
            <Route path="/guineapigs/extralargeguineapigs" component={ExtraLargeGuineaPigs}/>
            <Route exact path="/rabbits" component={Rabbits}/>
            <Route path="/rabbits/dayoldrabbits" component={DayOldRabbits}/>
            <Route path="/rabbits/minirabbits" component={MiniRabbits}/>
            <Route path="/rabbits/smallrabbits" component={SmallRabbits}/>
            <Route path="/rabbits/mediumrabbits" component={MediumRabbits}/>
            <Route path="/rabbits/largerabbits" component={LargeRabbits}/>
            <Route path="/rabbits/extralargerabbits" component={ExtraLargeRabbits}/>
            <Route path="/rabbits/giantrabbits" component={GiantRabbits}/>
            <Route path="/gerbils" component={Gerbils}/>
            <Route path="/hamsters" component={Hamsters}/>
            <Route path="/chicks" component={Chicks}/>
            <Route path="/quail" component={Quail}/>
            <Route path="/locusts" component={Locusts}/>
            <Route path="/locusts/hatchlings" component={HatchlingLocusts}/>
            <Route path="/locusts/small" component={SmallLocusts}/>
            <Route path="/locusts/medium" component={MediumLocusts}/>
            <Route path="/locusts/large" component={LargeLocusts}/>
            <Route path="/locusts/extralarge" component={ExtraLargeLocusts}/>
            <Route path="/locusts/adult" component={AdultLocusts}/>
      </HashRouter>
    );
  }
}

export default App;
