import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { passwordReset } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import DjangoCSRFToken from "django-react-csrftoken";

import PasswordResetEmailSent from "./PasswordResetEmailSent";

class PasswordResetForm extends Component {
  state = {
    email: "",
  };
  static propTypes = {
    passwordReset: PropTypes.func.isRequired,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (!email) {
      this.props.createMessage({ emailError: "Please enter email" });
    } else {
      const Email = {
        email,
      };
      this.props.passwordReset(Email);
    }
    // <PasswordResetEmailSent />;
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={this.onChange}
              name="email"
              value={email}
            />
          </Form.Field>
          <Button type="submit">Send password reset link</Button>
          <p>
            Remember password? <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
// });

export default connect(null, { passwordReset })(PasswordResetForm);
