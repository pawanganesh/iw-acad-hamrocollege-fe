import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { getNotices, deleteNotice } from "../../actions/notices";
import { getUserProfile } from "../../actions/auth";

import { getClassroomDiscussion } from "../../actions/classroom";

import { Feed, Icon, Header, Segment } from "semantic-ui-react";
// import NoticeForm from "./NoticeForm";
import ClassroomDiscussionForm from "../Classrooms/classroomDiscussionForm";

class ClassroomDiscussion extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    classroomDiscussions: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getClassroomDiscussion();
  }

  render() {
    const { user } = this.props.auth;
    //  console.log("this.props.notices", this.props.notices);
    // console.log("this.props.notices.results", this.props.notices.results);
    // console.log(results);
    // const { results } = this.props.notices;

    // console.log(this.props.notices);

    return (
      <Fragment>
        {/* <Container text> */}
        {user.is_teacher ? <ClassroomDiscussionForm /> : null}

        {/* style={{ marginTop: "7em" }} */}
        <Header>Classroom Discussion</Header>
        {this.props.classroomDiscussions.map((discussion) => (
          <Segment key={discussion.id}>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary>
                    <a
                      href={"#/userprofile/" + discussion.creator_id}
                      onClick={this.props.getUserProfile.bind(
                        this,
                        discussion.creator_id
                      )}
                    >
                      {discussion.creator_id}
                    </a>{" "}
                    has posted notice
                    <Feed.Date>
                      Date Published: {discussion.created_at}
                    </Feed.Date>
                    <Feed.Date>
                      Date Updated: {discussion.modified_at}
                    </Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>{discussion.text}</Feed.Extra>
                  {/* <p>{}</p> */}
                  {discussion.file ? (
                    <Feed.Extra images>
                      <Feed.Extra>{discussion.file}</Feed.Extra>
                    </Feed.Extra>
                  ) : (
                    ""
                  )}
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />
                      {/* {notice.likes} */}
                    </Feed.Like>
                  </Feed.Meta>
                  {/* <Button
                    onClick={this.props.deleteNotice.bind(this, notice.id)}
                    content="Delete Notice"
                    labelPosition="left"
                    icon="delete"
                    primary
                  /> */}
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Segment>
        ))}
        {/* </Container> */}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  // console.log(state)
  auth: state.auth,
  classroomDiscussions: state.classrooms.classroomDiscussions,
});

export default connect(mapStateToProps, {
  getClassroomDiscussion,
  // deleteNotice,
  getUserProfile,
})(ClassroomDiscussion);
