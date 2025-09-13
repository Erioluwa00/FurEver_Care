import { Link } from "react-router-dom";
import VisitorsCount from "../VisitorsCount/VisitorsCount";

function Footer() {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <h5>About FurEver Care</h5>
              <p>
                Your all-in-one platform for pet wellness and community. We
                provide resources for pet owners, veterinarians, and shelters.
              </p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5>Quick Links</h5>
              <ul class="list-unstyled">
                <li>
                  <Link to={"/Home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/Products"}>Products</Link>
                </li>
                <li>
                  <Link to={"/PetCare"}>Pet Care</Link>
                </li>
                <li>
                  <Link to={"/About"}>About</Link>
                </li>
                <li>
                  <Link to={"/Contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5>Contact Us</h5>
              <ul class="list-unstyled">
                <li>
                  <i class="fas fa-map-marker-alt"></i> Modupe House, Aptech
                  Ibadan, Nigeria.
                </li>
                <li>
                  <i class="fas fa-phone"></i> +234 7044270194
                </li>
                <li>
                  <i class="fas fa-envelope"></i> erioluwamole12@gmail.com
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5>Newsletter</h5>
              <p>Subscribe for the latest news and offers.</p>
              <form>
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your email"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-6">
              <p>&copy; 2025 FurEver Care. All Rights Reserved.</p>
            </div>
            <div class="col-md-6 text-md-right">
              <ul class="list-inline social-icons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <VisitorsCount />
      </footer>
    </>
  );
}
export default Footer;
