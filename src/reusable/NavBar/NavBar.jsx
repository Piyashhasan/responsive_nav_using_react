import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const closeMobileNav = () => {
    setClick(false);
  };

  return (
    <nav className="nav_container">
      <div className="navbar container py-3">
        <div>
          <Link to="/" className="navbar-brand fw-bold">
            <span className="text-white">LOGO</span>
          </Link>
        </div>
        <div>
          <ul className={click ? "nav nav_menu active" : "nav nav_menu"}>
            <li className="nav-item" onClick={closeMobileNav}>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "nav-link activeLink" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item" onClick={closeMobileNav}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link activeLink" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item" onClick={closeMobileNav}>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? "nav-link activeLink" : "nav-link"
                }
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item" onClick={closeMobileNav}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link activeLink" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="toggle_btn">
          <button className="btn text-white" onClick={() => setClick(!click)}>
            {click ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
