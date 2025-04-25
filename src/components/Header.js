import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <style>
        {`
        
          .nav-link:hover {
            color: blue;
            text-decoration:underline;    
          }
        
          @media (max-width: 768px) {
            .navbar-toggler {
              display: block;
            }
            .navbar-collapse {
              display: none;
              flex-direction: column;
              align-items: center;
            }
            .navbar-nav {
              flex-direction: column;
              width: 100%;
              text-align: center;
            }
            .nav-item {
              margin: 1rem 0;
            }
            .navbar-collapse.show {
              display: flex;
            }
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">MY PORTFOLIO</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item fw-bold">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item fw-bold">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item fw-bold">
                <Link className="nav-link" to="/work">WORK</Link>
              </li>
              <li className="nav-item fw-bold">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
