import "../../Styling/style.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [ownerName, setOwnerName] = useState("Jane Doe");
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
        setOwnerName(capitalize(userData.fullName));
      }
    }
  }, []);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
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
                    location.pathname === "/home"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to={"/home"} className="nav-link" onClick={closeNav}>
                    Home
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/About"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to={"/About"} className="nav-link" onClick={closeNav}>
                    About
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/Products"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link
                    to={"/Products"}
                    className="nav-link"
                    onClick={closeNav}
                  >
                    Products
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/Emergency"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link
                    to={"/Emergency"}
                    className="nav-link"
                    onClick={closeNav}
                  >
                    Emergency
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/Feedback"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link
                    to={"/Feedback"}
                    className="nav-link"
                    onClick={closeNav}
                  >
                    Feedback
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/Contact"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to={"/Contact"} className="nav-link" onClick={closeNav}>
                    Contact
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/PetCare"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link
                    to={"/PetCare"}
                    className="btn btn-primary"
                    onClick={closeNav}
                  >
                    Pet Care
                  </Link>
                </li>
                <li className="nav-item owner-name">
                  <span role="img" aria-label="user-icon">
                    &#128100;
                  </span>{" "}
                  {ownerName}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Navbar;
