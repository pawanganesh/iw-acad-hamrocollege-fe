import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getIssues, deleteIssues } from "../../actions/issues";
import Issueform from "./Issueform";

class Issue extends Component {
  static propTypes = {
    issues: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getIssues();
  }

  render() {
    return (
      <Fragment>
        {this.props.auth.user.is_librarian ? <Issueform /> : ""}
        <h1>Book Issued</h1>
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Book</th>
              <th>Issue Date</th>
              <th>Return Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.issues.map((issue) => (
              <tr key={issue.id}>
                {/* <td>{issue.user_name}</td> */}
                <td>{`${issue.user_fn} ${issue.user_ln}`}</td>

                <td>{issue.book_name}</td>
                <td>{issue.issue_date}</td>
                <td>{issue.return_date}</td>
                <td>
                  <button
                    onClick={this.props.deleteIssues.bind(this, issue.id)}
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
  issues: state.issues.issues,
});

export default connect(mapStateToProps, { getIssues, deleteIssues })(Issue);
