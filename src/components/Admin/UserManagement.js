import React, { Component, Fragment } from "react";
import { Form, Modal, Button, Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserList, deleteUser, getUserDetails } from "../../actions/users";

class UserManagement extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getUserList();
  }

  render() {
    return (
      <Fragment>
        <h1>User List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Teacher</th>
              <th>librarian</th>
              <th>Student</th>
              <th>Active</th>
              <th>Superuser</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id}>
                <td>{`${user.first_name}  ${user.last_name}`}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                {user.is_teacher ? <td>Yes</td> : <td>No</td>}
                {user.is_librarian ? <td>Yes</td> : <td>No</td>}
                {user.is_student ? <td>Yes</td> : <td>No</td>}
                {user.is_active ? <td>Yes</td> : <td>No</td>}
                {user.is_superuser ? <td>Yes</td> : <td>No</td>}
                <td>
                  <button
                    onClick={this.props.deleteUser.bind(this, user.id)}
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
  users: state.users.users,
  userdetails: state.users.userdetails,
});

export default connect(mapStateToProps, {
  getUserList,
  deleteUser,
  getUserDetails,
})(UserManagement);
