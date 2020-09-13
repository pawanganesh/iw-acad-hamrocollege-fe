import React from "react";
import { Tab } from "semantic-ui-react";
import Subject from "../Subject/Subject";
import Semester from "../Semester/Semester";
import Faculty from "../Faculty/Faculty";
import UserManagement from "./UserManagement";
import Issue from '../Issue/Issue'

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
        <UserManagement />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Book Approved",
    render: () => (
      <Tab.Pane>
        <Issue />
      </Tab.Pane>
    ),
  },
];

const Admin = () => <Tab panes={panes} />;

export default Admin;
