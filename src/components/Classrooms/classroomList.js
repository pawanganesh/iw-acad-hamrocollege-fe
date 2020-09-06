import React, { Component, Fragment } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { getClassroom } from "../../actions/classroom";
import PropTypes from "prop-types";
import AddNewClassroomForm from "../Classrooms/addNewClassroomForm";

class ClassroomList extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    classrooms: PropTypes.array.isRequired,
  };
  componentDidMount() {
    this.props.getClassroom();
  }
  render() {
    return (
      <Fragment>
        {/* {this.props.auth.user.is_admin ? <AddNewClassroomForm /> : ""} */}
        {/* NOTICE : ROLE */}
        <AddNewClassroomForm />

        <h2>My Classroom</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Faculty</Table.HeaderCell>
              <Table.HeaderCell>Section</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.classrooms.map((classroom) => (
              <Table.Row key={classroom.id}>
                <Table.Cell>{classroom.title}</Table.Cell>
                <Table.Cell>{classroom.faculty_name}</Table.Cell>
                <Table.Cell>{classroom.section_name}</Table.Cell>
                <Table.Cell>Join</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <h2>All Classroom</h2>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Faculty</Table.HeaderCell>
              <Table.HeaderCell>Section</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.classrooms.map((classroom) => (
              <Table.Row key={classroom.id}>
                <Table.Cell>{classroom.title}</Table.Cell>
                <Table.Cell>{classroom.faculty_name}</Table.Cell>
                <Table.Cell>{classroom.section_name}</Table.Cell>
                <Table.Cell>Join</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  classrooms: state.classrooms.classrooms,
});

export default connect(mapStateToProps, { getClassroom })(ClassroomList);
