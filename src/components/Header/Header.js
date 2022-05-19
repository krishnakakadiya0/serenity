import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1 className="text-light">
            <a href="index.html">Serenity</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>About</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/team'}>Team</NavLink>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={'/services'}>Services</NavLink>
            </li>
            <li>
              <NavLink to={'/pricing'}>Pricing</NavLink>
            </li>
            <li>
              <NavLink to={'/portfolio'}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to={'/blog'}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li>
              <a className="getstarted" href="about.html">
                Get Started
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
}

export default Header;
