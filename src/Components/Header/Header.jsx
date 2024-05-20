import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Shopping_icon from "../../Images/Shopping_icon.png";
import Arrow_down_icon from "../../Images/Expand_down_light.png";
import Search_icon from "../../Images/Search_light.png";
import User_icon from "../../Images/User_alt_light.png";
import Cart_icon from "../../Images/cart_icon.png";
import { useState } from "react";
import { useRef } from "react";
import Menufirst from "../../Images/menu-1.png";
import MenuSecond from "../../Images/a-tracksuit-.png";
import MenuThird from "../../Images/world_alt_light.png";
import MenuFourth from "../../Images/Basket_alt_3.png";
import MenuFifth from "../../Images/desktop_light.png";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef(null);

  // const handleCategoriesClick = () => {
  //   setShowCategories(!showCategories);
  // };

  // const handleCategoriesMouseEnter = () => {
  //   setShowCategories(true);
  // };

  // const handleCategoriesMouseLeave = () => {
  //   // setShowCategories(false);
  //   // if (!dropdownRef.current.contains(document.activeElement)) {
  //   //   setShowCategories(false);
  //   // }

  //   // if (!dropdownRef.current.contains(e.relatedTarget)) {
  //   //   setShowCategories(false);
  //   // }

  //   const isMouseOutsideButton = !e.currentTarget.contains(e.relatedTarget);
  //   const isMouseOutsideDropdown = !dropdownRef.current.contains(
  //     e.relatedTarget
  //   );

  //   if (isMouseOutsideButton && isMouseOutsideDropdown) {
  //     setShowCategories(false);
  //   }
  // };

  return (
    <div className="container">
      <div className=" headerContainer inter">
        <div className="headerContainerFirst ">
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
          <div className="headerContainerFirstRight">
            <button
              // onClick={handleCategoriesClick}
              // onMouseEnter={handleCategoriesMouseEnter}
              // onMouseLeave={handleCategoriesMouseLeave}
              className="headerButton"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Categories
              <img className="headerIcon" src={Arrow_down_icon} alt="" />
            </button>
            {/* {showCategories && ( */}
            <div className="dropdownContent" ref={dropdownRef}>
              <ul>
                <li>
                  
                  <img  className="menuIcon" src={Menufirst} alt="" />
                  Women's Clothing
                </li>
                <li>
                  
                  <img  className="menuIcon" src={MenuSecond} alt="" />
                  Men's Clothing
                </li>
                <li>
                 
                  <img  className="menuIcon" src={MenuThird} alt="" />
                  Sports
                </li>
                <li>
                 
                  <img  className="menuIcon" src={MenuFourth} alt="" />
                  Groceries
                </li>
                <li>
                  
                  <img  className="menuIcon" src={MenuFifth} alt="" />
                  Electronic appliances
                </li>
              </ul>
            </div>
            {/* )} */}
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
              fontFamily: "Inter",
            }}
          >
            Home
          </button>

          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
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
          </Link>
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
