import Sidebar from "../../Component/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import "../../Styling/PetCareStyle.css";
import React, { useState, useEffect } from "react";
import MarqueeTicker from "../../Component/MarqueeTicker/MarqueeTicker";
function FeedingGuides() {
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
              <h2 className="header-title">Feeding Guide</h2>
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
          <div id="feeding-guide" className="section">
            <h2>Feeding Guide</h2>
            <p>Personalized nutrition recommendations for your pet</p>
            <div
              className="feeding-chart"
              role="table"
              aria-label="Feeding guide chart"
              style={{ marginTop: "18px" }}
            >
              <div className="chart-header">
                <div className="chart-cell header" role="columnheader">
                  Category
                </div>
                <div className="chart-cell header" role="columnheader">
                  Age / Stage
                </div>
                <div className="chart-cell header" role="columnheader">
                  Typical Weight
                </div>
                <div className="chart-cell header" role="columnheader">
                  Daily Food (g)
                </div>
              </div>

       
              <div className="chart-row" role="row">
                <div className="chart-cell" role="cell">
                  <strong>Puppies</strong>
                  <span className="muted">(Dogs 0-6 mo)</span>
                </div>
                <div className="chart-cell small" role="cell">
                  Rapid growth — frequent small meals
                </div>
                <div className="chart-cell" role="cell">
                  2-12 kg (varies)
                </div>
                <div className="chart-cell" role="cell">
                  80-300 g <span className="muted">(split into 3-4 meals)</span>
                </div>
              </div>

              <div className="chart-row" role="row">
                <div className="chart-cell" role="cell">
                  <strong>Adult Dogs</strong>
                  <span className="muted">(1-7 years)</span>
                </div>
                <div className="chart-cell small" role="cell">
                  Stable maintenance diet
                </div>
                <div className="chart-cell" role="cell">
                  5-35+ kg
                </div>
                <div className="chart-cell" role="cell">
                  200-800 g <span className="muted">(1-2 meals)</span>
                </div>
              </div>

              <div className="chart-row" role="row">
                <div className="chart-cell" role="cell">
                  <strong>Kittens</strong>
                  <span className="muted">(Cats 0-12 mo)</span>
                </div>
                <div className="chart-cell small" role="cell">
                  High energy, growing — more frequent feedings
                </div>
                <div className="chart-cell" role="cell">
                  0.5-4 kg
                </div>
                <div className="chart-cell" role="cell">
                  40-120 g <span className="muted">(split into 3 meals)</span>
                </div>
              </div>

              <div className="chart-row" role="row">
                <div className="chart-cell" role="cell">
                  <strong>Adult Cats</strong>
                  <span className="muted">(1-7 years)</span>
                </div>
                <div className="chart-cell small" role="cell">
                  Maintenance diet, monitor weight
                </div>
                <div className="chart-cell" role="cell">
                  3-6 kg
                </div>
                <div className="chart-cell" role="cell">
                  40-80 g <span className="muted">(1-2 meals)</span>
                </div>
              </div>

              <div className="chart-row" role="row">
                <div className="chart-cell" role="cell">
                  <strong>Seniors</strong>
                  <span className="muted">(7+ years)</span>
                </div>
                <div className="chart-cell small" role="cell">
                  Lower calorie, joint support as needed
                </div>
                <div className="chart-cell" role="cell">
                  Varies
                </div>
                <div className="chart-cell" role="cell">
                  Adjust to activity — consult vet
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <i className="fas fa-utensils"></i>
                <span>Daily Feeding Plan</span>
              </div>
              <div className="card-body">
                <div className="tip-card">
                  <h4>Recommended Food</h4>
                  <p>
                    High-quality dry cat food with protein as the first
                    ingredient. Look for brands with limited fillers like corn
                    and wheat.
                  </p>
                </div>

                <div className="tip-card">
                  <h4>Portion Size</h4>
                  <p>
                    1/4 cup twice daily (total 1/2 cup per day). Adjust based on
                    activity level and weight goals.
                  </p>
                </div>

                <div className="tip-card">
                  <h4>Feeding Schedule</h4>
                  <p>Morning: 7:00 AM | Evening: 6:00 PM</p>
                </div>

                <div className="tip-card">
                  <h4>Hydration</h4>
                  <p>
                    Ensure fresh water is available at all times. Consider a
                    water fountain to encourage drinking.
                  </p>
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: "30px" }}>Nutritional Progress</h3>
            <div className="card">
              <div className="card-body">
                <div className="progress-container">
                  <div className="progress-label">
                    <span>This Week's Consistency</span>
                    <span>100%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <p style={{ marginTop: "15px", fontStyle: "italic" }}>
                  Great job! You've followed the feeding plan perfectly this
                  week.
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
export default FeedingGuides;
