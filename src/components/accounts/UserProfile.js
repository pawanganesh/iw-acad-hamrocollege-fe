import React, { Component, Fragment } from "react";
// import { getUserProfile } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container, Card, Image } from "semantic-ui-react";

class UserProfile extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { userprofile } = this.props;
    return (
      <Fragment>
        <Container text>
          <Card fluid>
            <Card.Content header={"Profile"} textAlign="center" />

            <Image
              className="ui wrapped"
              src={userprofile.profile}
              style={{
                // objectFit: "contain",
                height: "700px",
              }}
              alt="profile"
            />

            <Card.Content>
              <Card.Header>
                Name: {userprofile.first_name + " " + userprofile.last_name}
              </Card.Header>
              <Card.Meta>
                {/* <span className="date">Joined in 2015</span> */}
                <span>{userprofile.email}</span>
              </Card.Meta>
              <Card.Description>
                <p>Username: {userprofile.username}</p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {/* <a>
                <Icon name="user" />
                22 Friends
              </a> */}
            </Card.Content>
          </Card>
          {/* </Segment> */}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  userprofile: state.userprofile.userprofile,
  auth: state.auth,
});

export default connect(mapStateToProps)(UserProfile);
