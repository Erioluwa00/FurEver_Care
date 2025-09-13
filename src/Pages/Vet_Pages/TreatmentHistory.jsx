import VetDashboardLayout from "./VetDashboardLayout";
import "./VetStyle/VetStyle.css";
import React, { useState, useEffect } from 'react';

function TreatmentHistory() {
  const [vetName, setVetName] = useState("Dr. Jane Doe");

  const capitalize = (s) => {
    if (typeof s !== 'string' || s.length === 0) return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      if (userData.fullName) {
        setVetName(`Dr. ${capitalize(userData.fullName)}`);
      }
    }
  }, []);

  return (
    <VetDashboardLayout>
      <header className="dashboard-header">
        <div className="header-content">
          <h2 className="header-title">Treatment History</h2>
          <div className="user-profile">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="User Avatar"
              className="avatar"
            />
            <span>{vetName}</span>
          </div>
        </div>
      </header>
      <div id="treatment-history" className="section">
        <h2>Treatment History</h2>

        <div className="treatment-item">
          <div className="treatment-date">September 12, 2023</div>
          <div className="treatment-desc">
            Annual check-up and vaccination booster
          </div>
          <div className="treatment-pet">
            Patient: Whiskers (Domestic Shorthair)
          </div>
        </div>

        <div className="treatment-item">
          <div className="treatment-date">August 28, 2023</div>
          <div className="treatment-desc">
            Dental cleaning and extraction of fractured tooth
          </div>
          <div className="treatment-pet">Patient: Max (Golden Retriever)</div>
        </div>

        <div className="treatment-item">
          <div className="treatment-date">July 15, 2023</div>
          <div className="treatment-desc">
            Treatment for skin allergy and medicated shampoo
          </div>
          <div className="treatment-pet">Patient: Bella (French Bulldog)</div>
        </div>

        <div className="treatment-item">
          <div className="treatment-date">June 3, 2023</div>
          <div className="treatment-desc">
            Spay surgery and post-operative care
          </div>
          <div className="treatment-pet">Patient: Luna (Maine Coon)</div>
        </div>

        <div className="treatment-item">
          <div className="treatment-date">May 18, 2023</div>
          <div className="treatment-desc">
            Emergency treatment for ingested foreign object
          </div>
          <div className="treatment-pet">
            Patient: Charlie (Labrador Retriever)
          </div>
        </div>
      </div>
    </VetDashboardLayout>
  );
}
export default TreatmentHistory;