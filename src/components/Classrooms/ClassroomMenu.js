import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class ClassroomMenu extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          icon='home circle'
        />
        <Menu.Item
          name='ADD Classroom'
          active={activeItem === 'ADD Classroom'}
          onClick={this.handleItemClick}
          icon='add circle'
        />
        <Menu.Item
          name='ADD Member'
          active={activeItem === 'ADD Member'}
          onClick={this.handleItemClick}
          icon='add circle'
        />
        <Menu.Item
          name='Discussion Forum'
          active={activeItem === 'Discussion Forum'}
          onClick={this.handleItemClick}
          icon='group circle'
        />
      </Menu>
    )
  }
}

export default ClassroomMenu;
