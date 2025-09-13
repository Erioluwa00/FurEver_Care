import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import "../../../Styling/style.css";
import products from "./products.json";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const currentProduct = products.find((p) => p.product_id === parseInt(id));
    setProduct(currentProduct);

    if (currentProduct) {
      const related = products.filter(
        (p) =>
          (p.category === currentProduct.category ||
            p.pet_type === currentProduct.pet_type) &&
          p.product_id !== currentProduct.product_id
      );
      setRelatedProducts(related.slice(0, 4));
    }
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />

      <section className="hero-section-inner">
        <div className="container">
          <h1 className="section-title">Product Details</h1>
          <p>
            <Link to={"/Home"} className="hero-links">
              Home
            </Link>
            <span> / </span>
            <Link to={"/Products"} className="hero-links">
              Products
            </Link>
            <span> / </span>
            <Link
              to={`/product-details/${product.product_id}`}
              className="hero-links"
            >
              Product Details
            </Link>
          </p>
        </div>
      </section>

      {/* <!-- Product Content Section --> */}
      <section className="product-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {product.image ? (
                <div
                  className="placeholder-box"
                  style={{
                    height: "400px",
                    backgroundImage: `url(${product.image})`,
                  }}
                ></div>
              ) : (
                <div
                  className="placeholder-box"
                  style={{ height: "400px" }}
                ></div>
              )}
            </div>
            <div className="col-md-6">
              <h2 className="mb-3">{product.product_name}</h2>
              <p className="lead font-weight-bold">₦{product.amount}</p>
              <p>{product.description}</p>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  className="form-control form-control-pill"
                  defaultValue="1"
                  min="1"
                />
              </div>
              <Link
                to={`/checkout/${product.product_id}`}
                className="btn btn-primary btn-lg"
                style={{ marginRight: "5px" }}
              >
                Buy now
              </Link>
              <Link
                to="/products"
                className="btn btn-outline-primary btn-lg ml-2"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Related Products Section --> */}
      <section className="related-products py-5 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-5">Related Products</h2>
          <div className="row">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.product_id} className="col-md-3">
                <div className="card">
                  {relatedProduct.image ? (
                    <div
                      className="placeholder-box"
                      style={{
                        backgroundImage: `url(${relatedProduct.image})`,
                      }}
                    ></div>
                  ) : (
                    <div className="placeholder-box"></div>
                  )}
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {relatedProduct.product_name}
                    </h5>
                    <p className="card-text text-muted">
                      {relatedProduct.description}
                    </p>
                    <p className="font-weight-bold">₦{relatedProduct.amount}</p>
                    <Link
                      to={`/product-details/${relatedProduct.product_id}`}
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

      <Footer />
    </>
  );
}

export default ProductDetails;
