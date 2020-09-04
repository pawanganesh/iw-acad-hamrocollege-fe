
import React, { Fragment, Component } from "react";
import { Button, Form, Dropdown, } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getClassrooms,  } from "../../actions/Classroom";



class DiscussionForm extends Component {
    state = {
        text: ''
    }
  

  static propTypes = {
    // user: PropTypes.array.isRequired,
    classroom: PropTypes.array.isRequired,
    
    addDiscussion: PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.getClassrooms();
    // this.props.getUsers();
    
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleDropdownChange = (e, data) => this.setState({
    [data.name]:data.value,
  });

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // const { title, faculty } = this.state;
    const { classroom, text, file } = this.state;


    var form_data = new FormData();
    form_data.append("classroom", classroom);
    // form_data.append("user", user);
    form_data.append("file", file);
    form_data.append("text", text);
    

    this.props.addDiscussion(form_data);

  };

  render() {

    const { text, } = this.state;

    
    // let userDropdowns = this.props.users;
    let classroomDropdowns = this.props.classrooms;
    
    
    console.log("logs::",classroomDropdowns)
    // console.log(sectionDropdowns)
    
    // let optionUsers = sectionDropdowns.map((userdropdown) => {
    //   return { key: userdropdown.id, value: userdropdown.id, text: userdropdown.first_name };
    // });

    let optionClassroom = classroomDropdowns.map((classroomDropdown) => {
      return { key: classroomDropdown.id, value:classroomDropdown.id, text: classroomDropdown.title };
    });


    console.log('classroom::',optionClassroom)

   

    

    return (
      <Fragment>
        <h2> Your Comment </h2>
        <Form onSubmit={this.onFormSubmit}>
          
          <Form.Field label='Classroom' />
          <Dropdown
              placeholder="Choose Your Classroom"
              fluid
              selection
              options= { optionClassroom }
              onChange={this.handleDropdownChange}
              name='faculty'
          />
          <br />
          <Form.Field label='User'/>
          <Dropdown
              placeholder="Choose User"
              fluid
              selection
            //   options= { optionUsers }
              onChange={this.handleDropdownChange}
              name='user'
          />
          <br />
          <Form.TextArea
                label="Comment "
                placeholder="Write comment here"
                name="text"
                value={text}
                onChange={this.onChange}
          />

          <Form.Input
                type="file"
                label="Upload File"
                placeholder="File"
                name="file"
                // value={file || ""}
                onChange={this.handleFileChange}
          ></Form.Input>

          <br />
          <Button type="submit">Post</Button>

        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({

  // users: state.users.users,
  classrooms: state.classrooms.classrooms,
  
});


export default connect(mapStateToProps, { getClassrooms, })(DiscussionForm);

// 

