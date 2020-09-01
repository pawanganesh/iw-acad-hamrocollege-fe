import React, { Component } from "react";
import { Menu, Dropdown, Modal, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { getUserProfile } from "../../actions/auth";

class Header extends Component {
  state = {
    activeItem: "hamroCollege",
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div>
        {isAuthenticated ? (
          <Menu secondary>
            <Menu.Item
              name="hamroCollege"
              active={activeItem === "hamroCollege"}
              onClick={this.handleItemClick}
              as={Link}
              to="/"
            />

            <Dropdown
              trigger={
                <span>
                  <Image avatar src={user.profile} />
                  {user ? `${user.first_name} ${user.last_name} ` : ""}
                </span>
              }
              pointing
              className="link item"
            >
              <Dropdown.Menu>
                <Dropdown.Item
                  text="Profile"
                  as={Link}
                  to={`/userprofile/${user.username}`}
                  onClick={this.props.getUserProfile.bind(this, user.username)}
                />

                <Modal
                  trigger={<Dropdown.Item text="Logout" />}
                  header="Confirm Logout"
                  content="Are you sure you want to logout?"
                  actions={[
                    "No",
                    {
                      key: "yes",
                      content: "Yes",
                      positive: true,
                      onClick: this.props.logout,
                    },
                  ]}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        ) : (
          <Menu secondary>
            <Menu.Item
              name="hamroCollege"
              active={activeItem === "hamroCollege"}
              onClick={this.handleItemClick}
              as={Link}
              to="/"
            />
            <Menu.Item
              name="regiser"
              active={activeItem === "regiser"}
              onClick={this.handleItemClick}
              as={Link}
              to="/register"
            />
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
              as={Link}
              to="/login"
            />
          </Menu>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, getUserProfile })(Header);
