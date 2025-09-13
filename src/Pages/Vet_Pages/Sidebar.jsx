import "./VetStyle/VetStyle.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Sidebar({ sidebarOpen, toggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || currentUser.userType !== "vet") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <div class="logo">
          <i class="fas fa-paw"></i>
          FurEver Care
        </div>

        <ul class="sidebar-links">
          <li>
            <Link
              to={"/vet-dashboard"}
              className={location.pathname === "/vet-dashboard" ? "active" : ""}
              onClick={() => {
                if (window.innerWidth <= 768) {
                  toggleSidebar();
                }
              }}
            >
              <i class="fas fa-user"></i> Profile
            </Link>
          </li>
          <li>
            <Link
              to={"/vet-appointments"}
              className={
                location.pathname === "/vet-appointments" ? "active" : ""
              }
              onClick={() => {
                if (window.innerWidth <= 768) {
                  toggleSidebar();
                }
              }}
            >
              <i class="fas fa-calendar"></i> Appointments
            </Link>
          </li>
          <li>
            <Link
              to={"/vet-treatment-history"}
              className={
                location.pathname === "/vet-treatment-history" ? "active" : ""
              }
              onClick={() => {
                if (window.innerWidth <= 768) {
                  toggleSidebar();
                }
              }}
            >
              <i class="fas fa-history"></i> Treatment History
            </Link>
          </li>
          <li>
            <Link
              to={"/vet-case-studies"}
              className={
                location.pathname === "/vet-case-studies" ? "active" : ""
              }
              onClick={() => {
                if (window.innerWidth <= 768) {
                  toggleSidebar();
                }
              }}
            >
              <i class="fas fa-file-medical"></i> Case Studies
            </Link>
          </li>
        </ul>

        <div class="logout">
          <button
            onClick={handleLogout}
            className="btn"
            style={{
                marginTop: "30px",
                display: "inline-block",
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
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
