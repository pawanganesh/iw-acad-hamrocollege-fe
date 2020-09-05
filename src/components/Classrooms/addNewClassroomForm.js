import React, { Component, Fragment } from "react";
import { Form, Button, Modal, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSection, getFaculty, getSubject } from "../../actions/college";
import { addClassroom } from "../../actions/classroom";

class AddNewClassroomForm extends Component {
  state = {
    title: "",
    creator_id: this.props.auth.user.id,
    faculty: "",
    section: "",
    subject: [],
  };

  static propTypes = {
    sections: PropTypes.array.isRequired,
    subjects: PropTypes.array.isRequired,
    faculties: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    addClassroom: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getSection();
    this.props.getFaculty();
    this.props.getSubject();
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleDropdownChange = (e, data) =>
    this.setState({
      [data.name]: data.value,
    });

  multipleDropdownChange = (e, data) =>
    this.setState({
      [data.name]: data.value,
    });

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { title, creator_id, faculty, section, subject } = this.state;
    // const newClassroom = {
    //   title,
    //   creator,
    //   faculty,
    //   section,
    //   subject,
    // };
    var form_data = new FormData();
    form_data.append("title", title);
    form_data.append("subject", subject);
    form_data.append("creator", creator_id);
    form_data.append("faculty", faculty);
    form_data.append("section", section);

    this.props.addClassroom(form_data);
  };

  render() {
    const { title } = this.state;

    let facultyList = this.props.faculties;
    let optionFaculty = facultyList.map((faculty) => {
      return { key: faculty.id, value: faculty.id, text: faculty.name };
    });
    let sectionList = this.props.sections;
    let optionSection = sectionList.map((section) => {
      return { key: section.id, value: section.id, text: section.section };
    });
    let subjectList = this.props.subjects;
    let optionSubject = subjectList.map((subject) => {
      return { key: subject.id, value: subject.id, text: subject.name };
    });

    return (
      <Fragment>
        <h2>Add new classroom</h2>
        <Modal
          trigger={
            <Form>
              <Form.TextArea placeholder="Add new classroom" />
            </Form>
          }
        >
          <Modal.Header>Add new classroom</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.onFormSubmit}>
              <Form.Input
                type="text"
                label="Title"
                placeholder="Title"
                name="title"
                value={title}
                onChange={this.onChange}
              ></Form.Input>

              <Dropdown
                placeholder="Select faculty"
                fluid
                selection
                options={optionFaculty}
                onChange={this.handleDropdownChange}
                name="faculty"
              />
              <br />

              <Dropdown
                placeholder="Select section"
                fluid
                selection
                options={optionSection}
                onChange={this.handleDropdownChange}
                name="section"
              />

              <br />
              <Dropdown
                placeholder="Subject"
                fluid
                multiple
                selection
                options={optionSubject}
                onChange={this.handleDropdownChange}
                name="subject"
              />
              <br />

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
  sections: state.college.sections,
  faculties: state.college.faculty,
  subjects: state.college.subjects,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getSection,
  getFaculty,
  getSubject,
  addClassroom,
})(AddNewClassroomForm);
