import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSemesters } from "../../actions/semesters";

class Semesterform extends Component {
  state = {
    Semester: "",
  };

  static propTypes = {
    addSemesters: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const { semester } = this.state;
    const semesters = { semester };
    this.props.addSemesters(semesters);
  };

  render() {
    const { semester } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Semester</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Semester </label>
            <input
              className="form-control"
              type="text"
              name="semester"
              onChange={this.onChange}
              value={semester}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSemesters })(Semesterform);
