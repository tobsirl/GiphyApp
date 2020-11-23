import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faDiceFive } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
    <header>
      <div className="container row">
        <h1 className="logo">Giphy App</h1>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <FontAwesomeIcon icon={faHome} size="2x" />
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/random" className="nav__link">
                <FontAwesomeIcon icon={faDiceFive} size="2x" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
