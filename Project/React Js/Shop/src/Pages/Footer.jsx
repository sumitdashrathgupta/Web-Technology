import React from "react";
import "./Style/Footer.css";
import instaImg from "../Components/Assets/instagram.png";
import whatsappImg from "../Components/Assets/WhatsApp.png";
import facebookImg from "../Components/Assets/Facebook.png";
import linkedinImg from "../Components/Assets/linkedin.png";
import youtubeImg from "../Components/Assets/youtub.webp";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
          <div className="footer-left">
             
                <a href="index.html" className="footer-logo">DigiShop</a>
              
              <div className="footer-contact">
                  <h4>Contact Us</h4>
                  <p>Address: 123 Grocery St, City, State, Zip</p>
                  <p>Email: info@digishop.com</p>
                  <p>Phone: (123) 456-7890</p>
              </div>
          </div>
          <div className="footer-right">
              <ul className="socials">
                  <li><a href="index.html"><img src={instaImg} alt="Instagram" /></a></li>
                  <li><a href="index.html"><img src={whatsappImg} alt="WhatsApp" /></a></li>
                  <li><a href="index.html"><img src={facebookImg} alt="Facebook" /></a></li>
                  <li><a href="index.html"><img src={linkedinImg} alt="LinkedIn" /></a></li>
                  <li><a href="index.html"><img src={youtubeImg} alt="YouTube" /></a></li>
              </ul>
          </div>
      </div>
      <div className="footer-bottom">
          <p>© 2024 DigiShop. All rights reserved.</p>
      </div>
  </footer>
  );
};

export default Footer;
