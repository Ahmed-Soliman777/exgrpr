import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./css/StudentSidebar.css"

export default function StudentSidebar() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('');
    const [isActive, setIsActive] = useState(false);


    const handleLogout = (event) => {
        event.preventDefault();
        setUser('');
        navigate('/');
    };

    return (
        <div className="flex flex-column flex-shrink-0 p-3 bg-light w-25 h-100">
            {/* The Link component is used to navigate to the home page.
      The d-flex class makes the link display as a flex container,
      and align-items-center vertically aligns the child elements
      in the center. */}
            <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Student Sidebar</span>
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
                    <Link className='nav-link'>Home</Link>
                </li>
                <li>
                    <Link className='nav-link link-dark'>Join An Exam</Link>
                </li>
                <li>
                    <Link className='nav-link link-dark'>Exam Results</Link>
                </li>
            </ul>
            <hr />
            {/* The dropdown component is used to create a dropdown menu.
      The Link component is used to toggle the dropdown menu. */}
            <div>
                <button onClick={handleLogout} className='btn-style'>Logout</button>
            </div>
        </div>
    )
}
