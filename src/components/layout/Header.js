import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

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
    console.log("isAuthenticated:", isAuthenticated);
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

            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.props.logout}
              as={Link}
              to="/logout"
            />
            <p>{user ? `Welcome ${user.username}` : ""}</p>
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

export default connect(mapStateToProps, { logout })(Header);
