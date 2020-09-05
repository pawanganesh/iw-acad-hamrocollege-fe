import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Modal, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { getUserProfile } from "../../actions/auth";

// class Header extends Component {
//   render() {
//     return (
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-toggle="collapse"
//     data-target="#navbarTogglerDemo01"
//     aria-controls="navbarTogglerDemo01"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//     <Link to="/semester">
//       <a  className="navbar-brand">
//         College Section
//       </a>
//     </Link>
//     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//       <li className="nav-item active">
//           <Link to="/semester">
//             <a className="nav-link" >Semester  <span className="sr-only">(current)</span></a>
//           </Link>
//       </li>
//       <li className="nav-item active">
//           <Link to="/faculty">
//             <a className="nav-link" >Faculty  <span className="sr-only">(current)</span></a>
//           </Link>
//       </li>
//       <li className="nav-item active">
//           <Link to="/subject">
//             <a className="nav-link" >Subject  <span className="sr-only">(current)</span></a>
//           </Link>
//       </li>
//       <li className="nav-item active">
//         <Link to="/home">
//           <a href="/" className="nav-link">
//             Assignment <span className="sr-only">(current)</span>
//           </a>
//         </Link>
//       </li>
//       <li className="nav-item active">
//         <Link to="/submission">
//           <a href="/" className="nav-link">
//             Submission <span className="sr-only">(current)</span>
//           </a>
//         </Link>
//       </li>
//     </ul>
//   </div>
// </nav>

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
            <Menu.Item
              name="classroom"
              active={activeItem === "classroom"}
              onClick={this.handleItemClick}
              as={Link}
              to="/classroom"
            />
            <Menu.Item
              name="admin"
              active={activeItem === "admin"}
              onClick={this.handleItemClick}
              as={Link}
              to="/admin"
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
