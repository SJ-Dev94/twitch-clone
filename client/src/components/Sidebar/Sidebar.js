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
      flex: '0 0 180px',
      minHeight: '100%',
      width: '200px',
      background: '#fff',
      border: '2px solid pink',
      top: '0rem',
    }

    const sticky = {
      position: 'sticky',
      top: '0rem',
    }
    return <div style={sidebarWrapper}>
      <div className="sidebar-icon" style={sticky}>
        <SidebarIcon
          isOpen={this.state.isOpen}
          handleClick={this.toggleSidebar}
        />
        {this.renderSidebar()}
      </div>
    </div>
  }
}