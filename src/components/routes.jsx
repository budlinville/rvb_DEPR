import React from 'react';
import {Switch, Route} from 'react-router';

import Header from './header';
import Buttons from './pages/buttons/';
import About from './pages/about';
import Stats from './pages/stats';
import Donate from './pages/donate';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Header><Buttons/></Header>}></Route>
      <Route exact path='/stats' render={() => <Header><Stats/></Header>}></Route>
      <Route exact path='/about' render={() => <Header><About/></Header>}></Route>
      <Route exact path='/donate' render={() => <Header><Donate/></Header>}></Route>
    </Switch>
  );
}

export default Routes;
