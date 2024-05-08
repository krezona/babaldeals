import React from "react";
import "./HeroFirst.css";
import Shoes_icon from "../../../Images/shoes.png";
import Like_icon from "../../../Images/thumb_up.png";
import Jacket_icon from "../../../Images/Jacket.png";

const HeroFirst = () => {
  return (
    <div className="container">
      <div className="heroFirstContainer inter">
        <div className="heroFirstContainerTitle">
          <p
            style={{
              fontSize: "20px",
              fontWeight: "400",
              margin: "0",
              padding: "0",
              marginBottom: "4px",
            }}
          >
            50% OFF Summer Super Sale
          </p>
          <p
            style={{
              fontSize: "64px",
              fontWeight: "400",
              margin: "0",
              padding: "0",
              paddingRight: "460px",
              marginBottom: "28px",
            }}
          >
            Elevate Your Shopping Experience Today !
          </p>
        </div>

        <div className="heroFirstContainerDescription">
          <div className="heroFirstContainerDescriptionLeft">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "400",
                margin: "0",
                padding: "0",
                marginBottom: "40px",
                // marginRight: "659px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button className="heroFirstButton"> Explore Now</button>
          </div>
          <div className="heroFirstContainerDescriptionRight">
            <div className="heroFirstLeft">
              <div className="heroFirstLeftTop">
                <p
                  style={{
                    fontSize: "36px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  01
                </p>
              </div>
              <div className="heroFirstLeftCenter">
                <img src={Shoes_icon} alt="" />
              </div>
              <div className="heroFirstLeftBottom">
                <button
                  style={{
                    width: "64px",
                    height: "36px",
                    border: "none",
                    outline: "none",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    style={{
                      width: "24px",
                      height: "24px",
                      margin: "0",
                      padding: "0",
                      cursor: "pointer",
                    }}
                    src={Like_icon}
                  />
                </button>
              </div>
            </div>
            <div className="heroFirstRight">
              <div className="heroFirstRightTop">
                <img src={Jacket_icon} alt="" />
              </div>
              <div className="heroFirstRightBottom">
                <button
                  style={{
                    width: "64px",
                    height: "36px",
                    border: "none",
                    outline: "none",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    style={{
                      width: "24px",
                      height: "24px",
                      margin: "0",
                      padding: "0",
                      cursor: "pointer",
                    }}
                    src={Like_icon}
                  />
                </button>

                <p
                  style={{
                    fontSize: "36px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  02
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFirst;
