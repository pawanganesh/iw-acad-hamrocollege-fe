import React, { Component, Fragment } from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "../components/Home";
import { Container } from "semantic-ui-react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";
import store from "../store";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Container>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Container>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
