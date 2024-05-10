import React from "react";
import Shopping_icon from "../../Images/Shopping_icon.png";
import "./Login.css";
import Facebook_icon from "../../Images/facebook-icon.png";
import Google_icon from "../../Images/google-icon.png";
import User_icon from "../../Images/User_alt_light.png";
import Lock_icon from "../../Images/Lock_light.png";
import Login_image from "../../Images/login-image.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="loginContainer inter">
        <div className="loginContainerLeft">
          <div className="loginContainerLeftFirst">
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

          <div className="loginContainerLeftSecond">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Login to your Account
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Welcome back! Select method to login:
            </p>
          </div>
          <div className="loginContainerLeftThird">
            <button className="loginButton">
              <img src={Google_icon} className="loginButtonIcon" />
              Google
            </button>
            <button className="loginButton">
              <img src={Facebook_icon} className="loginButtonIcon" />
              Facebook
            </button>
          </div>
          <div className="loginContainerLeftFourth">
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

          <div className="loginContainerLeftFifth">
            <div className="loginContainerLeftFifthFirst">
              <img className="loginIcon" src={User_icon} alt="" />
              Email or Phone number
            </div>
            <input className="loginInput" type="text" name="" id="" />
            <div className="loginContainerLeftFifthFirst">
              <img className="loginIcon" src={Lock_icon} alt="" />
              Password
            </div>
            <input
              className="loginInput"
              type="text"
              name=""
              id=""
              style={{ marginBottom: "12px" }}
            />
            <div className="loginContainerLeftFifthSecond">
              <div className="loginContainerLeftFifthSecondLeft">
                <input type="checkbox" name="" id="" />
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#8F8787",
                  }}
                >
                  Remember me
                </p>
              </div>
              <div className="loginContainerLeftFifthSecondRight">
                Forget Password?
              </div>
            </div>

            <button className="loginButtonBottom">LOGIN</button>
            <p
              style={{
                width: "243px",
                height: "19px",
                fontSize: "16px",
                fontWeight: "400",
                marginLeft: "143px",
              }}
            >
              Don’t have an account ?{" "}
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span style={{ margin: "0", padding: "0", color: "#ffa958" }}>
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="loginContainerRight">
          <img
            src={Login_image}
            alt=""
            style={{ width: "520px", height: "657px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
