import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='classrooms'
          active={activeItem === 'classrooms'}
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