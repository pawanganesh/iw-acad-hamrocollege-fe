import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addAssigns } from "../../actions/assigns";
import { getSubjects, addSubjects} from '../../actions/subjects'
// yah ni import garnu parne hunxa parne xa 

class Form extends Component {
  state = {
    Title: "",
    Upload: "",
    Sdate: "",
    Ddate: "",
    Subject: "",
    User: "",  
    // yah mathi ni add garnu parne huna sakxa (User:"") kei details haru 

  };

  static propTypes = {
    addAssign: PropTypes.func.isRequired,
    subjects: PropTypes.array.isRequired,
    // user ko section rakhna parne xa hai  yo case ma teacher haru hun user 
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleFileChange = (e) =>
    this.setState({
      upload: e.target.files[0]
    });

  onSubmit = (e) => {
    e.preventDefault();
    const { title, upload, due_date, created_at, subject, user} = this.state;
    const assign = { title, upload, due_date, created_at, subject, user };
    this.props.addAssigns(assign);
    // var form_data = new FormData();
    // form_data.append("title", title);
    // form_data.append("upload", upload);
    // form_data.append("due_date", due_date);
    // form_data.append("created_at", created_at);
    // form_data.append("subject", subject);
    // form_data.append("user", user);
    

    // this.props.addAssigns(form_data);
  };

  render() {
    const { title, due_date, created_at, subject, user} = this.state;
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
          <div className="form-group">
            <label>Created Date</label>
            <input
              className="form-control"
              type="date"
              name="created_at"
              onChange={this.onChange}
              value={created_at}
            />
          </div>
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
            <label for="subjects">Subject:</label>                           
              <select  name="subject" value={subject} onChange={this.onChange} >
                {this.props.subjects.map((subject) =>(
                  <option>{subject.id}</option> 
                    ))}                               
              </select>                        
          </div>
          {/* users haruko lai dropdown ho yeslai initiale garnu parne xa maile muni banaisake just uncomment gardinus */}
          {/* <div>
            <label for="users">Teacher:</label>                           
              <select  name="user" value={user} onChange={this.onChange} >
                {this.props.users.map((user) =>(
                  <option >{user.id}</option> 
                    ))}                               
              </select>                        
          </div>           */}          
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
  // yah ni users harulai initialize garna parne xa 
});

export default connect(mapStateToProps, { addAssigns, getSubjects, addSubjects })(Form);
