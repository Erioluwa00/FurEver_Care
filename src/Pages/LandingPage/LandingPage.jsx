import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Vet specific states
  const [vetSpecialization, setVetSpecialization] = useState("cardiology");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  // Pet Owner specific states
  const [petName, setPetName] = useState("");
  const [petSpecie, setPetSpecie] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petMedicalHistory, setPetMedicalHistory] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userType) {
      alert("Please select your role.");
      return;
    }

    let userData = {
      fullName,
      email,
      userType,
    };

    switch (userType) {
      case "vet":
        userData = {
          ...userData,
          vetSpecialization,
          phoneNumber,
          officeAddress,
          profileImage: profileImage ? profileImage.name : null,
        };
        navigate("/vet-dashboard");
        break;
      case "pet_owner":
        userData = {
          ...userData,
          petName,
          petSpecie,
          petBreed,
          petAge,
          petMedicalHistory,
        };
        navigate("/home");
        break;
      case "animal_shelter":
        navigate("/shelter");
        break;
      default:
        break;
    }

    localStorage.setItem("currentUser", JSON.stringify(userData));

  };

  const isLoginButtonDisabled = !userType || !fullName || !email;

  return (
    <div className="split-screen-container">
      <div className="split-left">
        <div className="left-content">
          <h1 className="logo"> <i className="fas fa-paw"></i>{" "}FurEver Care</h1>
          <p>Your all-in-one platform for pet wellness and community.</p>
        </div>
      </div>
      <div className="split-right">
        <div className="right-content">
          <form id="landing-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="form-control-pill"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control-pill"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="user-type">I am a...</label>
              <select
                id="user-type"
                name="user-type"
                className="form-control-pill"
                required
                onChange={handleUserTypeChange}
                value={userType}
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="pet_owner">Pet Owner</option>
                <option value="vet">Veterinarian</option>
                <option value="animal_shelter">Animal Shelter/Rescue Volunteer</option>
              </select>
            </div>

            {userType === "vet" && (
              <>
                <div className="form-group" id="specialization-group">
                  <label htmlFor="vet-specialization">Specialization</label>
                  <select
                    id="vet-specialization"
                    name="vet-specialization"
                    className="form-control-pill"
                    value={vetSpecialization}
                    onChange={(e) => setVetSpecialization(e.target.value)}
                  >
                    <option value="cardiology">Cardiology</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="neurology">Neurology</option>
                    <option value="oncology">Oncology</option>
                    <option value="general">General Practice</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number">Phone Number</label>
                  <input
                    type="tel"
                    id="phone-number"
                    name="phone-number"
                    className="form-control-pill"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="office-address">Office Address</label>
                  <input
                    type="text"
                    id="office-address"
                    name="office-address"
                    className="form-control-pill"
                    value={officeAddress}
                    onChange={(e) => setOfficeAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="profile-image">Profile Image</label>
                  <input
                    type="file"
                    id="profile-image"
                    name="profile-image"
                    className="form-control-file"
                    onChange={(e) => setProfileImage(e.target.files[0])}
                  />
                </div>
              </>
            )}

            {userType === "pet_owner" && (
              <>
                <div className="form-group">
                  <label htmlFor="pet-name">Pet's Name</label>
                  <input
                    type="text"
                    id="pet-name"
                    name="pet-name"
                    className="form-control-pill"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pet-specie">Specie</label>
                  <input
                    type="text"
                    id="pet-specie"
                    name="pet-specie"
                    className="form-control-pill"
                    value={petSpecie}
                    onChange={(e) => setPetSpecie(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pet-breed">Breed</label>
                  <input
                    type="text"
                    id="pet-breed"
                    name="pet-breed"
                    className="form-control-pill"
                    value={petBreed}
                    onChange={(e) => setPetBreed(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pet-age">Age</label>
                  <input
                    type="number"
                    id="pet-age"
                    name="pet-age"
                    className="form-control-pill"
                    value={petAge}
                    onChange={(e) => setPetAge(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pet-medical-history">
                    Brief Medical History
                  </label>
                  <textarea
                    id="pet-medical-history"
                    name="pet-medical-history"
                    className="form-control-txtarea"
                    rows="3"
                    value={petMedicalHistory}
                    onChange={(e) => setPetMedicalHistory(e.target.value)}
                  ></textarea>
                </div>
              </>
            )}

            {userType === "animal_shelter" && (
              <>{}</>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-pill"
              disabled={isLoginButtonDisabled}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
