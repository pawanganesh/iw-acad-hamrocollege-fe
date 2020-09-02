import React, { Fragment, Component } from "react";
import { Button, Form, Dropdown, Checkbox  } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getClassrooms,  } from "../../actions/Classroom";



class MemberForm extends Component {
    state = {
        iscreator: ''
    }
  

  static propTypes = {
    // creator: PropTypes.array.isRequired,
    classroom: PropTypes.array.isRequired,
    
    addMember: PropTypes.func.isRequired,
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
    const { classroom, iscreator } = this.state;


    var form_data = new FormData();
    form_data.append("classroom", classroom);
    // form_data.append("user", user);
    form_data.append("iscreator", iscreator);
    

    this.props.addMember(form_data);

  };

  render() {

    const { iscreator, } = this.state;

    
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
        <h2> Add Member</h2>
        <Form onSubmit={this.onFormSubmit}>
          
          <Form.Field label='Classroom' />
          <Dropdown
              placeholder="Choose Faculty"
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
          <Checkbox 
                label='Make my profile visible'
                name='iscreator'
                value={iscreator}
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
  classrooms: state.classrooms.classrooms,
  
});


export default connect(mapStateToProps, { getClassrooms })(MemberForm);

// 
