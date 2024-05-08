import React from "react";
import "./Cart.css";
import Cart_first from "../../Images/cart_1.png";
import CI_1 from "../../Images/ci-1.png";
import CI_2 from "../../Images/ci-2.png";
import CI_3 from "../../Images/ci-3.png";
import CI_4 from "../../Images/ci-4.png";
import Buy_icon from "../../Images/buy-now-icon.png";
import Cart_icon from "../../Images/cart_icon.png";
import Star_icon from "../../Images/star-icon.png";
import Package_icon from "../../Images/package_box.png";
import CB_1 from "../../Images/cb-1.png";
import CB_2 from "../../Images/cb-2.png";
import CB_3 from "../../Images/cb-3.png";
import CB_4 from "../../Images/cb-4.png";
import CB_5 from "../../Images/cb-5.png";
import CB_6 from "../../Images/cb-6.png";

const Cart = () => {
  const cartImages = [
    {
      id: 1,
      url: CI_1,
    },
    {
      id: 2,
      url: CI_2,
    },
    {
      id: 3,
      url: CI_3,
    },
    {
      id: 4,
      url: CI_4,
    },
  ];

  const SimilarImages = [
    {
      id: 1,
      url: CB_1,
      title: "Air Force 1 Shoe for Men",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
    },
    {
      id: 2,
      url: CB_2,
      title: "Air Force 1 Shoe for Men",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
    },
    {
      id: 3,
      url: CB_3,
      title: "Air Force 1 Shoe for Men",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
    },
    {
      id: 4,
      url: CB_4,
      title: "Air Force 1 Shoe for Men",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
    },
    {
      id: 5,
      url: CB_5,
      title: "Air Force 1 Shoe for Men",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
    },
    {
      id: 6,
      url: CB_6,
      title: "Air Force 1 Shoe for Men",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
    },
  ];

  return (
    <div className="container">
      <div className="cartContainerTop inter">
        <div className="cartContainerLeft">
          <div className="cartContainerLeftFirst">
            <img src={Cart_first} />
          </div>
          <div className="cartContainerLeftSecond">
            {cartImages.map((cartImages) => (
              <div className="cartContainerLeftSecondImageContainer">
                <img src={cartImages.url} className="cartLeftSecondImage" />
              </div>
            ))}
          </div>

          <div className="cartContainerLeftThird">
            <button className="cartContainerLeftThirdButtonFirst">
              <img
                className="cartContainerLeftThirdButtonIcon"
                src={Cart_icon}
              />
              Add to Cart
            </button>

            <button className="cartContainerLeftThirdButtonSecond">
              <img
                className="cartContainerLeftThirdButtonIcon"
                src={Buy_icon}
                style={{ marginLeft: "35px" }}
              />
              Buy now
            </button>
          </div>

          <div className="cartContainerLeftFourth inter">
            <div className="cartContainerLeftFourthTitle">Product Details</div>

            <div className="cartContainerLeftFourthDescription">
              <div className="cartContainerLeftFourthDescriptionList">
                <p className="cartContainerLeftFourthDescriptionLeft">Colour</p>
                <p className="cartContainerLeftFourthDescriptionRight">Blue</p>
              </div>

              <div className="cartContainerLeftFourthDescriptionList">
                <p className="cartContainerLeftFourthDescriptionLeft">
                  Outer Material
                </p>
                <p className="cartContainerLeftFourthDescriptionRight">
                  Synthetic
                </p>
              </div>

              <div className="cartContainerLeftFourthDescriptionList">
                <p className="cartContainerLeftFourthDescriptionLeft">
                  Model Name
                </p>
                <p className="cartContainerLeftFourthDescriptionRight">
                  Airforce
                </p>
              </div>

              <div className="cartContainerLeftFourthDescriptionList">
                <p className="cartContainerLeftFourthDescriptionLeft">
                  Ideal for
                </p>
                <p className="cartContainerLeftFourthDescriptionRight">Men</p>
              </div>

              <div className="cartContainerLeftFourthDescriptionList">
                <p className="cartContainerLeftFourthDescriptionLeft">
                  Occasion
                </p>
                <p className="cartContainerLeftFourthDescriptionRight">
                  Casual
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cartContainerRight inter">
          <div className="cartContainerRightTop">
            <div className="cartContainerRightTopFirst">
              Casual Outdoor Shoes For Men
            </div>
            <div className="cartContainerRightTopSecond">
              <img src={Star_icon} style={{ marginLeft: "8px" }} />
              4.1
            </div>
            <div className="cartContainerRightTopThird">
              <p
                style={{
                  color: "#FA902D",
                  fontSize: "16px",
                  fontWeight: "400",
                  margin: "0",
                  padding: "0",
                  marginBottom: "8px",
                }}
              >
                Special Price
              </p>
              <div className="cartContainerRightTopThirdBottom">
                <p
                  style={{
                    fontSize: "200",
                    fontWeight: "400",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  Rs 999
                </p>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#8F8787",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  <del>Rs 1999</del>
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#46474B",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  -52%
                </span>
              </div>
            </div>
            <div className="cartContainerRightTopFourth">
              <p
                style={{
                  color: "#FA902D",
                  fontSize: "16px",
                  fontWeight: "400",
                  margin: "0",
                  padding: "0",
                  marginBottom: "8px",
                }}
              >
                Special Offers
              </p>
              <div className="cartContainerRightTopFourthList">
                <img
                  className="cartContainerRightTopFourthListImage"
                  src={Package_icon}
                />
                <p>10% discount on every purchase</p>
              </div>
              <div className="cartContainerRightTopFourthList">
                <img
                  className="cartContainerRightTopFourthListImage"
                  src={Package_icon}
                />
                <p>5% discount on payment from Khalti </p>
              </div>
              <div className="cartContainerRightTopFourthList">
                <img
                  className="cartContainerRightTopFourthListImage"
                  src={Package_icon}
                />
                <p>Buy for Rs. 10000 and get Rs. 500 off your Next Buy</p>
              </div>
            </div>
            <div className="cartContainerRightTopFifth">
              <p
                style={{
                  color: "#FA902D",
                  fontSize: "16px",
                  fontWeight: "400",
                  margin: "0",
                  padding: "0",
                  marginBottom: "8px",
                }}
              >
                Services
              </p>
              <p
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "400",
                  margin: "0",
                  padding: "0",
                  marginBottom: "8px",
                }}
              >
                Free Delivery over Kathmandu Valley
              </p>
              <p
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "400",
                  margin: "0",
                  padding: "0",
                  marginBottom: "8px",
                }}
              >
                Cash on Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cartContainerBottom">
        <div
          className="cartContainerBottomFirst"
          style={{
            width: "207px",
            fontSize: "28px",
            fontWeight: "600",
            padding: "0",
            margin: "0",
            marginBottom: "20px",
          }}
        >
          Similar Product
        </div>
        <div className="cartContainerBottomSecond">
        {SimilarImages.map((SimilarImages) => (
          <div className="cartContainerBottomImageContainer">
            <img src={SimilarImages.url} alt="" />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
