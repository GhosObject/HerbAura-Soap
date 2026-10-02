import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../Data/product";
import "./Products.css";

function Products() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase().trim();

    return (
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      product.ingredients.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="products-page">
      {/* Header */}

      <section className="products-header">
        <div className="products-heading">
          <span>HERBAURA COLLECTION</span>

          <h1>
            Natural Care,
            <br />
            <strong>Made With Nature.</strong>
          </h1>

          <p>
            Explore our handmade soaps and natural care products, thoughtfully
            crafted for your everyday routine.
          </p>
        </div>

        {/* Search */}

        <div className="product-search">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}
        </div>
      </section>

      {/* Products */}

      <section className="products-section">
        <div className="products-top">
          <div>
            <span>OUR COLLECTION</span>

            <h2>{search ? "Search Results" : "Our Products"}</h2>
          </div>

          <p>{filteredProducts.length} products found</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <Link to={`/products/${product.id}`} className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={
                      product.ingredients === "Neem"
                        ? "neem-product-image"
                        : undefined
                    }
                  />
                </Link>

                <div className="product-card-content">
                  <span className="product-category">{product.category}</span>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="product-details">
                    <strong className="product-price">₹{product.price}</strong>

                    <span className="product-size">{product.size}</span>
                  </div>

                  <Link
                    to={`/products/${product.id}`}
                    className="view-product-btn"
                  >
                    View Product
                    <span>↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <div className="no-products-icon">🔍</div>

            <h3>Product not found</h3>

            <p>
              We couldn't find any product matching "<strong>{search}</strong>".
            </p>

            <button type="button" onClick={() => setSearch("")}>
              View All Products
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;
