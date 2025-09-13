import Footer from '../../../Components/Footer/Footer';
import Navbar from '../../../Components/Navbar/Navbar'
import '../../../Styling/style.css'
import { Link } from "react-router-dom";
function Feedback(){
    return(
        <>
        <Navbar/>
            {/* <!-- Contact Hero Section --> */}
    <section class="hero-section-inner">
      <div class="container">
        <h1 class="section-title">Feedback</h1>
       <p>
          <Link to={'/Home'} className='hero-links'>Home</Link>
          <span>  /  </span>
           <Link to={'/Feedback'} className='hero-links'>Feedback</Link>
        </p>
      </div>
    </section>

    {/* <!-- Contact Content Section --> */}
    <section class="contact-content py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="section-title mb-4">Send Us a Message</h2>
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control form-control-pill"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control form-control-pill"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  class="form-control form-control-pill"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div class="form-group">
                <label for="message">Feedback</label>
                <textarea
                  class="form-control form-control-txtarea"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-md-6">
            <img
              src="https://cdn.abcotvs.com/dip/images/12833627_1280x720-animals-pets.jpg"
              alt="Feedback image"
              class="img-fluid feedback-image"
            />
          </div>
        </div>
      </div>
    </section>
        <Footer/>
        </>
    )
}
export default Feedback;