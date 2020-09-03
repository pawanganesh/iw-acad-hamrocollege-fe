import React, { Component, Fragment } from 'react';
import { Menu, } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class ClubMenu extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Fragment>
      <Menu tabular>
        <NavLink to="/club">
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          icon='home'
        />
        </NavLink>
        <NavLink to="/club/add-new-club">
        <Menu.Item
          name='ADD Club'
          active={activeItem === 'ADD Club'}
          onClick={this.handleItemClick}
          icon='add'
        />
        </NavLink>
        <NavLink to="/club/add-new-member">
        <Menu.Item
          name='ADD Member'
          active={activeItem === 'ADD Member'}
          onClick={this.handleItemClick}
          icon='add'
        />
        </NavLink>
        <NavLink to="/club/add-annoucement">
        <Menu.Item
          name='Announcement'
          active={activeItem === 'Announcement'}
          onClick={this.handleItemClick}
          icon='notice'
        />
        </NavLink>
      </Menu>
      </Fragment>
    )
  }
}

export default ClubMenu;
