import React from "react";
// Optional CSS file for styling
import { Link as RouterLink, animateScroll as scroll } from "react-scroll";
import "./FixedHeader.css";

const Header: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary bg-dark">
      <div className="container-fluid">
        <RouterLink
          to="/"
          className="navbar-brand whiteColor"
          onClick={scrollToTop}
        >
          React_demo
        </RouterLink>
        <button
          className="navbar-toggler whiteColor"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <RouterLink
              to="h"
              className="nav-link whiteColor"
              spy={false}
              smooth={false}
              offset={-70}
              duration={5}
            >
              Home
            </RouterLink>
            <RouterLink
              to="green_section"
              className="nav-link custom-link"
              spy={true}
              smooth={false}
              offset={-70}
              duration={500}
            >
              Green section
            </RouterLink>
            <RouterLink
              to="brown_section"
              className="nav-link customBrown-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={5}
            >
              Brown section
            </RouterLink>
            <RouterLink
              to="disabled"
              className="nav-link disabled"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Disabled
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
