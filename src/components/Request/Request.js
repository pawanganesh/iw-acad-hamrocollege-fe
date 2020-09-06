import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRequests, deleteRequests } from "../../actions/requests";
import Requestform from "./Requestform";

class Request extends Component {
  static propTypes = {
    requests: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getRequests();
  }

  render() {
    return (
      <Fragment>
        <Requestform />
        <h1>Request List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Book</th>
              <th>Status</th>
              <th>Request Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.requests.map((request) => (
              <tr key={request.id}>
                <td>{`${request.user_fn} ${request.user_ln}`}</td>
                <td>{request.book_name}</td>
                <td>{request.status}</td>
                <td>{request.request_date}</td>
                <td>
                  <button
                    onClick={this.props.deleteRequests.bind(this, request.id)}
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
  requests: state.requests.requests,
});

export default connect(mapStateToProps, { getRequests, deleteRequests })(
  Request
);
