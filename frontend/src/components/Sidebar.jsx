/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom';


function Sidebar() {
  return (
    <div>
    <ul className="menu bg-base-200 max-h-max w-56">
  <li>
  <Link to="/wallet"><a>Wallet</a></Link>
  <Link to="/wallet"><a>Add Expense</a></Link>
  </li>
  <li>
    <details close>
      <summary>Parent</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
  </li>
  <li>
  <details close>
    <summary>Parent</summary>
    <ul>
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
    </ul>
  </details>
</li>  <li>
<details close>
  <summary>Parent</summary>
  <ul>
    <li><a>Submenu 1</a></li>
    <li><a>Submenu 2</a></li>
  </ul>
</details>
</li>
<li>
<details close>
  <summary>Parent</summary>
  <ul>
    <li><a>Submenu 1</a></li>
    <li><a>Submenu 2</a></li>
  </ul>
</details>
</li>

<li>
<details close>
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