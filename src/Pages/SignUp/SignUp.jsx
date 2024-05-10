import React from "react";
import Login_image from "../../Images/login-image.png";
import Shopping_icon from "../../Images/Shopping_icon.png";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="container">
      <div className="signupContainer inter">
        <div className="signupContainerLeft">
          <img
            src={Login_image}
            alt=""
            style={{ width: "520px", height: "657px" }}
          />
        </div>
        <div className="signupContainerRight">
          <div className="signupContainerRightInterior">
            <div className="signupContainerRightFirst">
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
            <p
              style={{
                marginBottom: "8px",
                fontSize: "20px",
                fontWeight: "600",
                color: "#222222",
              }}
            >
              Register Your Account
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#000000",
                marginBottom: "20px",
              }}
            >
              Create your new account
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
