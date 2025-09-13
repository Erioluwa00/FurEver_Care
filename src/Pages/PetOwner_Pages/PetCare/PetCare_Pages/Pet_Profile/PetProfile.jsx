import Sidebar from "../../Component/Sidebar/Sidebar";
import "../../Styling/PetCareStyle.css";
import React, { useState, useEffect } from "react";
import MarqueeTicker from "../../Component/MarqueeTicker/MarqueeTicker";
function PetProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ownerName, setOwnerName] = useState("John Doe");
  const [petName, setPetName] = useState("Whiskers");

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
      if (userData.fullName) {
        setPetName(capitalize(userData.petName));
      }
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-logo">
            <i className="fas fa-paw"></i>
            <span>FurEver Care</span>
          </div>
          <div className="hamburger-menu" onClick={toggleSidebar}>
            <i className={`fas ${sidebarOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </div>

      <div
        className={`overlay ${sidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>

      <div className="content-wrapper">
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <header className="dashboard-header">
            <div className="header-content">
              <h2 className="header-title">Profile</h2>
              <div className="user-profile">
                <img
                  src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="User Avatar"
                  className="avatar"
                />
                <span>{ownerName}</span>
              </div>
            </div>
          </header>
          {/* <!-- Pet Profile Section --> */}
          <div id="pet-profile" className="pet-welcome-banner">
            <h1>Welcome to your Pet's Profile</h1>
            <p>
              Here you can manage your pet's information, track health metrics,
              and access helpful resources.
            </p>
          </div>

          <div id="pet-profile-content" className="section">
            <div className="pet-header-bg">
              <div className="pet-header-inner">
                <img
                  src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Whiskers"
                  className="pet-avatar-large"
                />
                <div className="pet-info">
                  <h3>{petName}</h3>
                  <p className="pet-breed">Domestic Shorthair · 5 years</p>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-value">4.2</div>
                      <div className="stat-label">kg Weight</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">28</div>
                      <div className="stat-label">cm Length</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">A-</div>
                      <div className="stat-label">Health Grade</div>
                    </div>
                  </div>
                  <div className="pet-quote">
                    {petName} loves sunbeams, chasing toys, and cuddling on
                    rainy days.”
                  </div>
                </div>
              </div>
            </div>

            <div className="health-alert">
              <i className="fas fa-exclamation-circle"></i>
              <p>
                {petName} is due for her annual vaccination in 15 days. Please
                schedule an appointment.
              </p>
            </div>

            <div className="pet-details">
              <div className="detail-card">
                <i className="fas fa-syringe"></i>
                <h4>Vaccinations</h4>
                <p>Up to date</p>
              </div>
              <div className="detail-card">
                <i className="fas fa-pills"></i>
                <h4>Medications</h4>
                <p>Flea prevention</p>
              </div>
              <div className="detail-card">
                <i className="fas fa-notes-medical"></i>
                <h4>Last Checkup</h4>
                <p>Sep 12, 2023</p>
              </div>
              <div className="detail-card">
                <i className="fas fa-weight"></i>
                <h4>Ideal Weight</h4>
                <p>4.0 - 4.5 kg</p>
              </div>
            </div>

            <h2>Health Metrics</h2>
            <div className="card">
              <div className="card-header">
                <i className="fas fa-chart-line"></i>
                <span>Progress Tracking</span>
              </div>
              <div className="card-body">
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Weight Management</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Activity Level</span>
                    <span>70%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Nutrition Balance</span>
                    <span>90%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="btn"
              style={{
                marginTop: "30px",
                display: "inline-block",
                padding: "12px 24px",
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
              Edit Pet Profile
            </a>
          </div>
        </div>
      </div>
      <MarqueeTicker
        updates={[
          "Poison hotline: 0800-123-4567",
          "Keep harmful foods away from pets!",
          "Emergency vets available 24/7 in Lagos",
        ]}
        speed={100}
      />
    </>
  );
}
export default PetProfile;
