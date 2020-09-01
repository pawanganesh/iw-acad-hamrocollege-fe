import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ClassroomDashboard from "../components/Classrooms/dashboard";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/classroom" component={ClassroomDashboard}/>
      </Switch>
    </>
  );
};

export default Routes;
