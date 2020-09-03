import React from "react";
import { Tab } from "semantic-ui-react";
import ClassroomDiscussion from "./classroomDiscussion";

const panes = [
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
