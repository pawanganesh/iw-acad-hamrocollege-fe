import React from "react";
// import AttendanceForm from "./AttendanceForm";
import AttendanceView from './AttendanceView'
// import ClassroomMember from "../Classrooms/ClassroomMember";
import { Switch, Route } from "react-router-dom";
import AttendanceSheet from "./AttendanceSheet";


const AttendanceRoutes = () => {
  return (
    <Switch>
      
      <Route path="/attendance" component={AttendanceView} exact/>

      <Route path="/attendance/class/:id/members" component={AttendanceSheet} exact/>
      

      
    </Switch>
  );
};

export default AttendanceRoutes;
