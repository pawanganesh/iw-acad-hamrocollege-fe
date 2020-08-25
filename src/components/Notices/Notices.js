import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNotices, deleteNotice } from "../../actions/notices";
import { Feed, Icon, Header, Container, Button } from "semantic-ui-react";
import NoticeForm from "./NoticeForm";

class Notices extends Component {
  static propTypes = {
    notices: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getNotices();
  }

  render() {
    return (
      <Fragment>
        <Container text>
          <NoticeForm />

          {/* style={{ marginTop: "7em" }} */}
          <Header as="h1">Semantic UI React Fixed Template</Header>

          <Feed>
            {this.props.notices.map((notice) => (
              <Feed.Event key={notice.id}>
                <Feed.Content>
                  <Feed.Summary>
                    <a href="/">{notice.author}</a> has posted notice
                    <Feed.Date>
                      Date Published: {notice.date_published}
                    </Feed.Date>
                    <Feed.Date>Date Updated: {notice.date_updated}</Feed.Date>
                  </Feed.Summary>
                  {/* <Feed.Extra text>{notice.text}</Feed.Extra> */}
                  <p>{notice.text}</p>
                  <Feed.Extra text>{notice.file}</Feed.Extra>

                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />
                      {notice.likes}
                    </Feed.Like>
                  </Feed.Meta>
                  <Button
                    onClick={this.props.deleteNotice.bind(this, notice.id)}
                    content="Delete Notice"
                    labelPosition="left"
                    icon="delete"
                    primary
                  />
                </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>
        </Container>
      </Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return { notices: state.notices.notices };
// };

const mapStateToProps = (state) => ({
  // console.log(state)
  notices: state.notices.notices,
});

// const mapDispatchToProps = (dispatch) => {
//   return { getNotices: () => dispatch(getNotices) };
// };

export default connect(mapStateToProps, { getNotices, deleteNotice })(Notices);
