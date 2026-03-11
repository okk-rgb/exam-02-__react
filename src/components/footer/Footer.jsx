import './Footer.css'

import React from 'react';

const Footer = () => {
  

  return (
    <footer className="footer-container">
      <div className="container">
      <div className="footer-content">
        

        <div className="footer-column brand-col">
          <div className="footer-logo">
            <span className="logo-icon"></span>
            <h2>UNITED DEAL</h2>
          </div>
          <div className="contact-info">
            <p className="label">Customer Supports:</p>
            <p className="phone">(629) 555-0129</p>
            <p className="address">
              4517 Washington Ave.<br />
              Manchester, Kentucky 39495
            </p>
            <p className="email">info@kinbo.com</p>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Top Category</h3>
          <ul className="footer-links">
            <li><a href="#">Computer & Laptop</a></li>
            <li><a href="#">SmartPhone</a></li>
            <li><a href="#">Headphone</a></li>
            <li className="active-link"><a href="#">Accessories</a></li>
            <li><a href="#">Camera & Photo</a></li>
            <li><a href="#">TV & Homes</a></li>
            <li className="browse-all"><a href="#">Browse All Product →</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Shop Product</a></li>
            <li><a href="#">Shoping Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Download App</h3>
          <div className="app-buttons">
            <button className="app-btn">
              <span className="btn-icon">▶</span>
              <div className="btn-text">
                <small>Get it now</small>
                <strong>Google Play</strong>
              </div>
            </button>
            <button className="app-btn">
              <span className="btn-icon"></span>
              <div className="btn-text">
                <small>Get it now</small>
                <strong>App Store</strong>
              </div>
            </button>
          </div>
        </div>

       

      </div>
      </div>
    </footer>
  );
};

export default Footer;