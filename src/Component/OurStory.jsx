import { Link } from "react-router-dom";
import products from "../Data/product";
import "./OurStory.css";

function OurStory() {
  const storyImage = products[0];

  return (
    <main className="story-page">
      {/* Hero */}
      <section className="story-hero">
        <div className="story-hero-content">
          <span>OUR STORY</span>

          <h1>
            Made With Nature.
            <br />
            <strong>Made With Care.</strong>
          </h1>

          <p>
            HerbAura Soap is a handmade natural care brand created with a simple
            idea — bringing the goodness of nature into your everyday self-care
            routine.
          </p>
        </div>

        <div className="story-hero-image">
          {storyImage && <img src={storyImage.image} alt={storyImage.name} />}
        </div>
      </section>

      {/* Our Beginning */}
      <section className="story-beginning">
        <div className="story-image">
          <div className="story-image-box">🌿</div>
        </div>

        <div className="story-content">
          <span className="story-label">OUR BEGINNING</span>

          <h2>
            A Simple Idea,
            <br />
            <strong>Inspired By Nature.</strong>
          </h2>

          <p>
            HerbAura Soap ki journey ek simple thought se shuru hui — everyday
            care products ko natural, simple aur handmade feel ke saath banana.
          </p>

          <p>
            Hum carefully selected natural ingredients ke saath products create
            karte hain, jisse har product mein nature aur handmade care ka touch
            bana rahe.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="story-mission">
        <div className="mission-heading">
          <span>OUR PURPOSE</span>

          <h2>
            Natural Care For
            <br />
            <strong>Everyday Life.</strong>
          </h2>
        </div>

        <div className="mission-text">
          <p>
            Hamara purpose simple hai — natural ingredients aur thoughtful
            handmade care ko daily routine ka ek beautiful part banana.
          </p>

          <p>
            Hum unnecessary complexity ke bajay simple ingredients, careful
            preparation aur quality par focus karte hain.
          </p>
        </div>
      </section>

      {/* Ingredients */}
      <section className="ingredients-section">
        <div className="ingredients-heading">
          <span>FROM NATURE</span>

          <h2>
            Our Natural
            <br />
            <strong>Ingredients</strong>
          </h2>

          <p>
            Nature se inspired ingredients jo HerbAura collection ka important
            part hain.
          </p>
        </div>

        <div className="ingredients-grid">
          <div className="ingredient-card">
            <div>🌿</div>
            <h3>Aloe Vera</h3>
            <p>Fresh and soothing natural ingredient.</p>
          </div>

          <div className="ingredient-card">
            <div>🍃</div>
            <h3>Neem</h3>
            <p>Traditional herbal ingredient.</p>
          </div>

          <div className="ingredient-card">
            <div>🍯</div>
            <h3>Honey</h3>
            <p>Nature's sweet and nourishing ingredient.</p>
          </div>

          <div className="ingredient-card">
            <div>🌾</div>
            <h3>Rice</h3>
            <p>Simple and naturally inspired ingredient.</p>
          </div>

          <div className="ingredient-card">
            <div>☕</div>
            <h3>Coffee</h3>
            <p>A natural ingredient for handmade care.</p>
          </div>

          <div className="ingredient-card">
            <div>🌿</div>
            <h3>Amla + Reetha + Shikakai</h3>
            <p>Traditional herbal combination for hair care.</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="story-values">
        <div className="values-heading">
          <span>WHAT WE BELIEVE</span>

          <h2>
            Simple Things,
            <br />
            <strong>Made With Care.</strong>
          </h2>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <span>01</span>
            <h3>Natural Ingredients</h3>
            <p>Carefully selected ingredients inspired by nature.</p>
          </div>

          <div className="value-card">
            <span>02</span>
            <h3>Handmade With Care</h3>
            <p>Every product is created with attention and thoughtful care.</p>
          </div>

          <div className="value-card">
            <span>03</span>
            <h3>Simple & Thoughtful</h3>
            <p>
              We believe everyday care can be simple, beautiful and meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="story-cta">
        <span>DISCOVER HERBAURA</span>

        <h2>
          Bring Nature Into
          <br />
          Your Everyday Routine.
        </h2>

        <p>Explore our handmade soaps and natural care collection.</p>

        <Link to="/products">
          Explore Products <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default OurStory;
