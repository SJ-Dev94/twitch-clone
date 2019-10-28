import React, { Component } from 'react'
import { FaBars, FaClose } from 'react-icons/fa/'
import SidebarIcon from './SidebarIcon'


export default class Sidebar extends Component {
  state = {
    isOpen: false
  }

  renderSidebar = () => {
    if (!this.state.isOpen) {
      return
    }

    return <div className="sidebar">
      <div className="sidebar-link">Home</div>
      <div className="sidebar-link">About</div>
      <div className="sidebar-link">Contact</div>
    </div>
  }
  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
  render() {
    const sidebarWrapper = {
      display: 'flex',
      width: '3.5rem',
      flexDirection: 'column',
      border: '1px dotted blue',
      marginRight: '1rem'
    }
    return <div style={sidebarWrapper}>
      <div className="sidebar-icon">
        <SidebarIcon
          isOpen={this.state.isOpen}
          handleClick={this.toggleSidebar}
        />
        {this.renderSidebar()}
      </div>
    </div>
  }
}