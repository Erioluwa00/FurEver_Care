import Footer from "../../../Components/Footer/Footer";
import ShelterNavbar from "../components/ShelterNavbar";
import "../css/shelterContact.css";

function ShelterContact() {
  return (
    <>
      <ShelterNavbar />
      <section className="hero-section-inner">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </div>
      </section>

      <div className="container">
        <div className="contact-container">
          <section className="contact-info-section">
            <h2 className="contact-info-title">Contact Our Shelter</h2>

            <div className="contact-info-container">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="contact-info-heading">Our Location</h3>
                <p className="contact-info-detail">
                  456 Animal Shelter Lane
                  <br />
                  Springfield, IL 62702
                </p>

                <div className="contact-info-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413.01452070107365!2d3.888053466067621!3d7.397654814273062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d6a657b14c9%3A0xb43849f101727e38!2sAptech%20Ibadan!5e0!3m2!1sen!2s!4v1757671457572!5m2!1sen!2s"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="contact-info-heading">Contact Us</h3>
                <p className="contact-info-detail">
                  <a href="mailto:info@furevershelter.com">
                    info@furevershelter.com
                  </a>
                  <br />
                  <a href="mailto:support@furevershelter.com">
                    support@furevershelter.com
                  </a>
                  <br />
                  <a href="tel:+18005555678">+234 (800) 555-5678</a>
                </p>

                <div className="contact-info-box">
                  <h4>Response Time</h4>
                  <p>We typically respond to all emails within 48 hours.</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="contact-info-heading">Our Hours</h3>
                <p>
                  Mon-Sat: 10:00 AM - 6:00 PM
                  <br />
                  Sun: 12:00 PM - 4:00 PM
                  <br />
                  Sun: 12:00 PM - 4:00 PM
                </p>
                <div className="contact-info-box">
                  <h4>Business Hours</h4>
                  <p>
                    Mon-Sat: 10:00 AM - 6:00 PM
                    <br />
                    Sun: 12:00 PM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ShelterContact;
