import React, { Component, Fragment } from "react";
import { Form, Button } from "semantic-ui-react";

export default class NoticeForm extends Component {
  render() {
    return (
      <Fragment>
        <h2>Post a notice here</h2>
        <Form reply>
          <Form.TextArea />
          <Button
            content="Post Notice"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Fragment>
    );
  }
}
