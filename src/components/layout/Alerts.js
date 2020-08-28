import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import Proptypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: Proptypes.object.isRequired,
    message: Proptypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.first_name)
        alert.error(`First Name: ${error.msg.first_name.join()}`);
      if (error.msg.last_name)
        alert.error(`Last Name: ${error.msg.last_name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.password)
        alert.error(`Password: ${error.msg.password.join()}`);
    }
    if (message !== prevProps.message) {
      if (message.deleteNotice) alert.success(message.deleteNotice);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
