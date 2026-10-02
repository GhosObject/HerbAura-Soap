import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
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

    alert(`Thank you ${formData.name}! Your message has been submitted.`);

    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      {/* Hero */}

      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>GET IN TOUCH</span>

          <h1>
            We'd Love To
            <br />
            <strong>Hear From You.</strong>
          </h1>

          <p>
            Have a question about our products, ingredients, orders or anything
            else? Send us a message and we'll be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Main */}

      <section className="contact-section">
        {/* Left Side */}

        <div className="contact-info">
          <span className="contact-label">CONTACT US</span>

          <h2>
            Let's Start A
            <br />
            <strong>Conversation.</strong>
          </h2>

          <p className="contact-intro">
            Whether you want to know more about our handmade products or need
            help with your order, feel free to reach out to us.
          </p>

          {/* Email */}

          <div className="contact-item">
            <div className="contact-icon">✉</div>

            <div>
              <span>Email</span>

              <a href="mailto:sandeepsharma96801@gmail.com">
                sandeepsharma96801@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}

          <div className="contact-item">
            <div className="contact-icon">☎</div>

            <div>
              <span>Phone</span>

              <a href="tel:+919680185834">+91 9680185834</a>
            </div>
          </div>

          {/* Location */}

          <div className="contact-item">
            <div className="contact-icon">📍</div>

            <div>
              <span>Location</span>

              <p>Rajasthan, India</p>
            </div>
          </div>

          {/* Timing */}

          <div className="contact-item">
            <div className="contact-icon">🕐</div>

            <div>
              <span>Working Hours</span>

              <p>
                Monday - Sunday
                <br />
                10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Form */}

        <div className="contact-form-box">
          <div className="form-heading">
            <span>SEND A MESSAGE</span>

            <h2>How Can We Help?</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
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
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>

                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select subject</option>

                  <option value="Product Inquiry">Product Inquiry</option>

                  <option value="Order Help">Order Help</option>

                  <option value="General Question">General Question</option>

                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <span>↗</span>
            </button>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}

      <section className="contact-bottom">
        <div>
          <span>HERBAURA SOAP</span>

          <h2>
            Natural Care,
            <br />
            Made With Care.
          </h2>
        </div>

        <Link to="/products">
          Explore Products
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default Contact;
