import React from "react";
import "./Aboutus.css";
import Firstimg from "../../Images/aboutus-first.png";
import Secondimg from "../../Images/our_efforts_img1.png";
import Thirdimg from "../../Images/efforts_2.png";
import Fourthimg from "../../Images/effort_3.png";
import Fifthimg from "../../Images/effort_4.png";
import Sixthimg from "../../Images/aboutus-sixth.png";
import Seventhimg from "../../Images/aboutus-seventh.png";

const Aboutus = () => {
  return (
    <div className="container">
      <div className="aboutuscontainer inter">
        <div className="aboutuscontainerFirst">
          <div className="aboutuscontainerFirstLeft">
            <img src={Firstimg} />
          </div>
          <div className="aboutuscontainerFirstRight">
            <p className="aboutuscontainerFirstRightTitle">
              The Babaldeal’s Group
            </p>
            <p className="aboutuscontainerFirstRightDescription">
              The Babaldeal is one of Nepal’s leading digital commerce entities
              started in 2019 which has enabled millions of people to
              participate in Nepal's digital commerce revolution.
            </p>
            <p className="aboutuscontainerFirstRightDescription">
              With a registered customer base of more than 50 million,
              Babaldeal’s marketplace offers over 10 million products on the
              platform. Babaldeals has created lakhs of jobs for the people.
            </p>
            <p className="aboutuscontainerFirstRightDescription">
              Babaldeals is known for pioneering services such as Cash on
              delivery, and easy returns, which are customer-centric innovations
              that have made online shopping more accessible and affordable for
              millions of Nepalese. In 2024, the digital payment offerings for
              all customers and further Nepal’s digital economy vision.
            </p>
          </div>
        </div>

        <div className="aboutuscontainerSecond">
          <div className="aboutuscontainerSecondLeft">
            <p
              className="aboutuscontainerFirstRightTitle"
              style={{ textAlign: "center" }}
            >
              Our Efforts
            </p>
            <div className="aboutuscontainerSecondLeftChild">
              <div className="aboutuscontainerSecondLeftChildImg"></div>
              <img src={Secondimg} alt="" />
              <div className="aboutuscontainerSecondLeftChildText">
                <p className="effortsTitle">Embrace Change</p>
                <p className="effortsDescription">
                  We embrace and anticipate change. Change is growth and growth
                  is what drives us everyday.
                </p>
              </div>
            </div>

            <div className="aboutuscontainerSecondLeftChild">
              <div className="aboutuscontainerSecondLeftChildImg"></div>
              <img src={Thirdimg} alt="" />
              <div className="aboutuscontainerSecondLeftChildText">
                <p className="effortsTitle">Embrace Change</p>
                <p className="effortsDescription">
                  We embrace and anticipate change. Change is growth and growth
                  is what drives us everyday.
                </p>
              </div>
            </div>

            <div className="aboutuscontainerSecondLeftChild">
              <div className="aboutuscontainerSecondLeftChildImg"></div>
              <img src={Fourthimg} alt="" />
              <div className="aboutuscontainerSecondLeftChildText">
                <p className="effortsTitle">Embrace Change</p>
                <p className="effortsDescription">
                  We embrace and anticipate change. Change is growth and growth
                  is what drives us everyday.
                </p>
              </div>
            </div>

            <div className="aboutuscontainerSecondLeftChild">
              <div className="aboutuscontainerSecondLeftChildImg"></div>
              <img src={Fifthimg} alt="" />
              <div className="aboutuscontainerSecondLeftChildText">
                <p className="effortsTitle">Embrace Change</p>
                <p className="effortsDescription">
                  We embrace and anticipate change. Change is growth and growth
                  is what drives us everyday.
                </p>
              </div>
            </div>
          </div>

          <div className="aboutuscontainerSecondRight">
            <img src={Sixthimg} />
          </div>
        </div>

        <div className="aboutuscontainerThird">
          <div className="aboutuscontainerThirdLeft">
            <img src={Seventhimg} alt="" />
          </div>
          <div className="aboutuscontainerThirdRight">
            <p
              className="aboutuscontainerFirstRightTitle"
              style={{ textAlign: "center" }}
            >
              Our Services
            </p>

            <div
              className="aboutuscontainerSecondLeftChild"
              style={{ width: "560px" }}
            >
              <div className="aboutuscontainerSecondLeftChildImg"></div>
              <img src={Fifthimg} alt="" />
              <div className="aboutuscontainerSecondLeftChildText">
                <p className="effortsTitle">Embrace Change</p>
                <p className="effortsDescription">
                  We offer millions of products at a great value for customer.
                </p>
              </div>
            </div>

            <div
              className="aboutuscontainerSecondLeftChild"
              style={{ width: "560px" }}
            >
              <div className="aboutuscontainerSecondLeftChildImg"></div>
              <img src={Fifthimg} alt="" />
              <div className="aboutuscontainerSecondLeftChildText">
                <p className="effortsTitle">Embrace Change</p>
                <p className="effortsDescription">
                  We offer millions of products at a great value for customer.
                </p>
              </div>
            </div>

            <div
              className="aboutuscontainerSecondLeftChild"
              style={{ width: "560px" }}
            >
              <div className="aboutuscontainerSecondLeftChildImg"></div>
              <img src={Fifthimg} alt="" />
              <div className="aboutuscontainerSecondLeftChildText">
                <p className="effortsTitle">Embrace Change</p>
                <p className="effortsDescription">
                  We offer millions of products at a great value for customer.
                </p>
              </div>
            </div>

            <div
              className="aboutuscontainerSecondLeftChild"
              style={{ width: "560px" }}
            >
              <div className="aboutuscontainerSecondLeftChildImg"></div>
              <img src={Fifthimg} alt="" />
              <div className="aboutuscontainerSecondLeftChildText">
                <p className="effortsTitle">Embrace Change</p>
                <p className="effortsDescription">
                  We offer millions of products at a great value for customer.
                </p>
              </div>
            </div>

            <div
              className="aboutuscontainerSecondLeftChild"
              style={{ width: "560px" }}
            >
              <div className="aboutuscontainerSecondLeftChildImg"></div>
              <img src={Fifthimg} alt="" />
              <div className="aboutuscontainerSecondLeftChildText">
                <p className="effortsTitle">Embrace Change</p>
                <p className="effortsDescription">
                  We offer millions of products at a great value for customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
