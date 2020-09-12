import React from "react";
import { Tab } from "semantic-ui-react";
import Author from "../Author/Author";
import Publisher from "../Publisher/Publisher";
import Book from "../Book/Book";
import Request from "../Request/Request";
import Approval from "../Approval/Approval";


const panes = [
  {
    menuItem: "Author",
    render: () => (
      <Tab.Pane>
        <Author />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Publisher",
    render: () => (
      <Tab.Pane>
        <Publisher />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Books",
    render: () => (
      <Tab.Pane>
        <Book />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "BookRequest",
    render: () => (
      <Tab.Pane>
        <Request />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Book Issue",
    render: () => (
      <Tab.Pane>
        <Approval />
      </Tab.Pane>
    ),
  },
];

const Library = () => <Tab panes={panes} />;

export default Library;
