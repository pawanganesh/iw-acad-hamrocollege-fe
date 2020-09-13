import React from "react";
import { Tab } from "semantic-ui-react";
import Author from "../Author/Author";
import Publisher from "../Publisher/Publisher";
import Book from "../Book/Book";
import Request from "../Request/Request";
import Issue from "../Issue/Issue";
import { connect } from "react-redux";

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
      <Tab.Pane>{this.auth.user.is_librarian ? <Issue /> : ""}</Tab.Pane>
    ),
  },
];

const Library = () => <Tab panes={panes} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Library);
