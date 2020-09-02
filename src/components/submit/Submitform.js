import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSubmissions } from "../../actions/submissions";

class Submitform extends Component {
  state = {
    Title: "",
    Subdate: "",
    File: "",
  };

  static propTypes = {
    addSubmission: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const { title, subdate, file } = this.state;
    const submission = { title, subdate, file };
    this.props.addSubmissions(submission);
  };

  render() {
    const { subdate, file } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Submissions</h2>
        <form onSubmit={this.onSubmit}>
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
            <label>Created Date</label>
            <input
              className="form-control"
              type="date"
              name="Subdate"
              onChange={this.onChange}
              value={subdate}
            />
          </div>
          {/* <div className='form-group'>
                        <label>Assignment Title</label>
                        <input 
                        className="form-control"
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={title}
                        />    
                    </div>                                                        */}

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

export default connect(null, { addSubmissions })(Submitform);
