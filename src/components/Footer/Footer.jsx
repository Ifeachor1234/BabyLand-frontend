// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerimage from "../../assets/footer image.png";
import footLogo from "../../assets/image 2.png";
import instaLogo from "../../assets/instagram (2).png";
import twiLogo from "../../assets/twitter (2).png";
import faceLogo from "../../assets/Facebook (1).png";
import piLogo from "../../assets/pin.png";

const Footer = () => {
  return (
    <footer className="kk position-relative">
      <img className="foot-img position-relative" src={footerimage} alt="" />
      <div className="inn-footer text-start d-flex align-items-start position-absolute">
        <div className="foot-one d-flex flex-column">
          <div className="d-flex flex-column align-items-start gap-3">
            <Link to="/">
              <img src={footLogo} alt="" />
            </Link>
            <p className="m-0">
              Nunc consequat interdum varius sit amet mattis.
            </p>
          </div>

          <div className="d-flex align-items-start gap-3">
            <a href="#">
              <img src={instaLogo} alt="" />
            </a>

            <a href="#">\
              <img src={twiLogo} alt="" />
            </a>

            <a href="#">
              <img src={faceLogo} alt="" />
            </a>

            <a href="#">
              <img src={piLogo} alt="" />
            </a>
          </div>
        </div>

        <div className="foot-two d-flex flex-column align-items-start">
          <h5 className="mb-0">My account</h5>

          <div className="d-flex flex-column align-items-start gap-3">
            <p>Track my Order</p>
            <p>Terms of Use</p>
            <p>Wishlist</p>
            <p>Submit Your Feedback</p>
          </div>
        </div>

        <div className="foot-three d-flex flex-column align-items-start">
          <h5 className="mb-0">Customer Service</h5>

          <div className="d-flex flex-column align-items-start gap-3">
            <p>Monday TO friday</p>
            <p>10am - 6pm(NeWYork time)</p>
            <p>
              Call us: <span>081-0739-9476</span>
            </p>
            <p>
              Email us: <span>ifeachorchukwudi4@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
