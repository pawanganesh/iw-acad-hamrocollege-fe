import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  };
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Password do not match" });
      
    } else {
      const newUser = {
        first_name,
        last_name,
        email,
        password,
      };
      this.props.register(newUser);
      this.props.createMessage({ Registersuccess: "Register Successfull" })
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { first_name, last_name, email, password, password2 } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First name"
              name="first_name"
              placeholder="First name"
              onChange={this.onChange}
              value={first_name}
            />
            <Form.Input
              fluid
              label="Last name"
              name="last_name"
              placeholder="Last name"
              onChange={this.onChange}
              value={last_name}
            />
          </Form.Group>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={this.onChange}
              name="email"
              value={email}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              onChange={this.onChange}
              name="password"
              value={password}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              placeholder="Confirm Password"
              onChange={this.onChange}
              name="password2"
              value={password2}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
