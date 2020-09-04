import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSubmissions, deleteSubmissions } from "../../actions/submissions";
import Submitform from "./Submitform";

class Submission extends Component {
  static propTypes = {
    submissions: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getSubmissions();
  }

  render() {
    return (
      <Fragment>
        <Submitform />
        <h1>Submissions List</h1>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Upload</th>
            <th>Submitted at</th>
            <th>Assignment </th>
            <th>Student</th>
          </thead>
          <tbody>
            {this.props.submissions.map((submission) => (
              <tr key={submission.id}>
                <td>{submission.id}</td>
                <td>{submission.upload}</td>
                <td>{submission.submitted_at}</td>
                <td>{submission.assignment}</td>
                <td>{submission.user}</td>
                <td>
                  <button
                    onClick={this.props.deleteSubmissions.bind(
                      this,
                      submission.id
                    )}
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
  submissions: state.submissions.submissions,
});

export default connect(mapStateToProps, { getSubmissions, deleteSubmissions })(
  Submission
);
