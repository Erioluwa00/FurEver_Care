import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import "../Contact/Contact.css";
import "../../../Styling/style.css";
import { Link } from "react-router-dom";
function Emergency() {
  return (
    <>
      <Navbar />
      {/* <!-- Emergency Hero Section --> */}
      <section class="hero-section-inner">
        <div class="container">
          <h1 class="section-title">Emergency Contacts</h1>
          <p>
            <Link to={"/Home"} className="hero-links">
              Home
            </Link>
            <span> / </span>
            <Link to={"/Emergency"} className="hero-links">
              Emergency
            </Link>
          </p>
        </div>
      </section>

      {/* <!-- Emergency Contacts Table Section --> */}
      <section class="emergency-contacts py-5">
        <div class="container">
          <h2 class="section-title text-center mb-2">
            Emergency Veterinary Contacts
          </h2>
          <p class="text-center mb-4">
            In case of a pet emergency, quickly find a veterinarian near you.
            Click on the phone number to call directly.
          </p>
          <div class="table-responsive">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Vet's Name</th>
                  <th>Specialization</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dr. Alex Johnson</td>
                  <td>General Practice</td>
                  <td>123 Animal Rd, Petville</td>
                  <td>
                    <a href="tel:+15551234567">+234 (555) 123-4567</a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Dr. Sarah Lee</td>
                  <td>Emergency & Critical Care</td>
                  <td>456 Vet St, Animal City</td>
                  <td>
                    <a href="tel:+15552345678">+234 (555) 234-5678</a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dr. Michael Chen</td>
                  <td>Internal Medicine</td>
                  <td>789 Pet Ln, Furrytown</td>
                  <td>
                    <a href="tel:+15553456789">+234 (555) 345-6789</a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dr. Emily White</td>
                  <td>Surgery</td>
                  <td>101 Canine Ave, Dogsville</td>
                  <td>
                    <a href="tel:+15554567890">+1 (555) 456-7890</a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Dr. David Brown</td>
                  <td>Dermatology</td>
                  <td>202 Feline Blvd, Catsburg</td>
                  <td>
                    <a href="tel:+15555678901">+1 (555) 567-8901</a>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Dr. Jessica Green</td>
                  <td>Ophthalmology</td>
                  <td>303 Bird St, Aviantown</td>
                  <td>
                    <a href="tel:+15556789012">+1 (555) 678-9012</a>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Dr. Robert Black</td>
                  <td>Cardiology</td>
                  <td>404 Hoof Ln, Farmville</td>
                  <td>
                    <a href="tel:+15557890123">+1 (555) 789-0123</a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Dr. Laura King</td>
                  <td>Neurology</td>
                  <td>505 Scale Rd, Reptile City</td>
                  <td>
                    <a href="tel:+15558901234">+1 (555) 890-1234</a>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Dr. Chris Hall</td>
                  <td>Oncology</td>
                  <td>606 Exotic Way, Wildtown</td>
                  <td>
                    <a href="tel:+15559012345">+1 (555) 901-2345</a>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Dr. Olivia Martinez</td>
                  <td>Dentistry</td>
                  <td>707 Bark St, Woofville</td>
                  <td>
                    <a href="tel:+15550123456">+1 (555) 012-3456</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* <!-- Poisoning Hotlines Table Section --> */}
      <section class="emergency-contacts py-5">
        <div class="container">
          <h2 class="section-title text-center mb-2">
            Poison Hotlines Contacts
          </h2>
          <p class="text-center mb-4">
            In case of pet poisoning, quickly connect to a poison control
            hotline. Click the number to call directly.
          </p>
          <div class="table-responsive">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Pet Poison</th>
                  <th>Areas of Effects</th>
                  <th>Location (Ibadan)</th>
                  <th>Helpline</th>
                  <th>Quick Relief Drug & Dosage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Chocolate</td>
                  <td>Nervous system, heart</td>
                  <td>Bodija, Ibadan</td>
                  <td>
                    <a href="tel:+2347012345678">+234 701 234 5678</a>
                  </td>
                  <td>Activated charcoal - 1g/kg orally</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Rat Poison (Warfarin)</td>
                  <td>Blood clotting system</td>
                  <td>Dugbe, Ibadan</td>
                  <td>
                    <a href="tel:+2348023456789">+234 802 345 6789</a>
                  </td>
                  <td>Vitamin K - 5mg/kg orally</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Onions & Garlic</td>
                  <td>Red blood cells</td>
                  <td>Agbowo, Ibadan</td>
                  <td>
                    <a href="tel:+2348134567890">+234 813 456 7890</a>
                  </td>
                  <td>IV fluids, no specific antidote</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Xylitol (sweetener)</td>
                  <td>Liver, blood sugar levels</td>
                  <td>Challenge, Ibadan</td>
                  <td>
                    <a href="tel:+2347045678901">+234 704 567 8901</a>
                  </td>
                  <td>Dextrose solution - vet-administered</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Snail Bait (Metaldehyde)</td>
                  <td>Nervous system, muscles</td>
                  <td>Akobo, Ibadan</td>
                  <td>
                    <a href="tel:+2349056789012">+234 905 678 9012</a>
                  </td>
                  <td>Diazepam (for seizures) - vet only</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Grapes & Raisins</td>
                  <td>Kidneys</td>
                  <td>Orita-Mefa, Ibadan</td>
                  <td>
                    <a href="tel:+2348167890123">+234 816 789 0123</a>
                  </td>
                  <td>IV fluids vet-administered</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Alcohol</td>
                  <td>Liver, brain</td>
                  <td>Mokola, Ibadan</td>
                  <td>
                    <a href="tel:+2348078901234">+234 807 890 1234</a>
                  </td>
                  <td>Supportive care - keep warm & hydrated</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Paracetamol (human meds)</td>
                  <td>Liver, blood</td>
                  <td>Iwo Road, Ibadan</td>
                  <td>
                    <a href="tel:+2347089012345">+234 708 901 2345</a>
                  </td>
                  <td>N-acetylcysteine - vet-administered</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Palm Kernel Cake (aflatoxins)</td>
                  <td>Liver</td>
                  <td>Jericho, Ibadan</td>
                  <td>
                    <a href="tel:+2348090123456">+234 809 012 3456</a>
                  </td>
                  <td>Activated charcoal - 1g/kg orally</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Pesticides (Organophosphates)</td>
                  <td>Nervous system, breathing</td>
                  <td>Sango, Ibadan</td>
                  <td>
                    <a href="tel:+2348112345678">+234 811 234 5678</a>
                  </td>
                  <td>Atropine - vet-administered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="contact-container">
          <section className="contact-info-section">
            <h2 className="contact-info-title">Contact Us</h2>

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

              
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="contact-info-heading">Our Email</h3>
                <p className="contact-info-detail">
                  <a href="mailto:info@furrpetcare.com">
                    erioluwamole12@gmail.com
                  </a>
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
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="contact-info-heading">Phone Numbers</h3>
                <p className="contact-info-detail">
                  <a href="tel:+2347044270194">07044270194</a>
                  <br />
                  <a href="tel:+2349052069230">09052069230</a>
                  <br />
                  <a href="tel:+2347080445417">07080445417</a>
                  <br />
                  <a href="tel:+2349057060106">09057060106</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Emergency;
