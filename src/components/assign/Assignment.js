import React, { Component, Fragment } from "react";
import Form from "./Form";
import Assign from "./Assign";
import { connect } from "react-redux";

class Assignment extends Component {
  render() {
    return (
      <Fragment>
        {this.props.auth.user.is_teacher ? <Form /> : ""}
        <Assign />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Assignment);
