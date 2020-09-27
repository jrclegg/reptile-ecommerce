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
import Blog from './pages/Blog';

import Basket from './pages/Cart'

import GetProducts from './components/Product';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Nav/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/blog" component={Blog}/>
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
            <Route exact path="/basket" component={Basket}/>
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
            <Route  exact path="/rats/largeweaners"render={() => { return (<GetProducts name="Large Weaner Rats"/>); }}/>
            <Route exact path="/rats/smallrats" render={() => { return (<GetProducts name="Small Rats"/>); }}/>
            <Route exact path="/rats/mediumrats" render={() => { return (<GetProducts name="Medium Rats"/>); }}/>
            <Route exact path="/rats/largerats" render={() => { return (<GetProducts name="Large Rats"/>); }}/>
            <Route exact path="/rats/extralargerats" render={() => { return (<GetProducts name="Extra Large Rats"/>); }}/>
            <Route exact path="/rats/giantrats" render={() => { return (<GetProducts name="Giant Rats"/>); }}/>
            {/************* Multimammate Mice  **********/}
            <Route exact path="/multis/extrasmall" render={() => { return (<GetProducts name="Extra Small Multimammate Mice"/>); }}/>
            <Route exact path="/multis/small" render={() => { return (<GetProducts name="Small Multimammate Mice"/>); }}/>
            <Route exact path="/multis/medium" render={() => { return (<GetProducts name="Medium Multimammate Mice"/>); }}/>
            <Route exact path="/multis/large" render={() => { return (<GetProducts name="Large Multimammate Mice"/>); }}/>
            <Route exact path="/multis/extralarge" render={() => { return (<GetProducts name="Extra Large Multimammate Mice"/>); }}/>
            <Route exact path="/multis/extraextralarge" render={() => { return (<GetProducts name="Extra Extra Large Multimammate Mice"/>); }}/>
            <Route exact path="/multis/extraextraextralarge" render={() => { return (<GetProducts name="Extra Extra Extra Large Multimammate Mice"/>); }}/>
            <Route exact path="/multis/extraextraextraextralarge" render={() => { return (<GetProducts name="Extra Extra Extra Extra Large Multimammate Mice"/>); }}/>
            <Route exact path="/multis/extraextraextraextraextralarge" render={() => { return (<GetProducts name="Extra Large (5) Multimammate Mice"/>); }}/>
            <Route exact path="/multis/extraextraextraextraextraextralarge" render={() => { return (<GetProducts name="Extra Large (6) Multimammate Mice"/>); }}/>

             {/************* Guinea Pigs  **********/}
            <Route exact path="/guineapigs/miniguineapigs" render={() => { return (<GetProducts name="Mini Guinea Pigs"/>); }}/>
            <Route exact path="/guineapigs/smallguineapigs"  render={() => { return (<GetProducts name="Small Guinea Pigs"/>); }}/>
            <Route exact path="/guineapigs/mediumguineapigs" render={() => { return (<GetProducts name="Regular Guinea Pigs"/>); }}/>
            <Route exact path="/guineapigs/largeguineapigs" render={() => { return (<GetProducts name="Large Guinea Pigs"/>); }}/>
             {/************* Rabbits  **********/}
            <Route exact path="/rabbits/dayoldrabbits" render={() => { return (<GetProducts name="Day Old Rabbits"/>); }}/>
            <Route exact path="/rabbits/minirabbits" render={() => { return (<GetProducts name="Mini Rabbits"/>); }}/>
            <Route exact path="/rabbits/smallrabbits" render={() => { return (<GetProducts name="Small Rabbits"/>); }}/>
            <Route exact path="/rabbits/mediumrabbits" render={() => { return (<GetProducts name="Medium Rabbits"/>); }}/>
            <Route exact path="/rabbits/largerabbits" render={() => { return (<GetProducts name="Large Rabbits"/>); }}/>
            <Route exact path="/rabbits/extralargerabbits" render={() => { return (<GetProducts name="Extra Large Rabbits"/>); }} />
            <Route exact path="/rabbits/giantrabbits" render={() => { return (<GetProducts name="Giant Rabbits"/>); }}/>
            {/************* Hamsters **********/}
            <Route exact path="/hamsters" render={() => { return (<GetProducts name="Medium/Large Hamsters"/>); }}/>
            {/************* Gerbils **********/}
            <Route exact path="/gerbils" render={() => { return (<GetProducts name="Medium Gerbils"/>); }}/>
             {/************* Chicks **********/}
            <Route exact path="/chicks" render={() => { return (<GetProducts name="Chicks"/>); }}/>
             {/************* Quail **********/}
            <Route exact path="/quail" render={() => { return (<GetProducts name="Large Quail"/>); }}/>
            {/************* Locusts **********/}
            <Route exact path="/locusts/hatchlings" render={() => { return (<GetProducts name="Hatchling Locusts"/>); }}/>
            <Route exact path="/locusts/small" render={() => { return (<GetProducts name="Small Locusts"/>); }}/>
            <Route exact path="/locusts/medium" render={() => { return (<GetProducts name="Medium Locusts"/>); }}/>
            <Route exact path="/locusts/large" render={() => { return (<GetProducts name="Large Locusts"/>); }}/>
            <Route exact path="/locusts/extralarge" render={() => { return (<GetProducts name="Extra Large Locusts"/>); }}/>
            <Route exact path="/locusts/adult" render={() => { return (<GetProducts name="Adult Locusts"/>); }}/>
            {/************* Brown Crickets **********/}
            <Route exact path="/browncrickets/micro" render={() => { return (<GetProducts name="Micro Silent Brown Crickets"/>); }}/>
            <Route exact path="/browncrickets/small" render={() => { return (<GetProducts name="Small Silent Brown Crickets"/>); }}/>
            <Route exact path="/browncrickets/mediumsmall" render={() => { return (<GetProducts name="Medium Small Silent Brown Crickets"/>); }}/>
            <Route exact path="/browncrickets/medium" render={() => { return (<GetProducts name="Medium Silent Brown Crickets"/>); }}/>
            <Route exact path="/browncrickets/standard" render={() => { return (<GetProducts name="Standard Silent Brown Crickets"/>); }} />
            <Route exact path="/browncrickets/large" render={() => { return (<GetProducts name="Large Silent Brown Crickets"/>); }} />
            <Route exact path="/browncrickets/extralarge" render={() => { return (<GetProducts name="Extra Large Silent Brown Crickets"/>); }}/>
            {/************* Brown Crickets **********/}
            <Route exact path="/blackcrickets/micro" render={() => { return (<GetProducts name="Micro Black Crickets"/>); }}/>
            <Route exact path="/blackcrickets/small" render={() => { return (<GetProducts name="Small Black Crickets"/>); }}/>
            <Route exact path="/blackcrickets/mediumsmall" render={() => { return (<GetProducts name="Medium Small Black Crickets"/>); }}/>
            <Route exact path="/blackcrickets/medium" render={() => { return (<GetProducts name="Medium Black Crickets"/>); }}/>
            <Route exact path="/blackcrickets/large" render={() => { return (<GetProducts name="Large Black Crickets"/>); }}/>
            <Route exact path="/blackcrickets/extralarge" render={() => { return (<GetProducts name="Extra Large Black Crickets"/>); }} />
            <Route exact path="/mealworms" render={() => { return (<GetProducts name="Mealworms"/>); }} />
            <Route exact path="/waxworms" render={() => { return (<GetProducts name="Waxworms"/>); }} />
      </HashRouter>
    );
  }
}

export default App;
