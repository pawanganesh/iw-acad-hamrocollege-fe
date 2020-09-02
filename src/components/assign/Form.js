import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addAssigns } from "../../actions/assigns";

class Form extends Component {
  state = {
    Title: "",
    Sdate: "",
    Ddate: "",
    File: "",
  };

  static propTypes = {
    addAssign: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const { title, sdate, ddate, file } = this.state;
    const assign = { title, sdate, ddate, file };
    this.props.addAssigns(assign);
  };

  render() {
    const { title, sdate, ddate, file } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Assignment</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Created Date</label>
            <input
              className="form-control"
              type="date"
              name="Sdate"
              onChange={this.onChange}
              value={sdate}
            />
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <input
              className="form-control"
              type="date"
              name="Ddate"
              onChange={this.onChange}
              value={ddate}
            />
          </div>
          <div className="form-group">
            <label>Upload</label>
            <input
              className="form-control"
              type="file"
              name="file"
              onChange={this.onChange}
              value={file}
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

export default connect(null, { addAssigns })(Form);
