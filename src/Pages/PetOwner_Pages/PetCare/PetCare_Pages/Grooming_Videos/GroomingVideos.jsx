import Sidebar from "../../Component/Sidebar/Sidebar";
import "../../Styling/PetCareStyle.css";
import React, { useState, useEffect } from "react";
import MarqueeTicker from "../../Component/MarqueeTicker/MarqueeTicker";
function GroomingVideos() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ownerName, setOwnerName] = useState("John Doe");

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
              <h2 className="header-title">Grooming Video</h2>
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
          <div id="grooming-video" className="section">
            <h2>Grooming Videos</h2>
            <p>
              Learn how to properly groom your pet with these helpful tutorials
            </p>

            <div className="card-grid">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-video"></i>
                  <span>Brushing Techniques</span>
                </div>
                <div className="card-body">
                  <div className="video-container">
                    <iframe
                      src="https://www.youtube.com/embed/5xVjUxb8LZw"
                      title="Cat Grooming Shorts"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p>
                    Learn the proper way to brush your cat to reduce shedding
                    and prevent mats.
                  </p>
                  <a
                    href="#"
                    className="btn btn-outline"
                    style={{
                      display: "block",
                      padding: "12px 62px",
                      border: "2px solid var(--primary-color)",
                      color: "var(--primary-color)",
                      borderRadius: "8px",
                      fontWeight: "600",
                      textDecoration: "none",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Save for Later
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <i className="fas fa-video"></i>
                  <span>Nail Trimming</span>
                </div>
                <div className="card-body">
                  <div className="video-container">
                    <iframe
                      src="https://www.youtube.com/embed/liUlxW5TMg8"
                      title="Cat Nail Trimming YouTube"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p>
                    Step-by-step guide to safely trim your cat's nails without
                    causing stress.
                  </p>
                  <a
                    href="#"
                    className="btn btn-outline"
                    style={{
                      display: "block",
                      padding: "12px 62px",
                      border: "2px solid var(--primary-color)",
                      color: "var(--primary-color)",
                      borderRadius: "8px",
                      fontWeight: "600",
                      textDecoration: "none",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Save for Later
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <i className="fas fa-video"></i>
                  <span>Pet Bathing</span>
                </div>
                <div className="card-body">
                  <div className="video-container">
                    <iframe
                      src="https://www.youtube.com/embed/eNUQJBxMEiU?si=AX07O8Sspwfgodhv"
                      title="Cat Dental Care YouTube"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p>
                    How to brush your cat's teeth and maintain good oral
                    hygiene.
                  </p>
                  <a
                    href="#"
                    className="btn btn-outline"
                    style={{
                      display: "block",
                      padding: "12px 62px",
                      border: "2px solid var(--primary-color)",
                      color: "var(--primary-color)",
                      borderRadius: "8px",
                      fontWeight: "600",
                      textDecoration: "none",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Save for Later
                  </a>
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: "30px" }}>Grooming Schedule</h3>
            <div className="card">
              <div className="card-body">
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Brushing</span>
                    <span>Next: Tomorrow</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="progress-container">
                  <div className="progress-label">
                    <span>Nail Trim</span>
                    <span>Due in 2 weeks</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>

                <div className="progress-container">
                  <div className="progress-label">
                    <span>Teeth Brushing</span>
                    <span>Next: Today</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
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
export default GroomingVideos;
