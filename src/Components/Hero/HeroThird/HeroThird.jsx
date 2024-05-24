import React from "react";
import "./HeroThird.css";

import { Link } from "react-router-dom";
import heroSectionSeconddata from "../../../JsonFiles/HeroSectionSecond.json";

const HeroThird = () => {
  const Images = heroSectionSeconddata.heroSecondImages.slice(0, 5);

  return (
    <div className="container">
      <div className="heroThird inter">
        <p
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#000000",
            textAlign: "center",
          }}
        >
          Popular Categories
        </p>
        <div className="heroThirdCarousel">
          {Images.map((Image) => (
            <Link
              key={Image.id}
              to="/productdetails"
              style={{ textDecoration: "none" }}
            >
              <div key={Image.id} className="heroThirdImageContainer">
                <img src={Image.url} className="heroThirdImage" />
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#000000",
                    padding: "0",
                    margin: "0",
                    paddingTop: "20px",
                    textAlign: "center",
                  }}
                >
                  {Image.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroThird;
