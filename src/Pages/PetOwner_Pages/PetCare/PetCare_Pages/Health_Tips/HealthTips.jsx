import Sidebar from "../../Component/Sidebar/Sidebar";
import "../../Styling/PetCareStyle.css";
import React, { useState, useEffect } from "react";
import MarqueeTicker from "../../Component/MarqueeTicker/MarqueeTicker";
function HealthTips() {
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
              <h2 className="header-title">Health Tips</h2>
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
          <div id="health-tips" className="section">
            <h2>Health Tips</h2>
            <p>Expert advice to keep your pet healthy and happy</p>

            <div className="card-grid">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-heartbeat"></i>
                  <span>Preventive Care</span>
                </div>
                <div className="card-body">
                  <div className="tip-card">
                    <h4>Regular Checkups</h4>
                    <p>
                      Annual veterinary exams can detect issues early and
                      prevent serious conditions.
                    </p>
                  </div>
                  <div className="tip-card">
                    <h4>Vaccination Schedule</h4>
                    <p>
                      Keep vaccinations up to date based on your vet's
                      recommendations.
                    </p>
                  </div>
                  <div className="tip-card">
                    <h4>Parasite Prevention</h4>
                    <p>Use flea, tick, and heartworm prevention year-round.</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <i className="fas fa-notes-medical"></i>
                  <span>Warning Signs</span>
                </div>
                <div className="card-body">
                  <div className="tip-card">
                    <h4>Changes in Appetite</h4>
                    <p>
                      Sudden increase or decrease could indicate health issues.
                    </p>
                  </div>
                  <div className="tip-card">
                    <h4>Lethargy</h4>
                    <p>
                      If your pet is unusually tired or inactive, consult your
                      vet.
                    </p>
                  </div>
                  <div className="tip-card">
                    <h4>Behavior Changes</h4>
                    <p>
                      Any significant change in behavior warrants attention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <i className="fas fa-first-aid"></i>
                  <span>Emergency Preparedness</span>
                </div>
                <div className="card-body">
                  <div className="tip-card">
                    <h4>Pet First Aid Kit</h4>
                    <p>
                      Keep a well-stocked first aid kit specifically for your
                      pet.
                    </p>
                  </div>
                  <div className="tip-card">
                    <h4>Emergency Contacts</h4>
                    <p>
                      Have your vet's number and the nearest emergency clinic
                      saved.
                    </p>
                  </div>
                  <div className="tip-card">
                    <h4>Know CPR</h4>
                    <p>
                      Learn pet CPR techniques - they could save your pet's
                      life.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-video"></i>
                  <span>Weight Checking</span>
                </div>
                <div className="card-body">
                  <div className="video-container">
                    <iframe
                      src="https://www.youtube.com/embed/pEWL6614dpY?si=zuVh9J3033WybfXZ"
                      title="Cat Grooming Shorts"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p>
                    Learn the proper way to check and monitor your pet's weight.
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
                  <span>Health Conditions</span>
                </div>
                <div className="card-body">
                  <div className="video-container">
                    <iframe
                      src="https://www.youtube.com/embed/SjmRPWYnoJw?si=xxxA9f9C4O7ZBX4f"
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
                  <span>Oral Care</span>
                </div>
                <div className="card-body">
                  <div className="video-container">
                    <iframe
                      src="https://www.youtube.com/embed/hKrkHOf7RD4"
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

            <h3 style={{ marginTop: "30px" }}>Health Checklist</h3>
            <div className="card">
              <div className="card-body">
                <div className="progress-container">
                  <div className="progress-label">
                    <span>This Month's Health Goals</span>
                    <span>75%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <p style={{ marginTop: "15px", fontStyle: "italic" }}>
                  You're on track with most health goals. Don't forget to
                  schedule the annual checkup!
                </p>
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
export default HealthTips;
