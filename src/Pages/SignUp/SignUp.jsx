import React from "react";
import Login_image from "../../Images/login-image.png";
import Shopping_icon from "../../Images/Shopping_icon.png";
import User_icon from "../../Images/User_alt_light.png";
import Message_icon from "../../Images/Message_light.png";
import Phone_icon from "../../Images/phone_icon.png";
import Password_icon from "../../Images/Lock_light.png";
import Facebook_icon from "../../Images/facebook-icon.png";
import Google_icon from "../../Images/google-icon.png";

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
        <div className="signupContainerRight inter">
          <div className="signupContainerRightInterior">
            {/* <div className="signupContainerRightFirst">
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
            </div> */}
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
            <div className="signupContainerRightSecond">
              <img className="signupIcons" src={User_icon} alt="" />
              <span className="signupIconsDetails">Name</span>
            </div>
            <input className="signupInput" type="text" />

            <div className="signupContainerRightSecond">
              <img className="signupIcons" src={Message_icon} alt="" />
              <span className="signupIconsDetails">Email</span>
            </div>
            <input className="signupInput" type="text" />

            <div className="signupContainerRightSecond">
              <img className="signupIcons" src={Phone_icon} alt="" />
              <span className="signupIconsDetails">Phone Number</span>
            </div>
            <input className="signupInput" type="text" />

            <div className="signupContainerRightSecond">
              <img className="signupIcons" src={Password_icon} alt="" />
              <span className="signupIconsDetails">Password</span>
            </div>
            <input className="signupInput" type="text" />

            <div className="signupContainerRightSecond">
              <img className="signupIcons" src={Password_icon} alt="" />
              <span className="signupIconsDetails">Confirm Password</span>
            </div>
            <input className="signupInput" type="text" />

            <button className="signupButton">SIGN UP</button>
            <div className="signupBottom">
              <div
                className="loginContainerLeftFourth"
                style={{ marginBottom: "16px" }}
              >
                <div className="loginContainerLeftFourthLeft"></div>
                <div className="loginContainerLeftFourthCenter">
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#000000",
                    }}
                  >
                    or continue with email
                  </p>
                </div>
                <div className="loginContainerLeftFourthRight"></div>
              </div>
              <img
                className="signupIcons"
                src={Facebook_icon}
                alt=""
                style={{
                  marginLeft: "234px",
                  marginRight: "8px",
                  marginBottom: "16px",
                }}
              />
              <img
                className="signupIcons"
                src={Google_icon}
                alt=""
                style={{ marginBottom: "16px" }}
              />
              <p
                style={{
                  width: "250px",
                  height: "19px",
                  fontSize: "16px",
                  fontWeight: "400",
                  margin: "0",
                  padding: "0",
                  marginLeft: "148px",
                  marginBottom: "8px",
                }}
              >
                Already have an account ?{" "}
                <span style={{ color: "#FFAD61" }}>Log in</span>
              </p>
              <p
                style={{
                  width: "510px",
                  height: "19px",
                  fontSize: "16px",
                  fontWeight: "400",
                  margin: "0",
                  padding: "0",
                  marginLeft: "13px",
                  // marginBottom:"62px",
                }}
              >
                By signing up, you agree to our{" "}
                <span style={{ color: "#FFAD61" }}>Terms of Service</span> and{" "}
                <span style={{ color: "#FFAD61" }}>Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
