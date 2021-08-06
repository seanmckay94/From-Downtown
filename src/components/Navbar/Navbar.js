import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBasketballBall, faTachometerAlt, faClipboardList, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
export default function Navbar() {

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li classname="nav-logo">
                    <a href="/" className="nav-link">
                        <svg>
                        <FontAwesomeIcon icon={ faBasketballBall } />
                        </svg>
                    </a>
                </li>
                <hr className="line-break" />

                <li className="nav-item">
                    <a href="/Home" className="nav-link">
                        <svg>
                        <FontAwesomeIcon icon={ faHome } />
                        </svg>
                        <span className="link-text">Home</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="/Dashboard" className="nav-link">
                        <svg>
                        <FontAwesomeIcon icon={ faTachometerAlt } />
                        </svg>
                        <span className="link-text">Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="/RegisterUser" className="nav-link">
                        <svg>
                        <FontAwesomeIcon icon={ faClipboardList } />
                        </svg>
                        <span className="link-text">Register</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="/LoginUser" className="nav-link">
                        <svg>
                        <FontAwesomeIcon icon={ faSignInAlt } />
                        </svg>
                        <span className="link-text">Login</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <svg>
                        <FontAwesomeIcon icon={ faSignOutAlt } />
                        </svg>
                        <span className="link-text">Logout</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
