import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import Header from './Header';
import '../styles/app.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/surveys" component={Dashboard} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, actions)(App);
