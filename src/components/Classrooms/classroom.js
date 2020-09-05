import React from "react";
import { Tab } from "semantic-ui-react";
import ClassroomDiscussion from "./classroomDiscussion";
import ClassroomList from "./classroomList";
const panes = [
  {
    menuItem: "Classroom",
    render: () => (
      <Tab.Pane>
        <ClassroomList />
      </Tab.Pane>
    ),
  },

  {
    menuItem: "Classroom Discussion",
    render: () => (
      <Tab.Pane>
        <ClassroomDiscussion />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Assignment",
    render: () => <Tab.Pane>Tab 2 Assignment</Tab.Pane>,
  },
  {
    menuItem: "Submission",
    render: () => <Tab.Pane>Tab 3 Submission</Tab.Pane>,
  },
];

const ClassRoom = () => <Tab panes={panes} />;

export default ClassRoom;
