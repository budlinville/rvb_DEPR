import React from 'react';
import {Switch, Route} from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import Header from "./header";
import Buttons from "./pages/buttons/";
import About from "./pages/about";
import Stats from "./pages/stats";
import Donate from "./pages/donate";

const Page = ({children}) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.root}>
        {children}
      </div>
    </>
  )
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Page><Buttons/></Page>} />
      <Route exact path='/stats' render={() => <Page><Stats/></Page>} />
      <Route exact path='/about' render={() => <Page><About/></Page>} />
      <Route exact path='/donate' render={() => <Page><Donate/></Page>} />
    </Switch>
  );
}

const useStyles = makeStyles(theme => ({
	root: {
    display: 'flex'
  }
}));

export default Routes;
