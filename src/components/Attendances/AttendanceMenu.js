import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class AttendanceMenu extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <NavLink to="/attendance">
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          icon='home'
        />
        </NavLink>
        <NavLink to ="/">
        <Menu.Item
          name='View'
          active={activeItem === 'View'}
          onClick={this.handleItemClick}
          icon='view'
          
        />
        </NavLink>
      </Menu>
    )
  }
}

export default AttendanceMenu;
