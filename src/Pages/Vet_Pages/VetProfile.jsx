import React, { useState, useEffect } from 'react';
import VetDashboardLayout from "./VetDashboardLayout";
import "./VetStyle/VetStyle.css";

function VetProfile() {
  const [selectedSlot, setSelectedSlot] = useState(null);
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

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <VetDashboardLayout>
      <header className="dashboard-header">
        <div className="header-content">
          <h2 className="header-title">Profile</h2>
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

      <div id="profile-content" className="section">
        <h2>Meet Our Veterinarians</h2>

        <div className="vet-header">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt={vetName}
            className="vet-avatar"
          />
          <div className="vet-info">
            <h3>{vetName}</h3>
            <p className="vet-specialty">Feline Medicine Specialist</p>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <strong>Email</strong>
              <br />
              erioluwamole12@email.com
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <strong>Phone</strong>
              <br />
              555-123-4567
            </div>
          </div>
        </div>

        <div className="time-slots">
          <h4>Available Time Slots</h4>
          <div className="slots-container">
            <div
              className={`time-slot ${selectedSlot === 'Mon, 10:00 AM' ? 'selected' : ''}`}
              onClick={() => handleSlotClick('Mon, 10:00 AM')}
            >
              Mon, 10:00 AM
            </div>
            <div
              className={`time-slot ${selectedSlot === 'Tue, 2:00 PM' ? 'selected' : ''}`}
              onClick={() => handleSlotClick('Tue, 2:00 PM')}
            >
              Tue, 2:00 PM
            </div>
            <div
              className={`time-slot ${selectedSlot === 'Wed, 9:30 AM' ? 'selected' : ''}`}
              onClick={() => handleSlotClick('Wed, 9:30 AM')}
            >
              Wed, 9:30 AM
            </div>
            <div
              className={`time-slot ${selectedSlot === 'Thu, 3:30 PM' ? 'selected' : ''}`}
              onClick={() => handleSlotClick('Thu, 3:30 PM')}
            >
              Thu, 3:30 PM
            </div>
            <div
              className={`time-slot ${selectedSlot === 'Fri, 11:00 AM' ? 'selected' : ''}`}
              onClick={() => handleSlotClick('Fri, 11:00 AM')}
            >
              Fri, 11:00 AM
            </div>
          </div>
        </div>

        <div className="time-slots">
          <h4>Time Booked</h4>
          <div className="slots-container">
            <div className="time-slot booked">Mon, 1:00 PM</div>
            <div className="time-slot booked">Tue, 8:00 AM</div>
            <div className="time-slot booked">Wed, 7:30 PM</div>
            <div className="time-slot booked">Thu, 5:30 PM</div>
            <div className="time-slot booked">Fri, 9:00 AM</div>
          </div>
        </div>

        {/* <!-- Pet Medical History Section --> */}
        <div className="medical-history">
          <h2>Pet Medical Histories</h2>
          <p>
            Recent patients and their medical records under Dr. Doe's care
          </p>

          <div className="pet-cards">
            {/* <!-- Pet 1 --> */}
            <div className="pet-card">
              <div className="pet-card-header">
                <img
                  src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Whiskers"
                  className="pet-avatar"
                />
                <div className="pet-info">
                  <h3>Whiskers</h3>
                  <p>Domestic Shorthair · 5 years</p>
                </div>
              </div>
              <div className="pet-card-body">
                <div className="medical-records">
                  <div className="record-item">
                    <div className="record-date">Sep 12, 2023</div>
                    <div className="record-details">
                      <p>Annual check-up and vaccination booster</p>
                      <span className="medication">FVRCP Vaccine</span>
                      <span className="medication">Rabies Vaccine</span>
                    </div>
                  </div>
                  <div className="record-item">
                    <div className="record-date">Mar 15, 2023</div>
                    <div className="record-details">
                      <p>Dental cleaning and minor gingivitis treatment</p>
                      <span className="medication">
                        Antiseptic Oral Gel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Pet 2 --> */}
            <div className="pet-card">
              <div className="pet-card-header">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Max"
                  className="pet-avatar"
                />
                <div className="pet-info">
                  <h3>Max</h3>
                  <p>Golden Retriever · 3 years</p>
                </div>
              </div>
              <div className="pet-card-body">
                <div className="medical-records">
                  <div className="record-item">
                    <div className="record-date">Aug 28, 2023</div>
                    <div className="record-details">
                      <p>
                        Dental cleaning and extraction of fractured tooth
                      </p>
                      <span className="medication">Pain Medication</span>
                      <span className="medication">Antibiotics</span>
                    </div>
                  </div>
                  <div className="record-item">
                    <div className="record-date">Jun 5, 2023</div>
                    <div className="record-details">
                      <p>Routine vaccination and heartworm prevention</p>
                      <span className="medication">DHPP Vaccine</span>
                      <span className="medication">Heartgard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Pet 3 --> */}
            <div className="pet-card">
              <div className="pet-card-header">
                <img
                  src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Bella"
                  className="pet-avatar"
                />
                <div className="pet-info">
                  <h3>Bella</h3>
                  <p>French Bulldog · 4 years</p>
                </div>
              </div>
              <div className="pet-card-body">
                <div className="medical-records">
                  <div className="record-item">
                    <div className="record-date">Jul 15, 2023</div>
                    <div className="record-details">
                      <p>
                        Treatment for skin allergy and medicated shampoo
                      </p>
                      <span className="medication">Apoquel</span>
                      <span className="medication">Medicated Shampoo</span>
                    </div>
                  </div>
                  <div className="record-item">
                    <div className="record-date">Jan 22, 2023</div>
                    <div className="record-details">
                      <p>Breathing difficulty examination</p>
                      <span className="medication">Anti-inflammatory</span>
                    </div>
                  </div>
                </div>
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
            >Book Appointment</a>


      </div>
    </VetDashboardLayout>
  );
}

export default VetProfile;
