import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addAssigns } from "../../actions/assigns";
import { getSubjects, addSubjects } from "../../actions/subjects";

class Form extends Component {
  state = {
    title: "",
    upload: "",
    due_date: "",
    created_at: "",
    subject: "",
    user: this.props.auth.user.id,
  };

  static propTypes = {
    addAssigns: PropTypes.func.isRequired,
    subjects: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    // user ko section rakhna parne xa hai  yo case ma teacher haru hun user
  };
  componentDidMount() {
    this.props.getSubjects();
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleFileChange = (e) =>
    this.setState({
      upload: e.target.files[0],
    });

  onSubmit = (e) => {
    e.preventDefault();
    const { title, upload, due_date, subject, user } = this.state;
    // const assign = { title, upload, due_date, subject, user };
    // this.props.addAssigns(assign);

    var form_data = new FormData();
    form_data.append("title", title);
    form_data.append("upload", upload);
    form_data.append("due_date", due_date);
    form_data.append("subject", subject);
    form_data.append("user", user);

    this.props.addAssigns(form_data);
  };

  render() {
    const { title, due_date, subject } = this.state;
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
            <label>Upload</label>
            <input
              className="form-control"
              type="file"
              name="upload"
              onChange={this.handleFileChange}
              // value={file}
            />
          </div>
          {/* <div className="form-group">
            <label>Created Date</label>
            <input
              className="form-control"
              type="date"
              name="created_at"
              onChange={this.onChange}
              value={created_at}
            />
          </div> */}
          <div className="form-group">
            <label>Due Date</label>
            <input
              className="form-control"
              type="date"
              name="due_date"
              onChange={this.onChange}
              value={due_date}
            />
          </div>
          <div>
            <label>Subject:</label>
            <select name="subject" value={subject} onChange={this.onChange}>
              {this.props.subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
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
  subjects: state.subjects.subjects,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addAssigns,
  getSubjects,
  addSubjects,
})(Form);
