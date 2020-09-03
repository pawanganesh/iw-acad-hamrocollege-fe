import React, { Component, Fragment } from 'react'
import { Menu } from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';


class ClassroomMenu extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Fragment>
        <Menu tabular>
          <NavLink to="/classroom">
            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
              icon='home'
            />
          </NavLink>
          <NavLink to="/classroom/add-classroom">
            <Menu.Item
              name='ADD Classroom'
              active={activeItem === 'ADD Classroom'}
              onClick={this.handleItemClick}
              icon='add circle'
            />
          </NavLink>
          <NavLink to="/classroom/add-member">
            <Menu.Item
              name='ADD Member'
              active={activeItem === 'ADD Member'}
              onClick={this.handleItemClick}
              icon='add circle'
            />
          </NavLink>
          <NavLink to="/classroom/forum">
            <Menu.Item
              name='Discussion Forum'
              active={activeItem === 'Discussion Forum'}
              onClick={this.handleItemClick}
              icon='group'
            />
            </NavLink>
        </Menu>
      </Fragment>
    )
  }
}

export default ClassroomMenu;
