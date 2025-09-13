import React, { useState, useEffect } from "react";
import petsData from "../data/adoptablePets.json";
import "../css/shelterAdopt.css";
import ShelterNavbar from "../components/ShelterNavbar";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";

function ShelterAdopt() {
  const [availablePets, setAvailablePets] = useState([]);
  const [filters, setFilters] = useState({ type: [], breed: [], gender: "" });

  useEffect(() => {
    setAvailablePets(petsData.pets);
  }, []);

  function handleFilterChange(e, filterType) {
    const value = e.target.value;

    if (filterType === "gender") {
      setFilters({ ...filters, gender: value });
    } else {
      if (e.target.checked) {
        setFilters({
          ...filters,
          [filterType]: [...filters[filterType], value],
        });
      } else {
        setFilters({
          ...filters,
          [filterType]: filters[filterType].filter((v) => v !== value),
        });
      }
    }
  }

  function clearFilters() {
    setFilters({ type: [], breed: [], gender: "" });
  }

  const filteredPets = availablePets.filter((pet) => {
    const typeMatch =
      filters.type.length === 0 || filters.type.includes(pet.type);
    const breedMatch =
      filters.breed.length === 0 || filters.breed.includes(pet.breed);
    const genderMatch = filters.gender === "" || filters.gender === pet.gender;
    return typeMatch && breedMatch && genderMatch;
  });

  const breeds = [...new Set(availablePets.map((pet) => pet.breed))];
  const types = [...new Set(availablePets.map((pet) => pet.type))];
  const genders = [...new Set(availablePets.map((pet) => pet.gender))];

  return (
    <>
      <ShelterNavbar />
      <section className="hero-section-inner">
        <div className="container">
          <h1 className="section-title">Adopt a Pet</h1>
          <p>Find your perfect companion.</p>
        </div>
      </section>

      <section className="products-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="filter-sidebar">
                <div className="filter-header">
                  <h3>Filters</h3>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={clearFilters}
                  >
                    Reset
                  </button>
                </div>

                <div className="filter-section">
                  <h5 className="filter-title">Animal</h5>
                  <div className="filter-options">
                    {types.map((t) => (
                      <div className="form-check" key={t}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={t}
                          checked={filters.type.includes(t)}
                          onChange={(e) => handleFilterChange(e, "type")}
                        />
                        <label className="form-check-label">{t}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h5 className="filter-title">Breed</h5>
                  <div className="filter-options">
                    {breeds.map((b) => (
                      <div className="form-check" key={b}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={b}
                          checked={filters.breed.includes(b)}
                          onChange={(e) => handleFilterChange(e, "breed")}
                        />
                        <label className="form-check-label">{b}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h5 className="filter-title">Gender</h5>
                  <div className="filter-options">
                    {genders.map((g) => (
                      <div className="form-check" key={g}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value={g}
                          checked={filters.gender === g}
                          onChange={(e) => handleFilterChange(e, "gender")}
                        />
                        <label className="form-check-label">{g}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row product-list">
                {filteredPets.length > 0 ? (
                  filteredPets.map((pet) => (
                    <div key={pet.id} className="col-lg-4">
                      <div className="card">
                        <div
                          className="placeholder-box"
                          style={{ backgroundImage: `url(${pet.image})` }}
                        ></div>
                        <div className="card-body">
                          <h5 className="card-title">{pet.name}</h5>
                          <p className="card-text">{pet.description}</p>
                          <ul className="list-unstyled">
                            <li>
                              <strong>Age:</strong> {pet.age}
                            </li>
                            <li>
                              <strong>Breed:</strong> {pet.breed}
                            </li>
                            <li>
                              <strong>Gender:</strong> {pet.gender}
                            </li>
                          </ul>
                          <Link to={`/adopt/${pet.id}`} className="btn btn-primary">Adopt Me</Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No pets match your filters. Try adjusting them!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ShelterAdopt;
