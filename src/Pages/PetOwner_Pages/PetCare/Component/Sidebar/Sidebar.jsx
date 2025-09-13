import "../../Styling/PetCareStyle.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar({ sidebarOpen, toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <div className="logo">
          <i className="fas fa-paw"></i>
          FurEver Care
        </div>

        <ul className="sidebar-links">
          <li>
            <Link
              to={"/petprofile"}
              className={
                location.pathname === "/petprofile" ||
                location.pathname === "/petcare"
                  ? "active"
                  : ""
              }
              onClick={handleLinkClick}
            >
              <i className="fas fa-paw"></i> Pet Profile
            </Link>
          </li>
          <li>
            <Link
              to={"/petcare/feedingguides"}
              className={
                location.pathname === "/petcare/feedingguides" ? "active" : ""
              }
              onClick={handleLinkClick}
            >
              <i className="fas fa-utensils"></i> Feeding Guides
            </Link>
          </li>
          <li>
            <Link
              to={"/petcare/groomingvideos"}
              className={
                location.pathname === "/petcare/groomingvideos" ? "active" : ""
              }
              onClick={handleLinkClick}
            >
              <i className="fas fa-video"></i> Grooming Videos
            </Link>
          </li>
          <li>
            <Link
              to={"/petcare/healthtips"}
              className={
                location.pathname === "/petcare/healthtips" ? "active" : ""
              }
              onClick={handleLinkClick}
            >
              <i className="fas fa-heartbeat"></i> Health Tips
            </Link>
          </li>
          <li>
            <Link
              to={"/petcare/trainingtips"}
              className={
                location.pathname === "/petcare/trainingtips" ? "active" : ""
              }
              onClick={handleLinkClick}
            >
              <i className="fas fa-graduation-cap"></i> Training Tips
            </Link>
          </li>
          <li>
            <Link
              to={"/home"}
              className={location.pathname === "/home" ? "active" : ""}
              onClick={handleLinkClick}
            >
              <i className="fas fa-arrow-left"></i> Back to home
            </Link>
          </li>
        </ul>

        <div className="logout">
          <button
            onClick={handleLogout}
            className="btn"
            style={{
              display: "block",
              padding: "12px 45px",
              backgroundColor: "var(--accent-color)",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e68a00")}
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "var(--accent-color)")
            }
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>

        </div>
      </div>
    </>
  );
}
export default Sidebar;
