import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "./CartContext";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const { cartItems, cartCount, cartTotal, clearCart } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrderNumber = "HA" + Math.floor(100000 + Math.random() * 900000);

    setOrderNumber(newOrderNumber);
    setOrderPlaced(true);

    clearCart();
  };

  /* Empty Cart */

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <main className="checkout-page">
        <div className="checkout-empty">
          <div className="checkout-empty-icon">🛒</div>

          <h1>Your Cart Is Empty</h1>

          <p>Please add a product before proceeding to checkout.</p>

          <Link to="/products">Explore Products →</Link>
        </div>
      </main>
    );
  }

  /* Order Success */

  if (orderPlaced) {
    return (
      <main className="checkout-page">
        <section className="order-success">
          <div className="success-icon">✓</div>

          <span>DEMO ORDER</span>

          <h1>Order Placed Successfully!</h1>

          <p>Thank you, {formData.name}. Your demo order has been received.</p>

          <div className="order-number">
            <span>Order Number</span>

            <strong>#{orderNumber}</strong>
          </div>

          <div className="success-info">
            <div>
              <span>Mobile</span>
              <strong>+91 {formData.mobile}</strong>
            </div>

            <div>
              <span>Total</span>
              <strong>₹{cartTotal}</strong>
            </div>
          </div>

          <p className="demo-note">
            This is a demo order. No real payment has been processed.
          </p>

          <div className="success-buttons">
            <Link to="/products">Continue Shopping</Link>

            <Link to="/">Go Home</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      {/* Header */}

      <section className="checkout-header">
        <span>HERBAURA CHECKOUT</span>

        <h1>Complete Your Order</h1>

        <p>Fill in your details to place a demo order.</p>
      </section>

      {/* Checkout */}

      <section className="checkout-container">
        {/* Customer Form */}

        <div className="checkout-form-box">
          <div className="checkout-title">
            <span>01</span>

            <div>
              <h2>Customer Details</h2>

              <p>Enter your delivery information.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="checkout-form-row">
              <div className="checkout-group">
                <label htmlFor="name">Full Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checkout-group">
                <label htmlFor="mobile">Mobile Number</label>

                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="10 digit mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
              </div>
            </div>

            <div className="checkout-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="checkout-group">
              <label htmlFor="address">Full Address</label>

              <textarea
                id="address"
                name="address"
                rows="4"
                placeholder="House number, street, area..."
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="checkout-form-row">
              <div className="checkout-group">
                <label htmlFor="city">City</label>

                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checkout-group">
                <label htmlFor="pincode">PIN Code</label>

                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  placeholder="6 digit PIN code"
                  value={formData.pincode}
                  onChange={handleChange}
                  pattern="[0-9]{6}"
                  maxLength="6"
                  required
                />
              </div>
            </div>

            {/* Payment */}

            <div className="checkout-title payment-title">
              <span>02</span>

              <div>
                <h2>Payment Method</h2>

                <p>Demo payment method.</p>
              </div>
            </div>

            <div className="demo-payment">
              <div className="demo-payment-icon">💵</div>

              <div>
                <strong>Cash on Delivery</strong>

                <p>Demo mode — no real payment required.</p>
              </div>

              <span className="selected-check">✓</span>
            </div>

            <button type="submit" className="place-order-btn">
              Place Demo Order
              <span>↗</span>
            </button>
          </form>
        </div>

        {/* Order Summary */}

        <aside className="checkout-summary">
          <span className="summary-label">YOUR ORDER</span>

          <h2>Order Summary</h2>

          <div className="checkout-items">
            {cartItems.map((item) => (
              <div className="checkout-item" key={item.id}>
                <div className="checkout-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={
                      item.ingredients === "Neem"
                        ? "neem-product-image"
                        : undefined
                    }
                  />

                  <span>{item.quantity}</span>
                </div>

                <div className="checkout-item-info">
                  <strong>{item.name}</strong>

                  <span>{item.size}</span>
                </div>

                <strong className="checkout-item-price">
                  ₹{item.price * item.quantity}
                </strong>
              </div>
            ))}
          </div>

          <div className="checkout-line"></div>

          <div className="checkout-summary-row">
            <span>Products</span>

            <strong>{cartCount}</strong>
          </div>

          <div className="checkout-summary-row">
            <span>Subtotal</span>

            <strong>₹{cartTotal}</strong>
          </div>

          <div className="checkout-summary-row">
            <span>Delivery</span>

            <strong className="free-text">FREE</strong>
          </div>

          <div className="checkout-line"></div>

          <div className="checkout-total">
            <span>Total</span>

            <strong>₹{cartTotal}</strong>
          </div>

          <div className="checkout-secure">🔒 Secure Demo Checkout</div>
        </aside>
      </section>
    </main>
  );
}

export default Checkout;
