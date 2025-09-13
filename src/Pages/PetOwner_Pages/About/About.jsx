import "../Home/Home.css";
import "../../../Styling/style.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import Erioluwa from "../../../../src/assets/TeamImages/Erioluwa.jpg";
import Adam from "../../../../src/assets/TeamImages/Adam.jpg";
import Micheal from "../../../../src/assets/TeamImages/Micheal.jpg";
import Felami from "../../../../src/assets/TeamImages/Felami.jpg";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <Navbar />
      {/* <!-- About Hero section --> */}
      <section class="hero-section-inner">
        <div class="container">
          <h1 class="section-title">About Us</h1>
          <p>
            <Link to={"/Home"} className="hero-links">
              Home
            </Link>
            <span> / </span>
            <Link to={"/About"} className="hero-links">
              About
            </Link>
          </p>
        </div>
      </section>
      {/* <!-- End of hero section --> */}

      {/* <!-- About the team section --> */}
      <div class="meet-the-team">
        <section class="furr-team-section">
          <div class="furr-team-container">
            <div class="furr-team-header">
              <h2 class="furr-team-title">Meet the Team</h2>
            </div>

            <div class="furr-team-members">
              <div class="furr-team-member">
                <img
                  src={Erioluwa}
                  alt="Dr. Sarah Johnson"
                  class="furr-member-image"
                />
                <h3 class="furr-member-name">Amole Erioluwa</h3>
                <p class="furr-member-role">Software Developer</p>
                <p class="furr-member-details">
                  Hi, my name is Erioluwa, and I'm a Front-end developer with a
                  passion for creating visually appealing and responsive web
                  applications. I specialize in HTML, CSS, JavaScript, and
                  React, focusing on intuitive interfaces that deliver smooth
                  user experiences across all devices.
                </p>
                <div class="furr-member-social">
                  <a href="#" class="furr-social-icon">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" class="furr-social-icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="furr-social-icon">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>

              <div class="furr-team-member">
                <img
                  src={Micheal}
                  alt="Michael Rodriguez"
                  class="furr-member-image"
                />
                <h3 class="furr-member-name">Bello Oluwatimileyin</h3>
                <p class="furr-member-role">Full-stack Developer </p>
                <p class="furr-member-details">
                  Hi, my name is Micheal, and I'm a developer who loves solving
                  problems through clean and efficient code. I specialize in
                  JavaScript, TypeScript, and Vue, and I enjoy turning complex
                  concepts into simple, user-friendly features that make
                  applications truly stand out
                </p>
                <div class="furr-member-social">
                  <a href="https://instagram.com" class="furr-social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://facebook.com" class="furr-social-icon">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://wa.me/07044270194" class="furr-social-icon">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>

              <div class="furr-team-member">
                <img src={Adam} alt="Emily Chen" class="furr-member-image" />
                <h3 class="furr-member-name">Obasanjo Adam</h3>
                <p class="furr-member-role">Frontend Developer</p>
                <p class="furr-member-details">
                  Hi, my name is Adam, and I'm a software developer driven by a
                  passion for combining design and technology. I specialize in
                  HTML, CSS, React, C++, Python and responsive design, ensuring
                  every project is accessible, usable, and inclusive for all
                  users.
                </p>
                <div class="furr-member-social">
                  <a href="https://instagram.com" class="furr-social-icon">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://tiktok.com" class="furr-social-icon">
                    <i class="fab fa-tiktok"></i>
                  </a>
                  <a href="https://wa.me/07044270194" class="furr-social-icon">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>

              <div class="furr-team-member">
                <img src={Felami} alt="David Kim" class="furr-member-image" />
                <h3 class="furr-member-name">Felami Olaniyan</h3>
                <p class="furr-member-role">Backend Developer</p>
                <p class="furr-member-details">
                  Hi, my name is Olufelami, and I'm a developer with an eye for
                  detail and a love for API's and databases. I specialize in
                  Node.js, Next.js, and modern CSS frameworks, focusing on
                  performance,seamless backend development.
                </p>
                <div class="furr-member-social">
                  <a href="https://linkedin.com" class="furr-social-icon">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="furr-social-icon"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://wa.me/07044270194" class="furr-social-icon">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- End of About the team section --> */}

      {/* <!-- Pet care services --> */}

      <section class="pet-services-container">
        <i class="fas fa-paw decoration decoration-1"></i>
        <i class="fas fa-heart decoration decoration-2"></i>

        <div class="pet-services-content">
          <div class="pet-services-header">
            <h1 class="pet-services-title">OUR CARING PET CARE SERVICES</h1>
            <h2 class="furr-petcare-preheading">
              Choose the right care for your pet
            </h2>
            <p class="pet-services-description">
              At FurEver Care, we offer a range of veterinary and wellness
              services for pets and their families. Each plan is designed to
              give your companion the best care and support.
            </p>
            <Link to={"/PetCare"} class="pet-services-cta btn btn-primary">
              Learn More
            </Link>
          </div>

          <div class="pet-services-features">
            <div class="pet-service-card">
              <div class="service-icon">
                <i class="fas fa-heartbeat"></i>
              </div>
              <h3 class="service-title">Caring support</h3>
              <p class="service-description">
                Loving, attentive care for your pet's health and happiness
              </p>
            </div>

            <div class="pet-service-card">
              <div class="service-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3 class="service-title">Easy access</h3>
              <p class="service-description">
                Veterinary services located close and easy to reach
              </p>
            </div>

            <div class="pet-service-card">
              <div class="service-icon">
                <i class="fas fa-pills"></i>
              </div>
              <h3 class="service-title">Pet medicine</h3>
              <p class="service-description">
                Safe, effective medicines tailored to your pet's needs
              </p>
            </div>

            <div class="pet-service-card">
              <div class="service-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3 class="service-title">Pest shield</h3>
              <p class="service-description">
                Preventive treatments keep pets free of parasites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End of pet care services --> */}

      <Footer />
    </>
  );
}
export default About;
