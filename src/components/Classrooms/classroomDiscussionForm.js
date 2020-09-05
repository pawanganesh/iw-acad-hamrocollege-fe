import React, { Component, Fragment } from "react";
import { Form, Button, Modal, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategory } from "../../actions/notices";
import { addNotice } from "../../actions/notices";

class NoticeForm extends Component {
  state = {
    text: "",
    category: "",
    author: this.props.auth.user.id,
    likes: [this.props.auth.user.id],
    file: "",
  };

  static propTypes = {
    categories: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    addNotice: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategory();
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleDropdownChange = (e, data) =>
    this.setState({
      [data.name]: data.value,
    });

  handleFileChange = (e) =>
    this.setState({
      file: e.target.files[0],
    });

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { text, file, category, author, likes } = this.state;

    var form_data = new FormData();
    form_data.append("text", text);
    form_data.append("file", file);
    form_data.append("category", category);
    form_data.append("author", author);
    form_data.append("likes", likes);

    this.props.addNotice(form_data);
  };
  render() {
    const { text } = this.state;

    let dropdowns = this.props.categories;
    let optionCategories = dropdowns.map((dropdown) => {
      return { key: dropdown.id, value: dropdown.id, text: dropdown.category };
    });

    return (
      <Fragment>
        <h2>Post a new notice</h2>
        <Modal
          trigger={
            <Form>
              <Form.TextArea placeholder="Post a new notice" />
            </Form>
          }
        >
          <Modal.Header>Add a New Notice</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.onFormSubmit}>
              {/* <Form.Input type="text" name="author" value={author}></Form.Input> */}

              <Dropdown
                placeholder="Select Category"
                fluid
                selection
                options={optionCategories}
                onChange={this.handleDropdownChange}
                name="category"
                // value={}
              />

              <br />

              <Form.TextArea
                label="Notice "
                placeholder="Write notice here"
                name="text"
                value={text}
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

              {/* <Form.Input
                type="text"
                name="likes"
                value={likes}
                onChange={this.onChange}
              ></Form.Input> */}

              <Modal.Actions>
                <Button content="Submit" type="submit" />
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCategory, addNotice })(NoticeForm);
