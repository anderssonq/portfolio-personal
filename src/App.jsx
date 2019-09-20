import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


//style
import "./assets/globalreact.css";
//Pages
import IntroPage from './pages/IntroPage';
// Pages ES
import Home from './pages/Home'


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Router >
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router >
    );


  }
}

export default App;