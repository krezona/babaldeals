import React from "react";
import "./AdminHeader.css";
import Shopping_icon from "../../Images/Shopping_icon.png";
import { useState, useEffect } from "react";
import Calendaricon from "../../Images/Date_range_light.png";
import Search_icon from "../../Images/Search_light.png";
import Notification_icon from "../../Images/Bell_light.png";
import PersonPhoto from "../../Images/personphoto.png";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = today.toLocaleDateString(undefined, options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="container">
      <div className="adminHeader inter">
        <div className="adminHeaderLeft">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="headerContainerFirstLeft">
              <img className="headerIcon" src={Shopping_icon} alt="" />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  padding: "0",
                  margin: "0",
                  color: "#000000",
                }}
              >
                babaldeals
              </p>
            </div>
          </Link>
          <div className="adminHeaderLeftChild">
            <img
              src={Calendaricon}
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            {currentDate}
          </div>
        </div>
        <div className="adminHeaderRight">
          <div className="headerContainerSecond inter">
            <img className="headerIcon searchIcon" src={Search_icon} alt="" />
            <input
              style={{
                width: "338px",
                height: "48px",
                background: "#FFE2C7",
                fontSize: "16px",
                color: "#000000",
                fontWeight: "400",
              }}
              className="headerSearchBar"
              type="text"
              placeholder="Search for product, brands and more"
            />
          </div>
          <div className="adminHeaderRightChild">
            <img
              src={Notification_icon}
              style={{ width: "24px", height: "24px" }}
            />
            <div className="borderadminHeader"></div>
            <img src={PersonPhoto} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
