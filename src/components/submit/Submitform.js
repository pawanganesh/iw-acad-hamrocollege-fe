import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSubmissions } from "../../actions/submissions";
import { getAssigns, addAssigns } from "../../actions/assigns";

class Submitform extends Component {
  state = {
    upload: "",
    assignment: "",
    user: this.props.auth.user.id,
  };

  static propTypes = {
    addSubmissions: PropTypes.func.isRequired,
    assigns: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getAssigns();
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleFileChange = (e) =>
    this.setState({
      upload: e.target.files[0],
    });

  onSubmit = (e) => {
    e.preventDefault();
    const { upload, assignment, user } = this.state;

    var form_data = new FormData();
    form_data.append("upload", upload);
    form_data.append("assignment", assignment);
    form_data.append("user", user);

    this.props.addSubmissions(form_data);
  };

  render() {
    const { assignment } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Submissions</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Upload</label>
            <input
              className="form-control"
              type="file"
              name="upload"
              onChange={this.handleFileChange}
              // value={upload}
            />
          </div>

          <div>
            <label>Assignment:</label>
            <select
              name="assignment"
              value={assignment}
              onChange={this.onChange}
            >
              {this.props.assigns.map((assign) => (
                <option key={assign.id} value={assign.id}>
                  {assign.title}
                </option>
              ))}
            </select>
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

const mapStateToProps = (state) => ({
  assigns: state.assigns.assigns,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addSubmissions,
  getAssigns,
  addAssigns,
})(Submitform);
