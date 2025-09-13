import { useEffect, useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import "../../../Styling/style.css";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [location, setLocation] = useState("Fetching location...");
  const [latlon, setLatlon] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lon = pos.coords.longitude.toFixed(4);
          setLatlon(`Lat: ${lat}, Lon: ${lon}`)

          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
            );
            const data = await res.json();

            if (data && data.address) {
              const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.hamlet ||
                "Unknown City";
              const country = data.address.country || "Unknown Country";
              setLocation(`${city}, ${country}`);
            } else {
              setLocation("Unable to fetch location name");
            }
          } catch (err) {
            setLocation("Unable to fetch location");
          }
        },
        () => setLocation("Location access denied")
      );
    } else {
      setLocation("Geolocation not supported");
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <section className="hero-section-inner">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p>
          <Link to={'/Home'} className='hero-links'>Home</Link>
          <span>  /  </span>
           <Link to={'/Contact'} className='hero-links'>Contact</Link>
        </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-container">
          <section className="contact-info-section">
            <div className="contact-info-container">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="contact-info-heading">Our Location</h3>
                <p className="contact-info-detail">
                  Modupe Building 
                  <br />
                  Aptech Ibadan, Nigeria
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
                  />
                </div>
              </div>

              {/* Contact Card */}
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="contact-info-heading">Contact Us</h3>
                <p className="contact-info-detail">
         
                  <a href="tel:+18005551234">07044270194</a>
                  <br />
                  <a href="tel:+12165551234">09052069230</a>
                  <br />
                  <a href="tel:+12165551234">07080445417</a>
                  <br />
                  <a href="tel:+12165551234">09057060106</a>
                </p>
                <p className="contact-info-detail">
                  <a href="mailto:info@furrpetcare.com">erioluwamole12@gmail.com</a>
                  <br />
                  <a href="mailto:support@furrpetcare.com">
                   michealtimileyin@gmail.com
                  </a>
                   <br />
                   <a href="mailto:support@furrpetcare.com">
                   Olaniyanolufelami@gmail.com
                  </a>
                   <br />
                     <a href="mailto:support@furrpetcare.com">
                       amrajadamobasanjo5@gmail.com
                  </a>
                </p>

                   
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="contact-info-heading">Real Time</h3>
                <p className="contact-info-detail">
                  <a className='contact-time'>{time}</a>
                  <br />
                  <a>{location}</a>
                  <br />
                  <a>{latlon}</a>
                </p>

                <div className="contact-info-box">
                  <h4>Business Hours</h4>
                  <p>
                    Mon-Fri: 8:00 AM - 8:00 PM
                    <br />
                    Sat: 9:00 AM - 5:00 PM
                    <br />
                    Sun: 10:00 AM - 4:00 PM
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

export default Contact;
