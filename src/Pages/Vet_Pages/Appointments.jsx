import VetDashboardLayout from "./VetDashboardLayout";
import "./VetStyle/VetStyle.css";
import React, { useState, useEffect } from 'react';

function Appointments() {
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
          <h2 className="header-title">Appointments</h2>
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
      {/* <!-- Appointments Section --> */}
      <div id="appointments" className="section">
        <h2>Schedule an Appointment</h2>

        <form className="appointment-form">
          <div className="form-group">
            <label htmlFor="pet-name">Pet Name</label>
            <input
              type="text"
              id="pet-name"
              className="form-control-pill"
              placeholder="Enter pet's name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pet-type">Pet Type</label>
            <select id="pet-type" className="form-control-pill">
              <option value="">Select pet type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="reptile">Reptile</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="owner-name">Owner's Name</label>
            <input
              type="text"
              id="owner-name"
              className="form-control-pill"
              placeholder="Enter owner's name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="form-control-pill"
              placeholder="Enter phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control-pill"
              placeholder="Enter email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="appointment-date">Preferred Date</label>
            <input
              type="date"
              id="appointment-date"
              className="form-control-pill"
            />
          </div>

          <div className="form-group">
            <label htmlFor="appointment-time">Preferred Time</label>
            <select id="appointment-time" className="form-control-pill">
              <option value="">Select time slot</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:30">3:30 PM</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="reason">Reason for Visit</label>
            <textarea
              className="form-control-pill"
              id="reason"
              placeholder="Please describe the reason for the appointment"
            ></textarea>
          </div>

          <div className="form-group full-width">
            <button type="submit" className="btn"  style={{
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
              }>
              Schedule Appointment
            </button>



            
          </div>
        </form>
      </div>
    </VetDashboardLayout>
  );
}
export default Appointments;