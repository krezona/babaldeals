import React from "react";
import "./Buynow.css";
import ImgFirst from "../../Images/buynow-image.png";
import Star_icon from "../../Images/star-icon.png";
import Rating_Star from "../../Images/yellow-start.png";
import CI_1 from "../../Images/ci-1.png";
import CI_2 from "../../Images/ci-2.png";
import CI_3 from "../../Images/ci-3.png";
import CI_4 from "../../Images/ci-4.png";

const Buynow = () => {
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
  return (
    <div className="container">
      <div className="buynowContainer inter">
        <div className="buynowContainerLeft">
          <div className="buynowContainerLeftFirst">
            <img src={ImgFirst} alt="" />
          </div>
          <div className="buynowContainerLeftSecond">
            <div className="buynowContainerLeftSecondTop">
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#000000",
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                Order Summary
              </p>
              <div className="buynowContainerLeftSecondTopTitlePrice">
                <p className="buynowContainerLeftSecondTopTitle">
                  Outdoor Shoes For Men
                </p>
                <p className="buynowContainerLeftSecondTopPrice">Rs. 999</p>
              </div>
              <div className="buynowContainerLeftSecondTopTitlePrice">
                <span className="buynowContainerLeftSecondTopTitle">
                  Delivery Fee
                </span>
                <span className="buynowContainerLeftSecondTopPrice">
                  Rs. 149
                </span>
              </div>
              <div className="buynowContainerLeftSecondTopTitlePrice">
                <span className="buynowContainerLeftSecondTopTitle">
                  Total Payment
                </span>
                <span className="buynowContainerLeftSecondTopPrice">
                  Rs. 1148
                </span>
              </div>
            </div>
            <div className="buynowContainerLeftSecondBottom">
              <button className="buynowButton">PLACE ORDER</button>
            </div>
          </div>
        </div>
        <div className="buynowContainerRight">
          <div
            className="cartContainerRightTop"
            style={{ marginBottom: "16px", height: "80px" }}
          >
            <div className="cartContainerRightTopFirst">
              Casual Outdoor Shoes For Men
            </div>
            <div className="cartContainerRightTopSecond">
              <img src={Star_icon} style={{ marginLeft: "8px" }} />
              4.1
            </div>
          </div>
          <div className="cartContainerRightBottomFirst">
            <div className="cartContainerRightBottomFirstLeft">
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "500",
                  width: "262px",
                  marginBottom: "16px",
                }}
              >
                Rating and Reviews
              </p>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "500",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                4.1
                <button
                  style={{
                    width: "117px",
                    height: "28px",
                    backgroundColor: "#FA902D",
                    color: "white",
                    border: "none",
                    outline: "none",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  <img
                    src={Star_icon}
                    style={{
                      marginLeft: "12px",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  Excellent
                </button>
              </p>
              <p>61 ratings and 3 reviews</p>
            </div>
            <div className="cartContainerRightBottomFirstCenter"></div>
            <div className="cartContainerRightBottomFirstRight">
              <div className="cartContainerRightBottomFirstRightRating">
                <div className="cartContainerRightBottomFirstRightRatingStars">
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                </div>
                <p className="RatingStarText">(28)</p>
              </div>
              <div className="cartContainerRightBottomFirstRightRating">
                <div className="cartContainerRightBottomFirstRightRatingStars">
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                </div>
                <p className="RatingStarText">(03)</p>
              </div>
              <div className="cartContainerRightBottomFirstRightRating">
                <div className="cartContainerRightBottomFirstRightRatingStars">
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                </div>
                <p className="RatingStarText">(48)</p>
              </div>
              <div className="cartContainerRightBottomFirstRightRating">
                <div className="cartContainerRightBottomFirstRightRatingStars">
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                </div>
                <p className="RatingStarText">(18)</p>
              </div>
              <div className="cartContainerRightBottomFirstRightRating">
                <div className="cartContainerRightBottomFirstRightRatingStars">
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                </div>
                <p className="RatingStarText">(21)</p>
              </div>
            </div>
          </div>
          <div className="cartContainerRightBottomSecond">
            <div className="cartContainerRightBottomSecondRating">
              <div className="cartContainerRightBottomSecondRatingStars">
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
              </div>
              <p className="cartContainerRightBottomSecondRatingStarsText">
                Sushant Ghimire
              </p>
            </div>
            <div className="cartContainerRightBottomSecondRatingDescription">
              damn good product paisa anusaar ekdum wasul cha silai cha shoes ma
              babbal ramro cha quality first class cha box bhitra euta ramro
              jhola pani cha totally premium quality worth the price thanks to
              jutta Ghar Nepal keep going 5 star rated shoes
            </div>
            <div className="cartContainerRightBottomSecondRatingImages">
              {cartImages.map((cartImages) => (
                <div className="cartContainerRightBottomSecondRatingImagesContainer">
                  <img src={cartImages.url} className="reviewImages" />
                </div>
              ))}
            </div>
          </div>

          <div className="cartContainerRightBottomSecond">
            <div className="cartContainerRightBottomSecondRating">
              <div className="cartContainerRightBottomSecondRatingStars">
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
              </div>
              <p className="cartContainerRightBottomSecondRatingStarsText">
                Sushant Ghimire
              </p>
            </div>
            <div className="cartContainerRightBottomSecondRatingDescription">
              damn good product paisa anusaar ekdum wasul cha silai cha shoes ma
              babbal ramro cha quality first class cha box bhitra euta ramro
              jhola pani cha totally premium quality worth the price thanks to
              jutta Ghar Nepal keep going 5 star rated shoes
            </div>
            <div className="cartContainerRightBottomSecondRatingImages">
              {cartImages.map((cartImages) => (
                <div className="cartContainerRightBottomSecondRatingImagesContainer">
                  <img src={cartImages.url} className="reviewImages" />
                </div>
              ))}
            </div>
          </div>



          <div className="cartContainerRightBottomSecond">
            <div className="cartContainerRightBottomSecondRating">
              <div className="cartContainerRightBottomSecondRatingStars">
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
              </div>
              <p className="cartContainerRightBottomSecondRatingStarsText">
                Sushant Ghimire
              </p>
            </div>
            <div className="cartContainerRightBottomSecondRatingDescription">
              damn good product paisa anusaar ekdum wasul cha silai cha shoes ma
              babbal ramro cha quality first class cha box bhitra euta ramro
              jhola pani cha totally premium quality worth the price thanks to
              jutta Ghar Nepal keep going 5 star rated shoes
            </div>
            <div className="cartContainerRightBottomSecondRatingImages">
              {cartImages.map((cartImages) => (
                <div className="cartContainerRightBottomSecondRatingImagesContainer">
                  <img src={cartImages.url} className="reviewImages" />
                </div>
              ))}
            </div>
          </div>

          <div className="cartContainerRightBottomSecond">
            <div className="cartContainerRightBottomSecondRating">
              <div className="cartContainerRightBottomSecondRatingStars">
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
                <img className="RatingStarImage" src={Rating_Star} alt="" />
              </div>
              <p className="cartContainerRightBottomSecondRatingStarsText">
                Sushant Ghimire
              </p>
            </div>
            <div className="cartContainerRightBottomSecondRatingDescription">
              damn good product paisa anusaar ekdum wasul cha silai cha shoes ma
              babbal ramro cha quality first class cha box bhitra euta ramro
              jhola pani cha totally premium quality worth the price thanks to
              jutta Ghar Nepal keep going 5 star rated shoes
            </div>
            <div className="cartContainerRightBottomSecondRatingImages">
              {cartImages.map((cartImages) => (
                <div className="cartContainerRightBottomSecondRatingImagesContainer">
                  <img src={cartImages.url} className="reviewImages" />
                </div>
              ))}
            </div>
          </div>


          
        </div>
      </div>
    </div>
  );
};

export default Buynow;
