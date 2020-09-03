// import React, { Fragment } from "react";
// import { Button, Form, Dropdown } from "semantic-ui-react";

// const AnnouncementForm = () => (
//     <Fragment>
//     <Form>
//         <Form.Field>
//             <label>Club</label>
//             <Dropdown placeholder="Choose Classroom" />
//         </Form.Field>
//         <Form.Field>
//             <label>Announce By</label>
//             <Dropdown placeholder="Choose User" />
//         </Form.Field>
//         <Form.Field>
//             <label>Message</label>
//             <input placeholder="Your Message" />
//         </Form.Field>
//         {/* <Form.Field>
//             <input  type= "file" />
//         </Form.Field> */}
//         <hr />
//         <Button type="submit">Add Announcement</Button>
//     </Form>
//     </Fragment>
// );

// export default AnnouncementForm;



import React, { Fragment, Component } from "react";
import { Button, Form, Dropdown, } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getClubs,  } from "../../actions/Clubs";



class AnnouncementForm extends Component {
    state = {
        message: ''
    }
  

  static propTypes = {
    // user: PropTypes.array.isRequired,
    club: PropTypes.array.isRequired,
    
    addAnnouncement: PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.getClubs();
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
    const { club, message, file } = this.state;


    var form_data = new FormData();
    form_data.append("club", club);
    // form_data.append("user", user);
    form_data.append("file", file);
    form_data.append("message", message);
    

    this.props.addAnnouncement(form_data);

  };

  render() {

    const { message, } = this.state;

    
    // let userDropdowns = this.props.users;
    let clubDropdowns = this.props.clubs;
    
    
    console.log("logs::",clubDropdowns)
    // console.log(sectionDropdowns)
    
    // let optionUsers = sectionDropdowns.map((userdropdown) => {
    //   return { key: userdropdown.id, value: userdropdown.id, text: userdropdown.first_name };
    // });

    let optionClub = clubDropdowns.map((clubDropdown) => {
      return { key: clubDropdown.id, value:clubDropdown.id, text: clubDropdown.name };
    });


    console.log('club::',optionClub)

   

    

    return (
      <Fragment>
        <h2> Your Comment </h2>
        <Form onSubmit={this.onFormSubmit}>
          
          <Form.Field label='Club' />
          <Dropdown
              placeholder="Choose Your Club"
              fluid
              selection
              options= { optionClub }
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
                label="Message "
                placeholder="Write Message here"
                name="message"
                value={message}
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
  clubs: state.clubs.clubs,
  
});


export default connect(mapStateToProps, { getClubs, })(AnnouncementForm);
