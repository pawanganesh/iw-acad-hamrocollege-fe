import React from "react";
import ClassroomForm from "./ClassroomForm";
import ClassroomView from "./ClassroomView";
import MemberForm from './MemberForm'
import DiscussionForm from './DiscussionForm'
import { Switch, Route } from "react-router-dom";

const ClassroomRoutes = () => {
  return (
    <Switch>
      
      <Route path="/classroom" component={ClassroomView} exact/>
      <Route path="/classroom/add-classroom" component={ClassroomForm} exact/>
      <Route path="/classroom/add-member" component={MemberForm} exact/>
      <Route path="/classroom/forum" component={ DiscussionForm } exact/>
    </Switch>
  );
};

export default ClassroomRoutes;
