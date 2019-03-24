import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Crickets from './pages/Crickets'
import Mealworms from './pages/Mealworms'
import Rats from './pages/Rats'
import Mice from './pages/Mice'
import './App.css';

const NavigationWithRouter = withRouter(Nav);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationWithRouter/>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/crickets" component={Crickets} />
            <Route path="/mealworms" component={Mealworms} />
            <Route path="/rats" component={Rats} />
            <Route path="/mice" component={Mice} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
