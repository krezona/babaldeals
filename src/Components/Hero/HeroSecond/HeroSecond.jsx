import React from "react";
import "./HeroSecond.css";
import New_Arrival_1 from "../../../Images/new_arrival_1.png";
import New_Arrival_2 from "../../../Images/new_arrival_2.png";
import New_Arrival_3 from "../../../Images/new_arrival_3.png";
import New_Arrival_4 from "../../../Images/new_arrival_4.png";
import New_Arrival_5 from "../../../Images/New_Arrival_5.png";
import New_Arrival_6 from "../../../Images/New_Arrival_6.png";
import New_Arrival_7 from "../../../Images/New_Arrival_7.png";
import New_Arrival_8 from "../../../Images/New_Arrival_8.png";
import heroSecondData from "../../../JsonFiles/HeroSectionSecond.json";

const HeroSecond = () => {
  // const Images = [
  //   {
  //     id: 1,
  //     url: New_Arrival_1,
  //     title: "Watch",
  //     price: "Rs 999",
  //     pastprice: "Rs. 1999",
  //   },
  //   {
  //     id: 2,
  //     url: New_Arrival_2,
  //     title: "School Bag",
  //     price: "Rs 4999",
  //     pastprice: "Rs 6880",
  //   },
  //   {
  //     id: 3,
  //     url: New_Arrival_3,
  //     title: "Airpods",
  //     price: "Rs 4000",
  //     pastprice: "Rs 8000",
  //   },
  //   {
  //     id: 4,
  //     url: New_Arrival_4,
  //     title: "Vape",
  //     price: "Rs 4999",
  //     pastprice: "Rs 6890",
  //   },
  // ];
  const Images = heroSecondData.heroSecondImages.slice(0,4);
  const images = heroSecondData.heroSecondImages.slice(4,8);
  // const images = [
  //   {
  //     id: 5,
  //     url: New_Arrival_5,
  //     title: "Purse",
  //     price: "Rs. 999",
  //     pastprice: "Rs 999",
  //   },
  //   {
  //     id: 6,
  //     url: New_Arrival_6,
  //     title: "T-Shirt",
  //     price: "Rs. 999",
  //     pastprice: "Rs. 1999",
  //   },
  //   {
  //     id: 7,
  //     url: New_Arrival_7,
  //     title: "Shoes",
  //     price: "Rs. 2000",
  //     pastprice: "Rs. 2500",
  //   },
  //   {
  //     id: 8,
  //     url: New_Arrival_8,
  //     title: "Jacket",
  //     price: "Rs. 4000",
  //     pastprice: "Rs. 8000",
  //   },
  // ];

  return (
    <div className="container">
      <div className="heroSecondContainer ">
        <div className="heroSecondContainerFirst inter">
          <p
            style={{
              fontSize: "48px",
              fontWeight: "600",
              textAlign: "center",
              margin: "0",
              padding: "0",
              paddingTop: "40px",
              marginBottom: "8px",
            }}
          >
            {/* New Arrivals */}
            {heroSecondData.heroSecondText.heroTitle}
          </p>
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "20px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            {/* Lorem Ipsum is simply dummy text of the printing and type setting
            industry. */}
            {heroSecondData.heroSecondText.heroDescription}
          </p>
          <div className="heroSecondContainerSecond inter">
            <div className="heroSecondContainerSecondTop">




              {Images.map((Images) => (
                <div key={Images.id} className="heroSecondImageContainer">
                  <img src={Images.url} className="heroSecondImage" />
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#000000",
                      padding: "0",
                      margin: "0",
                      paddingLeft: "16px",
                      paddingTop: "16px",
                    }}
                  >
                    {Images.title}
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#FA902D",
                      margin: "0",
                      padding: "0",
                      marginTop: "8px",
                      marginBottom: "6px",
                      paddingLeft: "16px",
                    }}
                  >
                    {Images.price}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#8F8787",
                      margin: "0",
                      padding: "0",
                      paddingLeft: "16px",
                    }}
                  >
                    <del>{Images.pastprice}</del>
                  </p>
                </div>
              ))}
            </div>

            <div className="heroSecondContainerSecondBottom">
              {images.map((images) => (
                <div key={images.id} className="heroSecondImageContainer">
                  <img src={images.url} className="heroSecondImage" />
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#000000",
                      padding: "0",
                      margin: "0",
                      paddingLeft: "16px",
                      paddingTop: "16px",
                    }}
                  >
                    {images.title}
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#FA902D",
                      margin: "0",
                      padding: "0",
                      marginTop: "8px",
                      marginBottom: "6px",
                      paddingLeft: "16px",
                    }}
                  >
                    {images.price}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#8F8787",
                      margin: "0",
                      padding: "0",
                      paddingLeft: "16px",
                    }}
                  >
                    <del>{images.pastprice}</del>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
