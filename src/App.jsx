import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Redirect,
    withRouter,
    Switch,
    Route
} from 'react-router-dom';
import {connect} from 'react-redux'

//style
import "./assets/globalreact.css";
//Pages
import IntroPage from './pages/IntroPage';
// Pages ES
import Home from './pages/Home'

class App extends Component {
  constructor(){
    super();
  }
  render() {
  
return (
    <Router >
     <Switch>
        <Route path="/" exact component={IntroPage} />
        <Route path="/es" exact component={Home} />

        
     </Switch>
    </Router >
);


  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, null)(App);
