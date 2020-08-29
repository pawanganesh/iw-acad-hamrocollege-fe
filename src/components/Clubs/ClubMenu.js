import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class ClubMenu extends Component {
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
          icon='home'
        />
        <Menu.Item
          name='ADD Club'
          active={activeItem === 'ADD Club'}
          onClick={this.handleItemClick}
          icon='add'
        />
        <Menu.Item
          name='ADD Member'
          active={activeItem === 'ADD Member'}
          onClick={this.handleItemClick}
          icon='add'
        />
        <Menu.Item
          name='Announcement'
          active={activeItem === 'Announcement'}
          onClick={this.handleItemClick}
          icon='notice'
        />
      </Menu>
    )
  }
}

export default ClubMenu;
