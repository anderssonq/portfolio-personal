import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux'


//style
import "./assets/globalreact.css";
//Pages
import IntroPage from './pages/IntroPage';
// Pages ES
import Home from './pages/Home'
import messages from './messages';


class App extends Component {
  constructor() {
    super();
  }

  render() {

    let lang = this.props.lang;
    return (
      <IntlProvider locale="en" messages={messages[lang]} defaultLocale="en">
        <Router >
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router >
      </IntlProvider>
    );


  }
}
const mapStateToProps = state => ({
  lang: state.global.lang,
});


export default connect(
  mapStateToProps,
  null
)(App);