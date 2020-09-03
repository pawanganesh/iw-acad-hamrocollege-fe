import React, { Fragment, Component } from "react";
import { Button, Form, Dropdown,  } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { getUsers,} from "../../actions/Classroom";



class ClubForm extends Component {
  state = {
    name: "",
    // creator: "",
    
  };

  static propTypes = {
    // creator: PropTypes.array.isRequired,
    
    addClub: PropTypes.func.isRequired,
  };

  componentDidMount(){
    // this.props.getUsers();
    
    
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleDropdownChange = (e, data) => this.setState({
    [data.name]:data.value,
  });

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, } = this.state;
    


    var form_data = new FormData();
    form_data.append("name", name);
    // form_data.append("creator", creator);
    

    this.props.addClub(form_data);

  };

  render() {

    const { name, } = this.state;

    
    // let userDropdowns = this.props.users;
    
    
    // let optionUsers = sectionDropdowns.map((userdropdown) => {
    //   return { key: userdropdown.id, value: userdropdown.id, text: userdropdown.first_name };
    // });

    
    

    return (
      <Fragment>
        <h2> Create New Club</h2>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Club Name" name = 'name' value = {name} onChange={this.onChange} />
          </Form.Field>
          
          <Form.Field label='Creator' />
          <Dropdown
              placeholder="Choose User"
              fluid
              selection
            //   options= { optionUsers }
              onChange={this.handleDropdownChange}
              name='user'
          />

          <br />
          <Button type="submit">Create</Button>

        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({

  // users: state.users.users,
  
});


export default connect(mapStateToProps, {  })(ClubForm);
// getUsers 

