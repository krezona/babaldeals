import React from "react";
import "./Header.css";
import Shopping_icon from "../../Images/Shopping_icon.png";
import Arrow_down_icon from "../../Images/Expand_down_light.png";
import Search_icon from "../../Images/Search_light.png";
import User_icon from "../../Images/User_alt_light.png";
import Cart_icon from "../../Images/cart_icon.png";

const Header = () => {
  return (
    <div className="container">
      <div className=" headerContainer">
        <div className="headerContainerFirst inter">
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
          <div className="headerContainerFirstRight">
            <button
              className="headerButton"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              Categories
              <img className="headerIcon" src={Arrow_down_icon} alt="" />
            </button>
          </div>
        </div>
        <div className="headerContainerSecond inter">
          <img className="headerIcon searchIcon" src={Search_icon} alt="" />
          <input
            className="headerSearchBar"
            type="text"
            placeholder="Search for product, brands and more"
          />
        </div>
        <div className="headerContainerThird inter">
          <button
            style={{
              width: "45px",
              height: "19px",
              backgroundColor: "transparent",
              fontSize: "16px",
              fontWeight: "400",
              border: "none",
              cursor: "pointer",
              padding: "0",
              margin: "0",
            }}
          >
            Home
          </button>
          <button
            style={{
              width: "106px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FFE2C7",
              fontSize: "16px",
              fontWeight: "400",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              padding: "0",
              margin: "0",
            }}
          >
            <img
              className="headerIcon"
              src={User_icon}
              alt=""
              style={{ marginLeft: "16px" }}
            />{" "}
            Login
          </button>
          <button
            style={{
              width: "24px",
              height: "24px",
              border: "none",
              outline: "none",
              cursor: "pointer",
              backgroundColor: "transparent",
              padding: "0",
              margin: "0",
            }}
          >
            <img
              className="headerIcon"
              src={Cart_icon}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
