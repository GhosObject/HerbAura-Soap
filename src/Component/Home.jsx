import "./Home.css";
import products from "../Data/product";

function Home() {
  // Home page par Aloe Vera, Neem aur Honey Soap dikhayenge
  const featuredProducts = products.filter((product) =>
    [1, 3, 5].includes(product.id),
  );

  return (
    <main className="home-page">
      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">
        {/* Hero Background Image */}
        <div className="hero-image">
          {featuredProducts[0] && (
            <img
              src={featuredProducts[0].image}
              alt={featuredProducts[0].name}
              className={
                featuredProducts[0].ingredients === "Neem"
                  ? "neem-product-image"
                  : undefined
              }
            />
          )}
        </div>

        {/* Hero Content */}
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tag">HANDMADE • NATURAL • HERBAL</span>

            <h1>
              Nature's Care,
              <br />
              <span>Made By Hand.</span>
            </h1>

            <p>
              Discover handmade soaps and natural care products, thoughtfully
              crafted with simple and carefully selected ingredients.
            </p>

            <div className="hero-buttons">
              <a href="/products" className="primary-btn">
                Explore Products
                <span>↗</span>
              </a>

              <a href="/contact" className="secondary-btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="features-section">
        <div className="feature">
          <div className="feature-icon">🌿</div>

          <div>
            <h3>Natural Ingredients</h3>
            <p>Carefully selected ingredients</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">🤲</div>

          <div>
            <h3>Handmade With Care</h3>
            <p>Made in small batches</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">✨</div>

          <div>
            <h3>Simple & Pure</h3>
            <p>Made for everyday care</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            {featuredProducts[1] && (
              <img
                src={featuredProducts[1].image}
                alt={featuredProducts[1].name}
                className={
                  featuredProducts[1].ingredients === "Neem"
                    ? "neem-product-image"
                    : undefined
                }
              />
            )}
          </div>

          <div className="about-content">
            <span className="section-label">ABOUT HERBAURA</span>

            <h2>
              A little piece of
              <br />
              <span>nature in every bar.</span>
            </h2>

            <p>
              At HerbAura, we believe that everyday self-care should feel
              simple, natural and special.
            </p>

            <p>
              Our products are thoughtfully made in small batches, bringing
              together nature, care and craftsmanship.
            </p>

            <a href="/contact" className="story-btn">
              Discover Our Story
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="featured-section">
        <div className="section-heading">
          <span className="section-label">OUR COLLECTION</span>

          <h2>
            Made with <span>nature.</span>
          </h2>

          <p>A few of our handmade favourites.</p>
        </div>

        <div className="featured-products">
          {featuredProducts.map((product) => (
            <a
              href={`/products/${product.id}`}
              className="featured-card"
              key={product.id}
            >
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className={
                    product.ingredients === "Neem"
                      ? "neem-product-image"
                      : undefined
                  }
                />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <span className="view-product">View Product →</span>
              </div>
            </a>
          ))}
        </div>

        <a href="/products" className="all-products-btn">
          View All Products
          <span>↗</span>
        </a>
      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="home-cta">
        <div className="cta-content">
          <span>YOUR NATURAL SELF-CARE JOURNEY</span>

          <h2>
            Bring nature into
            <br />
            your everyday care.
          </h2>

          <p>
            Explore HerbAura and discover handmade care created with simplicity
            and love.
          </p>

          <a href="/products" className="cta-btn">
            Shop Now
            <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
