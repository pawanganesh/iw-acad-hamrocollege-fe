import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSubmissions } from "../../actions/submissions";
import { getAssigns, addAssigns } from "../../actions/assigns"; 
// yah ni import garnu parne hunxa parne xa 

class Submitform extends Component {
  state = {
    Upload: "",
    Submittedat: "",
    Assignment: "",
    User: "",
    // yah mathi ni add garnu parne huna sakxa (User:"") kei details haru 
  };

  static propTypes = {
    addSubmission: PropTypes.func.isRequired,
    assigns: PropTypes.array.isRequired,
    // user ko section rakhna parne xa hai  yo case ma students haru hun user 
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
  handleFileChange = (e) =>
    this.setState({
      upload: e.target.files[0]
    });

  onSubmit = (e) => {
    e.preventDefault();
    const { upload, submitted_at, assignment, user } = this.state;
    const submission = { upload, submitted_at, assignment, user };
    this.props.addSubmissions(submission);
    // var form_data = new FormData();
    // form_data.append("upload", upload);
    // form_data.append("submitted_at", submitted_at);
    // form_data.append("assignment", assignment);
    // form_data.append("user", user);
    

    // this.props.addSubmissions(form_data);
  };

  render() {
    const {submitted_at, assignment, user } = this.state;
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
          <div className="form-group">
            <label>Submitted Date</label>
            <input
              className="form-control"
              type="date"
              name="submitted_at"
              onChange={this.onChange}
              value={submitted_at}
            />
          </div>
          <div>
            <label for="assigns">Assignment:</label>                           
              <select  name="assignment" value={assignment} onChange={this.onChange} >
                {this.props.assigns.map((assignment) =>(
                  <option >{assignment.id}</option> 
                    ))}                               
              </select>                        
          </div>
          {/* users haruko lai dropdown ho yeslai initiale garnu parne xa maile muni banaisake just uncomment gardinus */}
          {/* <div>
            <label for="users">Student:</label>                           
              <select  name="user" value={user} onChange={this.onChange} >
                {this.props.users.map((user) =>(
                  <option >{user.id}</option> 
                    ))}                               
              </select>                        
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

const mapStateToProps = (state) => ({
    
  assigns: state.assigns.assigns,
  // yah ni users harulai initialize garna parne xa 
});

export default connect(mapStateToProps, { addSubmissions, getAssigns, addAssigns })(Submitform);
