import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history'

import Store from "../store";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router history={createBrowserHistory()}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
