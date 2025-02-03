// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Mail.css";
import { Link } from "react-router-dom";
import phone from "../../assets/Vector (11).png";
import mail from "../../assets/Vector (12).png";
import location from "../../assets/Vector (13).png";
import map from "../../assets/Screenshot 2024-05-03 at 4.25 1.png"
export const Mail = () => {
  return (
    <div className="contact-sec container">
      <div className="contact-one text-start px-3 py-2 mb-3">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">
            Home /
          </Link>
          <span>
            <Link to="/mail" className="text-decoration-none">
              contact
            </Link>
          </span>
        </p>
      </div>

      {/* =================== */}
      <div className="contact-two px-3 text-start py-3 d-flex flex-column align-items-start gap-4 mb-3">
        <h2 className="m-0">contact</h2>

        {/* ============================================= */}
        <div className="all-media d-flex align-items-center justify-content-between">
          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-1">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={phone} alt="" />
              <p className="m-0 reach">phone number</p>
            </div>
            <p className="get m-0">+234 8107399476</p>
          </div>

          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-1">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={mail} alt="" />
              <p className="m-0 reach">Email</p>
            </div>
            <p className="get m-0">ifeachorchukwudi4@gmail.com</p>
          </div>

          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-1">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={location} alt="" />
              <p className="m-0 reach">Address place</p>
            </div>
            <p className="get m-0">No 13, brown street, aguda, lagos</p>
          </div>
        </div>
      </div>

      {/* ================================ */}
      <div className="loc-con d-flex align-items-center justify-content-between">
        <img src={map} alt="" />

        <form
          className="con-form text-start d-flex flex-column align-items-start gap-5"
          action=""
        >
          <div className="d-flex flex-column gap-4">
            <h3>Contact Us</h3>
            <div className="con-inp d-flex flex-column gap-4">
              <input
                className="px-3 py-2 rounded-3"
                type="text"
                placeholder="Your name"
              />
              <input
                className="px-3 py-2 rounded-3"
                type="email"
                placeholder="Email address"
              />
              <input type="number" placeholder="Phone number" />
              <textarea
                className="px-3 py-2 rounded-3"
                rows="5"
                name=""
                id=""
                placeholder="Write your comment here..."
              ></textarea>
            </div>
          </div>

          <button className="px-4 py-2 rounded-4 border-0">send</button>
        </form>
      </div>
    </div>
  );
};
export default Mail;
