import React, { Fragment, Component } from "react";
import { Button, Form, Dropdown,  } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getClassrooms, addClassroom } from "../../actions/Classroom";



class ClassroomForm extends Component {
  state = {
    title: "",
    creator: "",
    faculty:"",
    section:"",
    subject:"",
    passcode:""
  };

  static propTypes = {
    creators: PropTypes.array.isRequired,
    faculty: PropTypes.array.isRequired,
    section: PropTypes.array.isRequired,
    // subject: PropTypes.array.isRequired,
    addClassroom: PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.getClassrooms();
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleDropdownChange = (e, data) => this.setState({
    [data.name]:data.value,
  });

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { title, creator, faculty, section, subject, passcode } = this.state;

    var form_data = new FormData();
    form_data.append("title", title);
    form_data.append("creator", creator);
    form_data.append("faculty", faculty);
    form_data.append("section", section);
    form_data.append("subject", subject);
    form_data.append("passcode", passcode);


    this.props.addClassroom(form_data);

  };

  render() {

    const { title, } = this.state;

    let userDropdowns = this.props.classrooms;
    // let facultyDropdowns = this.props.classrooms;
    // let sectionDropdowns = this.props.classrooms;
    // let subjectDropdowns = this.props.classrooms;
    
    let optionUsers = userDropdowns.map((userdropdown) => {
      return { key: userdropdown.id, value:userdropdown.id, text:userdropdown.user };
    });
    // let optionFaculty = facultyDropdowns.map((facultydropdown) => {
    //   return { key: facultydropdown.id, value:facultydropdown.id, text: facultydropdown.user };
    // });
    // let optionSection = sectionDropdowns.map((sectiondropdown) => {
    //   return { key: sectiondropdown.id, value:sectiondropdown.id, text: sectiondropdown.user };
    // });
    // let optionSubject = subjectDropdowns.map((subjectdropdown) => {
    //   return { key: subjectdropdown.id, value:subjectdropdown.id, text: subjectdropdown.user };
    // });

    

    return (
      
      <Fragment>
        <p>hello</p>
        <h2> Add Classroom</h2>
         <Form onSubmit={this.onFormSubmit}> 
          <Form.Field>
              <label>Title</label>
              <input placeholder="Classroom Title" name = 'title' value = {title} onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
                    <Dropdown>
                      placeholder="Choose User"
                      fluid
                      selection
                      options= {optionUsers}
                      onChange={this.handleDropdownChange}
                      name='user'
                    </Dropdown>
          </Form.Field>
         
          {/* <Form.Field>
          <Dropdown>
                      placeholder="Choose Faculty"
                      fluid
                      selection
                      options= {optionFaculty}
                      onChange={this.handleDropdownChange}
                      name='faculty'
                    </Dropdown>
          </Form.Field>

          <Form.Field>
          <Dropdown>
                      placeholder="Choose Section"
                      fluid
                      selection
                      options= {optionSection}
                      onChange={this.handleDropdownChange}
                      name='section'
                    </Dropdown>
          </Form.Field>
          <Form.Field>
          <Dropdown>
                      placeholder="Choose Subject"
                      fluid
                      selection
                      options= {optionSubject}
                      onChange={this.handleDropdownChange}
                      name='subject'
                    </Dropdown>
          </Form.Field> */}
          
          <hr />
          <Button type="submit">Submit</Button>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({

  users: state.classrooms.classrooms,
  faculty: state.classrooms.classrooms,
  section: state.classrooms.classrooms,
  subject: state.classrooms.classrooms,
});


export default connect(mapStateToProps, {getClassrooms, addClassroom })(ClassroomForm);
