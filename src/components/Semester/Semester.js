import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSemesters, deleteSemesters } from "../../actions/semesters";
import Semesterform from "./Semesterform";

class Semester extends Component {
  static propTypes = {
    semesters: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getSemesters();
  }

  render() {
    return (
      <Fragment>
        <Semesterform />
        <h1>Semester List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {this.props.semesters.map((semester) => (
              <tr key={semester.id}>
                <td>{semester.id}</td>
                <td>{semester.semester}</td>
                <td>
                  <button
                    onClick={this.props.deleteSemesters.bind(this, semester.id)}
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
  semesters: state.semesters.semesters,
});

export default connect(mapStateToProps, { getSemesters, deleteSemesters })(
  Semester
);
