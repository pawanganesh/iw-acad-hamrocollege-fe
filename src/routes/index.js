import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ClassroomDashboard from "../components/Classrooms/dashboard";
import ClubDashboard from '../components/Clubs/dashboard';
import AttendanceDashboard from '../components/Attendances/dashboard';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/classroom" component={ClassroomDashboard}/>
        <Route path="/clubs" component={ClubDashboard}/>
        <Route path="/attendance" component={AttendanceDashboard}/>
      </Switch>
    </>
  );
};

export default Routes;
