import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

import "./Cart.css";

function Cart() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <main className="cart-page">
      {/* Header */}

      <section className="cart-header">
        <span>YOUR SHOPPING CART</span>

        <h1>Your Cart</h1>

        <p>Review your selected products before placing your order.</p>
      </section>

      {cartItems.length === 0 ? (
        /* Empty Cart */

        <section className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h2>Your cart is empty</h2>

          <p>You haven't added any products to your cart yet.</p>

          <Link to="/products">
            Explore Products <span>↗</span>
          </Link>
        </section>
      ) : (
        /* Cart */

        <section className="cart-container">
          {/* Products */}

          <div className="cart-products">
            <div className="cart-products-header">
              <h2>Cart Items</h2>

              <span>{cartCount} items</span>
            </div>

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                {/* Image */}

                <Link to={`/products/${item.id}`} className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={
                      item.ingredients === "Neem"
                        ? "neem-product-image"
                        : undefined
                    }
                  />
                </Link>

                {/* Details */}

                <div className="cart-item-details">
                  <span className="cart-item-category">{item.category}</span>

                  <Link to={`/products/${item.id}`} className="cart-item-name">
                    {item.name}
                  </Link>

                  <p>{item.size}</p>

                  <strong>₹{item.price}</strong>
                </div>

                {/* Quantity */}

                <div className="cart-quantity">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                {/* Item Total */}

                <div className="cart-item-total">
                  ₹{item.price * item.quantity}
                </div>

                {/* Remove */}

                <button
                  type="button"
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove product"
                >
                  ×
                </button>
              </div>
            ))}

            <button type="button" className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          {/* Summary */}

          <aside className="cart-summary">
            <span className="summary-label">ORDER SUMMARY</span>

            <h2>Summary</h2>

            <div className="summary-row">
              <span>Products</span>

              <strong>{cartCount}</strong>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>₹{cartTotal}</strong>
            </div>

            <div className="summary-row">
              <span>Delivery</span>

              <strong>Free</strong>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>

              <strong>₹{cartTotal}</strong>
            </div>

            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
              <span>↗</span>
            </Link>

            <Link to="/products" className="continue-shopping">
              ← Continue Shopping
            </Link>
          </aside>
        </section>
      )}
    </main>
  );
}

export default Cart;
