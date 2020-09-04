import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Dashboard from "./components/assign/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import Submission from "./components/submit/Submission";
import Faculty from './components/Faculty/Faculty'
import Semester from './components/Semester/Semester'
import Subject from './components/Subject/Subject'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        {/* <div className='container'>
          
        </div>  */}
        <Switch>
          <Route exact path="/home" component={Dashboard} />
          <Route exact path="/submission" component={Submission} />
          <Route exact path="/faculty" component={Faculty} />
          <Route exact path="/semester" component={Semester} />  
          <Route exact path="/subject" component={Subject} />  
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
