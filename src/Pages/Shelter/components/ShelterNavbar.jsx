import "../css/ShelterNavbar.css";
import "../../../Styling/style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function ShelterNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userName, setUserName] = useState(""); 
  const navRef = useRef(null);

  const capitalize = (s) => {
    if (typeof s !== "string" || s.length === 0) return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      if (userData.fullName) {
        setUserName(capitalize(userData.fullName));
      }
    }
  }, []);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header ref={navRef}>
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="navbar-brand" onClick={closeNav}>
              <i className="fas fa-paw"></i>{" "}
              <span style={{ paddingLeft: "3px" }}>FurEver Care </span>
            </Link>
            <button
              className={`navbar-toggler ${isNavOpen ? "is-active" : ""}`}
              type="button"
              id="navbar-toggler"
              onClick={handleNavToggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className={`navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li
                  className={
                    location.pathname === "/shelter"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to={"/shelter"} className="nav-link" onClick={closeNav}>
                    Gallery
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/shelter/stories"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link
                    to={"/shelter/stories"}
                    className="nav-link"
                    onClick={closeNav}
                  >
                    Success Stories
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/shelter/events"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link
                    to={"/shelter/events"}
                    className="nav-link"
                    onClick={closeNav}
                  >
                    Events
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/shelter/contact"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link
                    to={"/shelter/contact"}
                    className="nav-link"
                    onClick={closeNav}
                  >
                    Shelter Contact
                  </Link>
                </li>
                {userName && (
                  <li className="nav-item owner-name">
                    <span role="img" aria-label="user-icon">
                      &#128100;
                    </span>{" "}
                    {userName}
                  </li>
                )}
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-primary">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
export default ShelterNavbar;
