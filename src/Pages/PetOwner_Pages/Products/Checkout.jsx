import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import products from "./products.json";
import "./Checkout.css";
import { Link } from "react-router-dom";
function Checkout() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const currentProduct = products.find((p) => p.product_id === parseInt(id));
    setProduct(currentProduct);
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const totalAmount = product.amount * quantity;

  return (
    <>
      <Navbar />
      <section className="hero-section-inner">
        <div className="container">
          <h1 className="section-title">Checkout</h1>
          <p>
            <Link to={"/Home"} className="hero-links">
              Home
            </Link>
            <span> / </span>
            <Link to={"/Products"} className="hero-links">
              Product
            </Link>
            <span> / </span>
            <Link
              to={`/product-details/${product.product_id}`}
              className="hero-links"
            >
              Product Details
            </Link>
            <span> / </span>
            <Link to={"/checkout/:id"} className="hero-links">
              Checkout
            </Link>
          </p>
        </div>
      </section>

      <section className="checkout-container py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10">
              <div className="checkout-form">
                <h2 className="checkout-title">Billing Information</h2>
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
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="summary-item">
                  <img src={product.image} alt={product.product_name} />
                  <div className="summary-item-details">
                    <h4>{product.product_name}</h4>
                    <p>Price: ₦{product.amount}</p>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    className="form-control"
                    value={quantity}
                    min="1"
                    onChange={handleQuantityChange}
                  />
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <span>₦{totalAmount}</span>
                </div>
                <button className="btn btn-primary btn-lg btn-block btn-place-order mt-4">
                  Place Order
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

export default Checkout;
