
import React from 'react'
import { FaGripLines, FaGripLinesVertical } from 'react-icons/fa'
const SidebarIcon = ({ handleClick, isOpen }) => {
  return <span onClick={handleClick}>
    {isOpen ? <FaGripLinesVertical /> : <FaGripLines />}
  </span>
}

export default SidebarIcon;