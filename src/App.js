import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Router from './Router';

import Home from './Home';
import Preferences from './Preferences';

class App extends Component {
  render() {
    return (
      <Router path={this.props.path}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/preferences">Preferences</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/preferences" component={Preferences} />
        </div>
      </Router>
    );
  }
}

export default App;
