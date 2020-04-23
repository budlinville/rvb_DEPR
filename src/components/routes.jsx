import React, {Component} from 'react';
import {Switch, Route} from 'react-router';
import {connect} from 'react-redux';
import {ThemeProvider} from '@material-ui/core/styles';

import {themeSelector} from "../reducers/themes";
import Header from "./header";
import Buttons from "./pages/buttons/";
import About from "./pages/about";
import Stats from "./pages/stats";
import Donate from "./pages/donate";

class Routes extends Component {
  // TODO : May move ThemeProvider to Header component...
  render() {
    const {theme} = this.props;
    return (
      <Switch>
        <Route exact path='/' render={() => <ThemeProvider theme={theme}><Header><Buttons/></Header></ThemeProvider>}></Route>
        <Route exact path='/stats' render={() => <ThemeProvider theme={theme}><Header><Stats/></Header></ThemeProvider>}></Route>
        <Route exact path='/about' render={() => <ThemeProvider theme={theme}><Header><About/></Header></ThemeProvider>}></Route>
        <Route exact path='/donate' render={() => <ThemeProvider theme={theme}><Header><Donate/></Header></ThemeProvider>}></Route>
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  theme: themeSelector(state)
});

export default connect(mapStateToProps)(Routes);
