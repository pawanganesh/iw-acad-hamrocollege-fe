import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSubjects } from "../../actions/subjects";
import { getSemesters, addSemesters } from "../../actions/semesters";
import { getFacultys, addFacultys } from "../../actions/facultys";

class Subjectform extends Component {
  state = {
    subject_code: "",
    name: "",
    faculty: "",
    semester: "",
  };

  static propTypes = {
    addSubjects: PropTypes.func.isRequired,
    semesters: PropTypes.array.isRequired,
    facultys: PropTypes.array.isRequired,
  };
  componentDidMount() {
    this.props.getFacultys();
    this.props.getSemesters();
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { subject_code, name, faculty, semester } = this.state;
    const subjects = { subject_code, name, faculty, semester };
    this.props.addSubjects(subjects);
  };

  render() {
    const { subject_code, name, faculty } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Subjects</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Subject Code </label>
            <input
              className="form-control"
              type="text"
              name="subject_code"
              onChange={this.onChange}
              value={subject_code}
            />
          </div>
          <div className="form-group">
            <label>Subject Name </label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div>
            <label>Faculty:</label>
            <select name="faculty" value={faculty} onChange={this.onChange}>
              {this.props.facultys.map((faculty) => (
                <option key={faculty.id} value={faculty.id}>
                  {faculty.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Semester:</label>
            <select name="semester" onChange={this.onChange}>
              {this.props.semesters.map((semester) => (
                <option key={semester.id} value={semester.id}>
                  {semester.semester}
                </option>
              ))}
            </select>
          </div>
          {/* <div className='form-group'>
                        <label>Semester </label>
                        <input 
                        className="form-control"
                        type="text"
                        name="semester"
                        onChange={this.onChange}
                        value={semester}
                        />    
                    </div>                    */}
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

const mapStateToProps = (state) => ({
  semesters: state.semesters.semesters,
  facultys: state.facultys.facultys,
});

export default connect(mapStateToProps, {
  addSubjects,
  getSemesters,
  addSemesters,
  getFacultys,
  addFacultys,
})(Subjectform);
