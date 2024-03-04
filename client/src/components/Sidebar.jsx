import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light w-25 h-100">
      <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </Link>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link className='nav-link active'>Home</Link>
        </li>
        <li>
          <Link className='nav-link link-dark'>Home</Link>

        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </Link>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><Link className="dropdown-item" href="#">New project...</Link></li>
          <li><Link className="dropdown-item" href="#">Settings</Link></li>
          <li><Link className="dropdown-item" href="#">Profile</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" href="#">Sign out</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar