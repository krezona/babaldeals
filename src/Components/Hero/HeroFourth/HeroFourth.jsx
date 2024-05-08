import React from "react";
import "./HeroFourth.css";
import Laptop_icon from "../../../Images/laptop.png";
import Jacket_icon from "../../../Images/red-jacket.png";
import Tv_icon from "../../../Images/tv-image.png";

const HeroFourth = () => {
  return (
    <div className="container">
      <div className=" heroFourthContainer inter">
        <div className="heroFourthContainerTop">
          <div className="heroFourthContainerTopLeft">
            <p
              style={{
                margin: "0",
                padding: "0",
                width: "221px",
                height: "78px",
                fontSize: "32px",
                fontWeight: "600",
                color: "#000000",
                marginBottom: "12px",
              }}
            >
              Mega Sales Extravaganza!
            </p>
            <p
              style={{
                margin: "0",
                padding: "0",
                width: "404px",
                height: "48px",
                fontSize: "20px",
                fontWeight: "400",
                color: "#605050",
              }}
            >
              Unbelievable Deals and Massive Discounts Awaits You At Our
              Babaldeals
            </p>
          </div>
          <div className="heroFourthContainerTopCenter">
            <p
              style={{
                margin: "0",
                padding: "0",
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              Promo Code
            </p>
            <p
              style={{
                margin: "0",
                padding: "0",
                fontSize: "20px",
                fontWeight: "400",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              Dashaindeal
            </p>
            <button
              style={{
                margin: "0",
                padding: "0",
                width: "147px",
                height: "51px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#FFE2C7",
                outline: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "500",
                color: "#46474B",
                textAlign: "center",
              }}
            >
              Start Shopping
            </button>
          </div>

          <div className="heroFourthContainerTopRight">
            <img src={Laptop_icon} alt="" />
          </div>
        </div>

        <div className="heroFourthContainerBottom">
          <div className="heroFourthContainerBottomLeft">
            <div className="heroFourthContainerBottomLeftDescription">
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "500",
                  margin: "0",
                  padding: "0",
                  marginBottom: "12px",
                }}
              >
                Summer Polyfiber Deneim Jackets 
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0",
                  padding: "0",
                  marginBottom: "20px",
                  color: "#605050",
                }}
              >
                Get Ready for Unbeatable Deals and Discounts That Will Leave You
                Amazed
              </p>
              <button
                style={{
                  width: "133px",
                  height: "43px",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "#FFDFB6",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#46474B",
                  borderRadius: "8px",
                  margin: "0",
                  padding: "0",
                  marginLeft: "56px",
                }}
              >
                Upto 15% Off
              </button>
            </div>
            <div className="heroFourthContainerBottomLeftImage">
              <img src={Jacket_icon} />
            </div>
          </div>
          <div className="heroFourthContainerBottomRight">
            <div className="heroFourthContainerBottomRightDescription">
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "500",
                  margin: "0",
                  padding: "0",
                  marginBottom: "12px",
                }}
              >
                Black Samsung Flat Flat Monitor
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  margin: "0",
                  padding: "0",
                  marginBottom: "20px",
                  color: "#605050",
                }}
              >
                Limited Time Mega Deals You Don’t Want to Miss. Shop Now and
                Enjoy Exclusive Discounts
              </p>
              <button
                style={{
                  width: "133px",
                  height: "43px",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "#FFDFB6",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#46474B",
                  borderRadius: "8px",
                  margin: "0",
                  padding: "0",
                  marginLeft: "56px",
                }}
              >
                Upto 25% Off
              </button>
            </div>
            <div className="heroFourthContainerBottomRightImage">
              <img src={Tv_icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFourth;
