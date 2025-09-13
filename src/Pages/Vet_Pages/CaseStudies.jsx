import VetDashboardLayout from "./VetDashboardLayout";
import "./VetStyle/VetStyle.css";
import React, { useState, useEffect } from 'react';

function CaseStudies() {
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
          <h2 className="header-title">Case Studies</h2>
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
      {/* <!-- Case Studies Section --> */}
      <div id="case-studies" className="section">
        <h2>Case Studies & Experience</h2>

        <div className="case-item">
          <i className="fas fa-file-medical-alt"></i> Managing Diabetes in an
          Elderly Cat
        </div>
        <div className="case-item">
          <i className="fas fa-file-medical-alt"></i> Feline Lower Urinary Tract
          Disease Treatment
        </div>
        <div className="case-item">
          <i className="fas fa-file-medical-alt"></i> Advanced Dental Surgery in
          Persian Cats
        </div>
        <div className="case-item">
          <i className="fas fa-file-medical-alt"></i> Nutritional Management for
          Obese Cats
        </div>
        <div className="case-item">
          <i className="fas fa-file-medical-alt"></i> Behavioral Therapy for
          Anxious Dogs
        </div>
        <div className="case-item">
          <i className="fas fa-file-medical-alt"></i> Orthopedic Surgery for Hip
          Dysplasia
        </div>
        <div className="case-item">
          <i className="fas fa-file-medical-alt"></i> Treatment of Chronic Kidney
          Disease in Senior Pets
        </div>
      </div>
    </VetDashboardLayout>
  );
}
export default CaseStudies;