import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import products from "../Data/product";
import "./ProductDetail.css";
import { useCart } from "./CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product Not Found</h1>

        <p>Sorry, this product is not available.</p>

        <Link to="/products">← Back to Products</Link>
      </main>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2500);
  };

  const handleBuyNow = () => {
    alert(`Buying ${product.name}.\nQuantity: ${quantity}`);
  };

  return (
    <main className="product-detail-page">
      {/* Breadcrumb */}

      {showNotification && (
        <div className="cart-notification">
          <span className="notification-icon">✓</span>

          <div>
            <strong>Added to Cart</strong>
            <p>{product.name} cart me add ho gaya.</p>
          </div>

          <button type="button" onClick={() => setShowNotification(false)}>
            ×
          </button>
        </div>
      )}
      <div className="product-breadcrumb">
        <Link to="/">Home</Link>

        <span>/</span>

        <Link to="/products">Products</Link>

        <span>/</span>

        <strong>{product.name}</strong>
      </div>

      {/* Product */}

      <section className="product-detail">
        <div className="product-detail-image">
          <img
            src={product.image}
            alt={product.name}
            className={
              product.ingredients === "Neem" ? "neem-product-image" : undefined
            }
          />
        </div>

        <div className="product-detail-content">
          <span className="detail-category">{product.category}</span>

          <h1>{product.name}</h1>

          <div className="detail-price">₹{product.price}</div>

          <p className="detail-description">{product.description}</p>

          {/* Info */}

          <div className="product-info-list">
            <div className="info-row">
              <span>Ingredients</span>
              <strong>{product.ingredients}</strong>
            </div>

            <div className="info-row">
              <span>Size</span>
              <strong>{product.size}</strong>
            </div>

            <div className="info-row">
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>
          </div>

          {/* Quantity */}

          <div className="quantity-section">
            <span>Quantity</span>

            <div className="quantity-box">
              <button type="button" onClick={decreaseQuantity}>
                −
              </button>

              <span>{quantity}</span>

              <button type="button" onClick={increaseQuantity}>
                +
              </button>
            </div>
          </div>

          {/* Buttons */}

          <div className="detail-buttons">
            <button
              type="button"
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </button>

            <button
              type="button"
              className="buy-now-btn"
              onClick={handleBuyNow}
            >
              Buy Now
              <span>↗</span>
            </button>
          </div>

          {/* Notes */}

          <div className="product-note">
            <div>🌿 Handmade with care</div>

            <div>✨ Carefully selected ingredients</div>

            <div>📦 Secure packaging</div>
          </div>
        </div>
      </section>

      {/* Description */}

      <section className="detail-description-section">
        <span className="section-label">PRODUCT DETAILS</span>

        <h2>About {product.name}</h2>

        <p>{product.description}</p>

        <p>
          HerbAura products are thoughtfully crafted in small batches with
          carefully selected ingredients. We focus on creating simple, handmade
          products for your everyday self-care routine.
        </p>
      </section>

      {/* Back */}

      <div className="back-products">
        <Link to="/products">← Continue Shopping</Link>
      </div>
    </main>
  );
}

export default ProductDetail;
