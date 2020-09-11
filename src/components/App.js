import React, { Component, Fragment } from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "../components/Home";
import { Container } from "semantic-ui-react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import UserProfile from "./accounts/UserProfile";
import PasswordResetForm from "./accounts/PasswordResetForm";

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
import EditReq from "../components/Issue/EditReq";

import Alerts from "./layout/Alerts";

import Author from "../components/Author/Author";
import Publisher from "../components/Publisher/Publisher";
import Book from "../components/Book/Book";
import Request from "../components/Request/Request";
import Issue from "../components/Issue/Issue";
// import Admin from "../components/Admin";

import Library from "../components/Library";

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
              <PrivateRoute exact path="/submission" component={Submission} />
              <PrivateRoute exact path="/faculty" component={Faculty} />
              <PrivateRoute exact path="/semester" component={Semester} />
              <PrivateRoute exact path="/subject" component={Subject} />
              <PrivateRoute exact path="/assignment" component={Assignment} />
              <PrivateRoute exact path="/edit/:id" component={EditReq} />
              <Route
                exact
                path="/password-reset"
                component={PasswordResetForm}
              />

              {/* Added End */}
              {/* Addedlater */}
              <PrivateRoute exact path="/library" component={Library} />
              <PrivateRoute exact path="/author" component={Author} />
              <PrivateRoute exact path="/publisher" component={Publisher} />
              <PrivateRoute exact path="/book" component={Book} />
              <PrivateRoute exact path="/request" component={Request} />
              <PrivateRoute exact path="/issue" component={Issue} />
            </Switch>
          </Container>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
