import React from "react";
import "./Footer.css";
import Get_it_on_icon from "../../Images/get_it_on_icon.png";
import Logo from "../../Images/babaldeals_logo.jpg";
import GP from "../../Images/footer-gp.png";
import AP from "../../Images/footer-as.png";
import GET from "../../Images/download.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <div className="footerContainer inter">
        <div className="footerContainerFirst">
          <img
            src={Logo}
            alt=""
            style={{
              width: "80px",
              height: "80px",
              margin: "0",
              padding: "0",
              marginBottom: "12px",
            }}
          />
          <p
            style={{
              width: "91px",
              height: "30px",
              fontSize: "12px",
              fontWeight: "500",
              margin: "0",
              padding: "0",
              color: "#46474B",
            }}
          >
            Curate Your Own Happiness
          </p>
        </div>
        <div className="footerContainerSecond inter">
          <span
            style={{
              margin: "0",
              padding: "0",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Help
          </span>
          <ul
            style={{
              padding: "0",
              margin: "0",
              listStyleType: "none",
              width: "219px",
            }}
          >
            <li className="footerList" style={{ marginTop: "16px" }}>
              Help Center
            </li>
            <Link
              to="/privacypolicy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              
              <li className="footerList">Deliveries and return policies</li>
            </Link>
            <li className="footerList">Terms and Conditions</li>
            <li className="footerList">FAQs</li>
          </ul>
        </div>
        <div className="footerContainerThird">
          <span
            style={{
              margin: "0",
              padding: "0",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Company
          </span>
          <ul style={{ padding: "0", margin: "0", listStyleType: "none" }}>
            <Link
              to="/aboutus"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="footerList" style={{ marginTop: "16px" }}>
                About us
              </li>
            </Link>
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="footerList">Contact us</li>
            </Link>
            <li className="footerList">News</li>
            <li className="footerList">Support</li>
          </ul>
        </div>
        <div className="footerContainerFourth">
          <span
            style={{
              margin: "0",
              padding: "0",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Products
          </span>
          <ul style={{ padding: "0", margin: "0", listStyleType: "none" }}>
            <li
              className="footerList"
              style={{ marginTop: "16px", padding: "0" }}
            >
              SmartWatch
            </li>
            <li className="footerList">Vape</li>
            <li className="footerList">Airpods</li>
            <li className="footerList">Bags</li>
          </ul>
        </div>
        <div className="footerContainerFifth">
          <span
            style={{
              margin: "0",
              padding: "0",
              fontSize: "20px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Find Us on
          </span>
          {/* <img
            src={Get_it_on_icon}
            alt=""
            style={{
              width: "83px",
              height: "112px",
              padding: "0",
              margin: "0",
              marginTop: "16px",
            }}
          /> */}
          {/* <img src={GP} alt="" style={{ width: "100px", height: "70px" }} />
          <img src={AP} alt="" style={{ width: "100px", height: "70px" }} /> */}
          <img
            src={GET}
            alt=""
            style={{
              width: "150px",
              height: "150px",
              margin: "0",
              padding: "0",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
