// import React, { Fragment, Component } from "react";
// import { Button, Form, Dropdown, Checkbox  } from "semantic-ui-react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getSubject, getClassrooms } from "../../actions/Classroom";
// import {addAttendance} from '../../actions/Attendance'



// class AttendanceForm extends Component {
//   state = {
    
//     // creator: "",
//     // faculty:'',
//     // section:"",
//     // subject:"",
//     // passcode:""
//   };

//   static propTypes = {
//     // user: PropTypes.array.isRequired,
//     classrooms: PropTypes.array.isRequired,
//     subject: PropTypes.array.isRequired,
//     addAttendance: PropTypes.func.isRequired,
//   };

//   componentDidMount(){
//     this.props.getClassrooms();
//     this.props.getSubject();
//     // this.props.getMembers();
    
//   }

//   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//   handleDropdownChange = (e, data) => this.setState({
//     [data.name]:data.value,
//   });

//   onFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     // const { title, faculty } = this.state;
//     const { classroom, subject, ispresent } = this.state;


//     var form_data = new FormData();
//     form_data.append("classroom", classroom);
//     // form_data.append("user", user);
//     form_data.append("subject", subject);
//     form_data.append("ispresent", ispresent);


//     this.props.addAttendance(form_data);

//   };

//   render() {

//     const { ispresent, } = this.state;

    
//     // let userDropdowns = this.props.users;
//     let subjectDropdowns = this.props.subject;
//     // let classroomDropdowns = this.props.classrooms;

//     // console.log(this.props.faculty)
//     // console.log("logs::",facultyDropdowns)
//     // console.log(sectionDropdowns)
    
//     // let optionUsers = sectionDropdowns.map((userdropdown) => {
//     //   return { key: userdropdown.id, value: userdropdown.id, text: userdropdown.first_name };
//     // });

//     // let optionClassroom = classroomDropdowns.map((classroomdropdown) => {
//     //   return { key: classroomdropdown.id, value:classroomdropdown.id, text: classroomdropdown.name };
//     // });

    
//     let optionSubject = subjectDropdowns.map((subjectdropdown) => {
//       return { key: subjectdropdown.id, value:subjectdropdown.id, text: subjectdropdown.name };
//     });

    

//     return (
//       <Fragment>
//         <h2> Members</h2>
//         <Form onSubmit={this.onFormSubmit}>
          
          
//           {/* <Dropdown
//               placeholder="Choose User"
//               fluid
//               selection
//               options= { optionUsers }
//               onChange={this.handleDropdownChange}
//               name='user'
//           /> */}
//           <Form.Field label='Classroom' />
//           <Dropdown
//               placeholder="Choose Classroom"
//               fluid
//               selection
//               // options= { optionClassroom }
//               onChange={this.handleDropdownChange}
//               name='faculty'
//           />
//           <br/>

//           <Form.Field label='Subject' />
//           <Dropdown
//               label='Subject'
//               placeholder="Choose Subject"
//               fluid
//               selection
//               options= {optionSubject}
//               onChange={this.handleDropdownChange}
//               name='subject'
//           />
//           <br />
//           <Checkbox 
//                 label='Is Present'
//                 name='iscreator'
//                 value={ispresent}
//             />
//           <br />


//           <Button type="submit">Submit</Button>

//         </Form>
//       </Fragment>
//     );
//   }
// }

// const mapStateToProps = (state) => ({

//   // users: state.users.users,
//   classmembers: state.classrooms.classrooms,
//   subject: state.subject.subject
// });


// export default connect(mapStateToProps, { getClassrooms, getSubject, addAttendance })(AttendanceForm);

// // 
