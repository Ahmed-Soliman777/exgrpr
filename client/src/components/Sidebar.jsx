import React from 'react'
import { Link } from 'react-router-dom'

// The Sidebar component returns a vertical navigation bar with
// links to different pages.
const Sidebar = () => {
  return (
    <div className="flex flex-column flex-shrink-0 p-3 bg-light w-25 h-100">
      {/* The Link component is used to navigate to the home page.
      The d-flex class makes the link display as a flex container,
      and align-items-center vertically aligns the child elements
      in the center. */}
      <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </Link>

      <hr />
      {/* The ul element with the nav and nav-pills classes creates
      a list of pills (pills are a type of navigation link that are
      rounded on both sides). The flex-column class makes the list
      items stack vertically, and mb-auto adds bottom margin to the
      last list item. */}
      <ul className="nav nav-pills flex-column mb-auto">
        {/* The Link component is used to navigate to the home page.
        The active class is added to the link if it is the current page. */}
        <li className="nav-item">
          <Link className='nav-link active'>Home</Link>
        </li>
        <li>
          <Link className='nav-link link-dark'>Dashboard</Link>

        </li>
      </ul>
      <hr />
      {/* The dropdown component is used to create a dropdown menu.
      The Link component is used to toggle the dropdown menu. */}
      <div className="dropdown">
        <Link href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          {/* The img element displays the profile picture of the user.
          The rounded-circle class makes the image circular. */}
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          {/* The strong element displays the name of the user. */}
          <strong>mdo</strong>
        </Link>
        {/* The dropdown-menu element contains the items in the dropdown menu.
        The text-small class makes the text smaller, and the shadow class adds
        a shadow to the element. */}
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          {/* The Link component is used to navigate to the profile page. */}
          <li><Link className="dropdown-item" href="#">Profile</Link></li>
          <li><hr className="dropdown-divider" /></li>
          {/* The Link component is used to sign out the user. */}
          <li><Link className="dropdown-item" href="#">Sign out</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar