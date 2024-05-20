import React from "react";
import "./HeroThird.css";
import New_Arrival_1 from "../../../Images/new_arrival_1.png";
import New_Arrival_2 from "../../../Images/new_arrival_2.png";
import New_Arrival_3 from "../../../Images/new_arrival_3.png";
import New_Arrival_4 from "../../../Images/new_arrival_4.png";
import New_Arrival_5 from "../../../Images/Hoody.png";
import { Link } from "react-router-dom";

const HeroThird = () => {
  const Images = [
    {
      id: 1,
      url: New_Arrival_1,
      title: "Watch",
    },
    {
      id: 2,
      url: New_Arrival_2,
      title: "School Bag",
    },
    {
      id: 3,
      url: New_Arrival_3,
      title: "Airpods",
    },
    {
      id: 4,
      url: New_Arrival_4,
      title: "Vape",
    },
    {
      id: 5,
      url: New_Arrival_5,
      title: "Hoodie",
    },
  ];

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
            <Link  key={Image.id} to="/productdetails">
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
