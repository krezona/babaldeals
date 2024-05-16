import React from "react";
import "./Contactus.css";
import Pin_icon from "../../Images/Pin_alt_light.png";
import Message_icon from "../../Images/Message_light.png";
import Phone_icon from "../../Images/phone_icon.png";

const Contactus = () => {
  return (
    <div className="container">
      <div className="contactusContainer inter">
        <div className="contactusContainerTop">
          <div className="contactusContainerTopTitle">
            <p className="contactusContainerTopTitleFirst">CONTACT US</p>
            <p className="contactusContainerTopTitleSecond">
              We’re Here to Help!
            </p>
          </div>
        </div>
        <div className="contactusContainerCenterFirst">
          <p className="contactusContainerCenterFirstTextFirst">
            At Babaldeals, we offer best deals with highest quality products and
            provide the best customer services.
          </p>
          <p className="contactusContainerCenterFirstTextSecond">
            We also understand sometimes things goes wrong and we are always
            here to help.
          </p>
        </div>
        <div className="contactusContainerCenterSecond">
          <div className="contactusContainerCenterSecondLeft">
            <p
              style={{
                fontWeight: "500",
                margin: "0",
                padding: "0",
                marginBottom: "16px",
              }}
            >
              Head Office
            </p>
            <p style={{ margin: "0", padding: "0", marginBottom: "12px" }}>
              Babaldeals P. Ltd.
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                margin: "0",
                padding: "0",
                marginBottom: "12px",
              }}
            >
              <img src={Pin_icon} className="contactusIcon" />
              New Baneshwor,Kathmandu
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                margin: "0",
                padding: "0",
                marginBottom: "12px",
              }}
            >
              <img src={Message_icon} className="contactusIcon" />
              babal.deals@gmail.com{" "}
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                margin: "0",
              }}
            >
              <img src={Phone_icon} className="contactusIcon" />
              9813189766
            </p>
          </div>
          <div className="contactusContainerCenterSecondRight">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14130.948076628365!2d85.3439762!3d27.6945218!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1715845363298!5m2!1sen!2snp"
              width="560"
              height="320"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="contactusContainerBottom">
          <div className="contactusContainerBottomLeft">
            <p className="contactusContainerBottomTitle">
              Can I reactivate my inactive E-Commerce account?
            </p>
            <p className="contactusContainerBottomDescription">
              Yes. To reactivate your E-Commerce account, simply log in with
              your registered email ID or mobile number password combination
              used before deactivation. Your account data will be fully
              restored, default subscription settings applied.
            </p>
          </div>
          <div className="contactusContainerBottomRight">
            <p className="contactusContainerBottomTitle">
              Why do I need to verify my mobile number or email address to log
              into my account?
            </p>
            <p className="contactusContainerBottomDescription">
              To make sure that your account details are always secure,
              verification by OTP is important. This is a one-time process and
              you can log into your account without any hassles once.
            </p>
          </div>
        </div>
        <button className="contactusButton">See more</button>
      </div>
    </div>
  );
};

export default Contactus;
