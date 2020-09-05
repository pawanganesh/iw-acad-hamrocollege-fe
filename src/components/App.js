import React, { Component, Fragment } from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "../components/Home";
import { Container } from "semantic-ui-react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import UserProfile from "./accounts/UserProfile";
import ClassRoom from "../components/Classrooms/classroom";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";
import store from "../store";

import Submission from "../components/submit/Submission";
import Faculty from "../components/Faculty/Faculty";
import Semester from "../components/Semester/Semester";
import Subject from "../components/Subject/Subject";
import Assignment from "../components/assign/Assignment";
import Admin from "../components/Admin";

import Alerts from "./layout/Alerts";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Alerts />
          <Container>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/classroom" component={ClassRoom} />
              <PrivateRoute exact path="/admin" component={Admin} />
              <PrivateRoute
                // exact
                path="/userprofile/:username"
                component={UserProfile}
              />
              {/* Added start */}
              <Route exact path="/submission" component={Submission} />
              <Route exact path="/faculty" component={Faculty} />
              <Route exact path="/semester" component={Semester} />
              <Route exact path="/subject" component={Subject} />
              <Route exact path="/assignment" component={Assignment} />

              {/* Added End */}
            </Switch>
          </Container>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
