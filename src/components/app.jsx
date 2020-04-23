import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history'
import {connect} from 'react-redux';

import Routes from "./routes";
import {themeSelector} from "../reducers/themes";

class App extends Component {
  render() {
    const {theme} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Router history={createBrowserHistory()}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  theme: themeSelector(state)
});

export default connect(mapStateToProps)(App);
