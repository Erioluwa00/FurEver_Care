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
        {" "}
        
        <div class="logo">
          <i class="fas fa-paw"></i>
          FurEver Care
        </div>
        <ul class="sidebar-links">
          <li>
            <Link
              to={"/vet-dashboard"}
              className={location.pathname === "/vet-dashboard" ? "active" : ""}
              onClick={toggleSidebar}
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
              onClick={toggleSidebar} 
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
              onClick={toggleSidebar} 
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
              onClick={toggleSidebar} 
            >
              <i class="fas fa-file-medical"></i> Case Studies
            </Link>
          </li>
        </ul>
        <div class="logout">
          <button
            onClick={handleLogout}
            className="btn"
            style={{ display: "block", textAlign: "center", width: "100%" }}
          >
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
