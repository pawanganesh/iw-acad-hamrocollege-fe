// import React, { Fragment } from "react";
// import { Button, Form, Dropdown, Checkbox } from "semantic-ui-react";

// const ClubMemberForm = () => (
//     <Fragment>
//     <Form>
//         <Form.Field>
//             <label>Club</label>
//             <Dropdown placeholder="Choose Classroom" />
//         </Form.Field>
//         <Form.Field>
//             <label>User</label>
//             <Dropdown placeholder="Choose User" />
//         </Form.Field>
//         <Form.Field>
//             <Checkbox label= 'I am a creator' />
//         </Form.Field>
//         <hr />
//         <Button type="submit">Add Member</Button>
//     </Form>
//     </Fragment>
// );

// export default ClubMemberForm;



import React, { Fragment, Component } from "react";
import { Button, Form, Dropdown, Checkbox  } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getClubs,  } from "../../actions/Clubs";



class MemberForm extends Component {
    state = {
        iscreator: ''
    }
  

  static propTypes = {
    // creator: PropTypes.array.isRequired,
    club: PropTypes.array.isRequired,
    
    addClubMember: PropTypes.func.isRequired,
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
    const { club, iscreator } = this.state;


    var form_data = new FormData();
    form_data.append("club", club);
    // form_data.append("user", user);
    form_data.append("iscreator", iscreator);
    

    this.props.addClubMember(form_data);

  };

  render() {

    const { iscreator, } = this.state;

    
    // let userDropdowns = this.props.users;
    let clubDropdowns = this.props.clubs;
    
    
    console.log("logs::",clubDropdowns)
    // console.log(sectionDropdowns)
    
    // let optionUsers = sectionDropdowns.map((userdropdown) => {
    //   return { key: userdropdown.id, value: userdropdown.id, text: userdropdown.first_name };
    // });

    let optionClub = clubDropdowns.map((clubDropdown) => {
      return { key: clubDropdown.id, value:clubDropdown.id, text: clubDropdown.title };
    });


    console.log('club::',optionClub)

   

    

    return (
      <Fragment>
        <h2> Add Club Member</h2>
        <Form onSubmit={this.onFormSubmit}>
          
          <Form.Field label='Club' />
          <Dropdown
              placeholder="Choose Your Club"
              fluid
              selection
              options= { optionClub }
              onChange={this.handleDropdownChange}
              name='club'
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
                label='I am a creator'
                name='iscreator'
                value={iscreator}
            />
            
          <br />
          <Button type="submit">ADD Member</Button>

        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({

  // users: state.users.users,
  clubs: state.clubs.clubs,
  
});


export default connect(mapStateToProps, { getClubs })(MemberForm);

// 
