import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <NavLink to="/">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/classroom">
          <Menu.Item
            name='classrooms'
            active={activeItem === 'classrooms'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        
        <Menu.Item
          name='Clubs'
          active={activeItem === 'clubs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='attendance'
          active={activeItem === 'attendance'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}