import { Link } from "react-router-dom";
import "./Home.css";
import "../../../Styling/style.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import products from "../Products/products.json";
import HealthTips from "../PetCare/PetCare_Pages/Health_Tips/HealthTips";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [petName, setPetName] = useState("Bingo");

  useEffect(() => {
    setFeaturedProducts(products.slice(0, 6));

    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      if (userData.petName) {
        setPetName(userData.petName);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* <!-- Hero Section --> */}
        <section className="hero-section">
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url("https://s3.amazonaws.com/static.organiclead.com/Site-4f92eb08-9ec5-4fe8-98f5-8144b3e0d631/Homepage_Slides/dog_2_cats_grass.png")`,
            }}
      
          >
            <div className="container">
              <h1>Welcome To FurEver Care {petName}</h1>
              <p>Everything your pet deserves, all in one spot.</p>
              <Link to="/products" className="btn btn-primary">
                Shop All Products
              </Link>
            </div>
          </div>
        </section>

        {/* <!-- Whom do you need section --> */}

        <div className="whom-need-container">
          <section className="whom-need-section">
            <h2 className="whom-need-title">What do you need?</h2>

            <div className="whom-need-grid">
              <Link to={"/Petcare/HealthTips"} className="whom-need-card-link">
                <div className="whom-need-card">
                  <div className="whom-need-icon">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div className="whom-need-content">
                    <h3 className="whom-need-name">Health Tips</h3>
                    <p className="whom-need-description">
                      Professional healthcare for your pet's well-being
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                to={"/Petcare/TrainingTips"}
                className="whom-need-card-link"
              >
                <div className="whom-need-card">
                  <div className="whom-need-icon">
                    <i className="fas fa-paw"></i>
                  </div>
                  <div className="whom-need-content">
                    <h3 className="whom-need-name">Training Tips</h3>
                    <p className="whom-need-description">
                      Keep your pet looking and feeling their best
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"/Emergency"} className="whom-need-card-link">
                <div className="whom-need-card">
                  <div className="whom-need-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <div className="whom-need-content">
                    <h3 className="whom-need-name">Emergency Hotlines</h3>
                    <p className="whom-need-description">
                      A safe and fun environment for your pet
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"/Products"} className="whom-need-card-link">
                <div className="whom-need-card">
                  <div className="whom-need-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="whom-need-content">
                    <h3 className="whom-need-name">Pet Products</h3>
                    <p className="whom-need-description">
                      Quality products for all your pet's needs
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* <!-- Featured Products Section --> */}
        <section className="popular-destinations py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">
              Featured Products
            </h2>
            <div className="row product-list">
              {featuredProducts.map((product) => (
                <div
                  key={product.product_id}
                  className="col-lg-4"
                  data-category={product.category}
                  data-pettype={product.pet_type}
                >
                  <div className="card">
                    {product.image ? (
                      <div
                        className="placeholder-box"
                        style={{
                          backgroundImage: `url(${product.image})`,
                        }}
                      ></div>
                    ) : (
                      <div className="placeholder-box"></div>
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{product.product_name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="font-weight-bold">₦{product.amount}</p>
                      <Link
                        to={`/product-details/${product.product_id}`}
                        className="btn btn-outline-primary"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <!-- Caring for every companion --> */}
        <div className="caring_for_companion">
          <section className="furr-petcare-container">
            <div className="furr-petcare-content">
              <div className="furr-petcare-image"></div>

              <div className="furr-petcare-text">
                <p className="furr-petcare-preheading">
                  Caring For Every Companion
                </p>
                <h2 className="furr-petcare-heading">
                  We nurture your pet's well-being
                </h2>
                <p className="furr-petcare-description">
                  At FurEver care, we provide heartfelt care for pets and
                  families. Our team supports every stage of your pet's life.
                </p>

                <div className="furr-petcare-stats">
                  <div className="furr-petcare-stat">
                    <div className="furr-petcare-stat-number">99+</div>
                    <div className="furr-petcare-stat-text">Years caring</div>
                  </div>

                  <div className="furr-petcare-stat">
                    <div className="furr-petcare-stat-number">200+</div>
                    <div className="furr-petcare-stat-text">Happy pets</div>
                  </div>

                  <div className="furr-petcare-stat">
                    <div className="furr-petcare-stat-number">80+</div>
                    <div className="furr-petcare-stat-text">Expert staff</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- End of Caring for every companion --> */}

        {/* <!-- Mini-contact-section --> */}
        <section className="pet-care-cta-container">
          <div className="pet-care-cta-background">
            <i className="fas fa-paw pet-care-cta-paw paw-1"></i>
            <i className="fas fa-paw pet-care-cta-paw paw-2"></i>
            <i className="fas fa-paw pet-care-cta-paw paw-3"></i>
            <i className="fas fa-paw pet-care-cta-paw paw-4"></i>

            <div className="pet-care-cta-content">
              <p className="pet-care-cta-heading">
                Give your pet the care they
                <br />
                deserve today
              </p>
              <Link
                to={"/Contact"}
                className="btn btn-primary pet-care-cta-button"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- End of Mini-contact-section --> */}

        {/* <!-- Testimonials --> */}
        <section className="caring-hearts-section">
          <div className="caring-hearts-header">
            <h1 className="caring-hearts-title">
              Kind words from loving families
            </h1>
          </div>

          <div className="caring-hearts-testimonials">
            <div className="caring-hearts-testimonial">
              <i className="fas fa-quote-right caring-hearts-quote"></i>
              <div className="caring-hearts-client">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                  alt="Rachel Bennett"
                  className="caring-hearts-avatar"
                />
                <div className="caring-hearts-client-info">
                  <h3 className="caring-hearts-client-name">Rachel Bennett</h3>
                  <p className="caring-hearts-client-location">
                    <i className="fas fa-map-marker-alt caring-hearts-location-icon"></i>
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
              <p className="caring-hearts-text">
                FurEver Care's gentle approach and thoughtful service helped us
                say goodbye with love and dignity. We are so thankful.
              </p>
            </div>

            <div className="caring-hearts-testimonial">
              <i className="fas fa-quote-right caring-hearts-quote"></i>
              <div className="caring-hearts-client">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                  alt="Samantha Reed"
                  className="caring-hearts-avatar"
                />
                <div className="caring-hearts-client-info">
                  <h3 className="caring-hearts-client-name">Samantha Reed</h3>
                  <p className="caring-hearts-client-location">
                    <i className="fas fa-map-marker-alt caring-hearts-location-icon"></i>
                    Ogun, Nigeria
                  </p>
                </div>
              </div>
              <p className="caring-hearts-text">
                We felt supported and understood at FurEver Care during a
                difficult time.
              </p>
            </div>

            <div className="caring-hearts-testimonial">
              <i className="fas fa-quote-right caring-hearts-quote"></i>
              <div className="caring-hearts-client">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                  alt="Eva Robinson"
                  className="caring-hearts-avatar"
                />
                <div className="caring-hearts-client-info">
                  <h3 className="caring-hearts-client-name">Eva Robinson</h3>
                  <p className="caring-hearts-client-location">
                    <i className="fas fa-map-marker-alt caring-hearts-location-icon"></i>
                    Oyo, Nigeria
                  </p>
                </div>
              </div>
              <p className="caring-hearts-text">
                Our cat received gentle, expert care at FurEver Care. The
                staff's kindness, compassion, and medical skill made all the
                difference for our family.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- End testimonials --> */}

        <Footer />
      </main>
    </>
  );
}

export default Home;
