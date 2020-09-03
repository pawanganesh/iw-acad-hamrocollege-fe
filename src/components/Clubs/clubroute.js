import React from "react";
import ClubForm from "./ClubForm";
import ClubView from "./ClubView";
import MemberForm from './MemberForm';
import AnnouncementForm from './AnnouncementForm';
import { Switch, Route } from "react-router-dom";

const ClubRoutes = () => {
  return (
    <Switch>
      <Route path="/club" component={ClubView} exact/>
      <Route path="/club/add-new-club" component={ClubForm} exact/>
      <Route path="/club/add-new-member" component={MemberForm} exact/>
      <Route path="/club/add-annoucement" component={ AnnouncementForm } exact/>
    </Switch>
  );
};

export default ClubRoutes;
