import React, { Fragment, Component } from "react";
import { Button, Form, Dropdown,  } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFaculty, getSection, getSubject, addClassroom } from "../../actions/Classroom";



class ClassroomForm extends Component {
  state = {
    title: "",
    // creator: "",
    // faculty:'',
    // section:"",
    // subject:"",
    // passcode:""
  };

  static propTypes = {
    // creator: PropTypes.array.isRequired,
    faculty: PropTypes.array.isRequired,
    section: PropTypes.array.isRequired,
    subject: PropTypes.array.isRequired,
    addClassroom: PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.getFaculty();
    this.props.getSection();
    this.props.getSubject();
    
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleDropdownChange = (e, data) => this.setState({
    [data.name]:data.value,
  });

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // const { title, faculty } = this.state;
    const { title, faculty, section, subject, passcode } = this.state;


    var form_data = new FormData();
    form_data.append("title", title);
    // form_data.append("creator", creator);
    form_data.append("faculty", faculty);
    form_data.append("section", section);
    form_data.append("subject", subject);
    form_data.append("passcode", passcode);


    this.props.addClassroom(form_data);

  };

  render() {

    const { title, } = this.state;

    
    // let userDropdowns = this.props.users;
    let facultyDropdowns = this.props.faculty;
    let sectionDropdowns = this.props.section;
    let subjectDropdowns = this.props.subject;
    // console.log(this.props.faculty)
    // console.log("logs::",facultyDropdowns)
    // console.log(sectionDropdowns)
    
    // let optionUsers = sectionDropdowns.map((userdropdown) => {
    //   return { key: userdropdown.id, value: userdropdown.id, text: userdropdown.first_name };
    // });

    let optionFaculty = facultyDropdowns.map((facultydropdown) => {
      return { key: facultydropdown.id, value:facultydropdown.id, text: facultydropdown.name };
    });

    

    let optionSection = sectionDropdowns.map((sectiondropdown) => {
      return { key: sectiondropdown.id, value:sectiondropdown.id, text: sectiondropdown.section };
    });

    console.log('section::',optionSection)

    let optionSubject = subjectDropdowns.map((subjectdropdown) => {
      return { key: subjectdropdown.id, value:subjectdropdown.id, text: subjectdropdown.name };
    });

    

    return (
      <Fragment>
        <h2> Add Classroom</h2>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Classroom Title" name = 'title' value = {title} onChange={this.onChange} />
          </Form.Field>
          
          {/* <Dropdown
              placeholder="Choose User"
              fluid
              selection
              options= { optionUsers }
              onChange={this.handleDropdownChange}
              name='user'
          /> */}
          <Form.Field label='Faculty' />
          <Dropdown
              placeholder="Choose Faculty"
              fluid
              selection
              options= { optionFaculty }
              onChange={this.handleDropdownChange}
              name='faculty'
          />
          <br/>

          <Form.Field label='Section' />
          <Dropdown
              label='Section'
              placeholder="Choose Section"
              fluid
              selection
              options= {optionSection}
              onChange={this.handleDropdownChange}
              name='section'
          />
          <br/>
          <Form.Field label='Subject' />
          <Dropdown
              label='Subject'
              placeholder="Choose Subject"
              fluid
              selection
              options= {optionSubject}
              onChange={this.handleDropdownChange}
              name='subject'
          />
        
          <br />
          <Button type="submit">Submit</Button>

        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({

  // users: state.users.users,
  faculty: state.faculty.faculty,
  section: state.section.section,
  subject: state.subject.subject
});


export default connect(mapStateToProps, { getFaculty, getSection, getSubject, addClassroom })(ClassroomForm);

// 
