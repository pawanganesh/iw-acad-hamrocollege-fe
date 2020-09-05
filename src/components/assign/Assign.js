import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAssigns, deleteAssigns } from "../../actions/assigns";

class Assign extends Component {
  static propTypes = {
    assigns: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getAssigns();
  }

  render() {
    return (
      <Fragment>
        <h1>Assignment</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
              <th>Upload</th>
              <th>Due date </th>
              <th>Created</th>
              <th>Subject</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {this.props.assigns.map((assign) => (
              <tr key={assign.id}>
                <td>{assign.id}</td>
                <td>{assign.title}</td>
                <td>{assign.upload}</td>
                <td>{assign.due_date}</td>
                <td>{assign.created_at}</td>
                <td>{assign.subject_name}</td>
                <td>{assign.user}</td>
                <td>
                  <button
                    onClick={this.props.deleteAssigns.bind(this, assign.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  assigns: state.assigns.assigns,
});

export default connect(mapStateToProps, { getAssigns, deleteAssigns })(Assign);
