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
        {/* {this.props.auth.user.is_student ? <Submitform /> : ""} */}
        {/* NOTICE: ROLE */}
        <Submitform />
        <h1>Submissions List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Upload</th>
              <th>Submitted at</th>
              <th>Assignment </th>
              <th>Student</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.submissions.map((submission) => (
              <tr key={submission.id}>
                <td>{submission.upload}</td>
                <td>{submission.submitted_at}</td>
                <td>{submission.assignment_title}</td>
                <td>{`${submission.user_fn} ${submission.user_ln}`}</td>

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
  auth: state.auth,
});

export default connect(mapStateToProps, { getSubmissions, deleteSubmissions })(
  Submission
);
