import React from "react";
import { Tab } from "semantic-ui-react";
import Subject from "../Subject/Subject";
import Semester from "../Semester/Semester";
import Faculty from "../Faculty/Faculty";

const panes = [
  {
    menuItem: "Semester",
    render: () => (
      <Tab.Pane>
        <Semester />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Faculty",
    render: () => (
      <Tab.Pane>
        <Faculty />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Subject",
    render: () => (
      <Tab.Pane>
        <Subject />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "User Management",
    render: () => (
      <Tab.Pane>
        {/* <Subject /> */}
        <h1>Space for user Management</h1>
      </Tab.Pane>
    ),
  },
];

const Admin = () => <Tab panes={panes} />;

export default Admin;
