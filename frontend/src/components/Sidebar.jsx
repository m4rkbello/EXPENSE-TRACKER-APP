/* eslint-disable no-unused-vars */
import React from 'react'

function Sidebar() {
  return (
    <div>
    <ul className="menu bg-base-200 w-56 rounded-box">
  <li><a>Item 1</a></li>
  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li>
  <details open>
    <summary>Parent</summary>
    <ul>
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
 
    </ul>
  </details>
</li>
</ul>
    </div>
  )
}

export default Sidebar;