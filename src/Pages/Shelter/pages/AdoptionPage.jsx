import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShelterNavbar from "../components/ShelterNavbar";
import Footer from "../../../Components/Footer/Footer";
import petsData from "../data/adoptablePets.json";
import "../../PetOwner_Pages/Products/Checkout.css";

function AdoptionPage() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const currentPet = petsData.pets.find((p) => p.id === id);
    setPet(currentPet);
  }, [id]);

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <>
      <ShelterNavbar />
      <section className="hero-section-inner">
        <div className="container">
          <h1 className="section-title">Adoption Application</h1>
          <p>You are one step closer to finding your new best friend.</p>
        </div>
      </section>

      <section className="checkout-container py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10">
              <div className="checkout-form">
                <h2 className="checkout-title">Your Information</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group form-group-half">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group form-group-half">
                      <label htmlFor="zip">ZIP Code</label>
                      <input
                        type="text"
                        id="zip"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="order-summary">
                <h3>Pet Summary</h3>
                <div className="summary-item">
                  <img src={pet.image} alt={pet.name} />
                  <div className="summary-item-details">
                    <h4>{pet.name}</h4>
                    <p>Breed: {pet.breed}</p>
                    <p>Age: {pet.age}</p>
                    <p>Gender: {pet.gender}</p>
                  </div>
                </div>
                <button className="btn btn-primary btn-lg btn-block btn-place-order mt-4">
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AdoptionPage;
