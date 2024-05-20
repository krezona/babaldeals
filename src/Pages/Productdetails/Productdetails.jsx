import React from "react";
import "./Productdetails.css";
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
import Rating_Star from "../../Images/yellow-start.png";
//just checking
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
      discount: "-50%",
    },
    {
      id: 2,
      url: CB_2,
      title: "Goldstar Sport Shoes",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
      discount: "-50%",
    },
    {
      id: 3,
      url: CB_3,
      title: "Nike Basketball Shoe",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
      discount: "-50%",
    },
    {
      id: 4,
      url: CB_4,
      title: "Nike Impact Shoe",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
      discount: "-50%",
    },
    {
      id: 5,
      url: CB_5,
      title: "Nike Air Max 270",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
      discount: "-50%",
    },
    {
      id: 6,
      url: CB_6,
      title: "Goldstar Sport Shoes",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
      discount: "-50%",
    },
  ];

  return (
    <div className="container">
      <div className="productdetailContainerTop inter">
        <div className="productdetailContainerLeft">
          <div className="productdetailContainerLeftFirst">
            <img src={Cart_first} />
          </div>
          <div className="productdetailContainerLeftSecond">
            {cartImages.map((cartImages) => (
              <div className="productdetailContainerLeftSecondImageContainer">
                <img
                  src={cartImages.url}
                  className="productdetailLeftSecondImage"
                />
              </div>
            ))}
          </div>

          <div className="productdetailContainerLeftThird">
            <button className="productdetailContainerLeftThirdButtonFirst">
              <img
                className="productdetailContainerLeftThirdButtonIcon"
                src={Cart_icon}
              />
              Add to Cart
            </button>

            <button className="productdetailContainerLeftThirdButtonSecond">
              <img
                className="productdetailContainerLeftThirdButtonIcon"
                src={Buy_icon}
                style={{ marginLeft: "35px" }}
              />
              Buy now
            </button>
          </div>

          <div className="productdetailContainerLeftFourth inter">
            <div className="productdetailContainerLeftFourthTitle">
              Product Details
            </div>

            <div className="productdetailContainerLeftFourthDescription">
              <div className="productdetailContainerLeftFourthDescriptionList">
                <p className="productdetailContainerLeftFourthDescriptionLeft">
                  Colour
                </p>
                <p className="productdetailContainerLeftFourthDescriptionRight">
                  Blue
                </p>
              </div>

              <div className="productdetailContainerLeftFourthDescriptionList">
                <p className="productdetailContainerLeftFourthDescriptionLeft">
                  Outer Material
                </p>
                <p className="productdetailContainerLeftFourthDescriptionRight">
                  Synthetic
                </p>
              </div>

              <div className="productdetailContainerLeftFourthDescriptionList">
                <p className="productdetailContainerLeftFourthDescriptionLeft">
                  Model Name
                </p>
                <p className="productdetailContainerLeftFourthDescriptionRight">
                  Airforce
                </p>
              </div>

              <div className="productdetailContainerLeftFourthDescriptionList">
                <p className="productdetailContainerLeftFourthDescriptionLeft">
                  Ideal for
                </p>
                <p className="productdetailContainerLeftFourthDescriptionRight">
                  Men
                </p>
              </div>

              <div className="productdetailContainerLeftFourthDescriptionList">
                <p className="productdetailContainerLeftFourthDescriptionLeft">
                  Occasion
                </p>
                <p className="productdetailContainerLeftFourthDescriptionRight">
                  Casual
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="productdetailContainerRight inter">
          <div className="productdetailContainerRightTop">
            <div className="productdetailContainerRightTopFirst">
              Casual Outdoor Shoes For Men
            </div>
            <div className="productdetailContainerRightTopSecond">
              <img src={Star_icon} style={{ marginLeft: "8px" }} />
              4.1
            </div>
            <div className="productdetailContainerRightTopThird">
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
              <div className="productdetailContainerRightTopThirdBottom">
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
            <div className="productdetailContainerRightTopFourth">
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
              <div className="productdetailContainerRightTopFourthList">
                <img
                  className="productdetailContainerRightTopFourthListImage"
                  src={Package_icon}
                />
                <p>10% discount on every purchase</p>
              </div>
              <div className="productdetailContainerRightTopFourthList">
                <img
                  className="productdetailContainerRightTopFourthListImage"
                  src={Package_icon}
                />
                <p>5% discount on payment from Khalti </p>
              </div>
              <div className="productdetailContainerRightTopFourthList">
                <img
                  className="productdetailContainerRightTopFourthListImage"
                  src={Package_icon}
                />
                <p>Buy for Rs. 10000 and get Rs. 500 off your Next Buy</p>
              </div>
            </div>
            <div className="productdetailContainerRightTopFifth">
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
          <div className="productdetailContainerRightBottom">
            <div className="productdetailContainerRightBottomFirst">
              <div className="productdetailContainerRightBottomFirstLeft">
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
              <div className="productdetailContainerRightBottomFirstCenter"></div>
              <div className="productdetailContainerRightBottomFirstRight">
                <div className="productdetailContainerRightBottomFirstRightRating">
                  <div className="productdetailContainerRightBottomFirstRightRatingStars">
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                  </div>
                  <p className="RatingStarText">(28)</p>
                </div>
                <div className="productdetailContainerRightBottomFirstRightRating">
                  <div className="productdetailContainerRightBottomFirstRightRatingStars">
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                  </div>
                  <p className="RatingStarText">(03)</p>
                </div>
                <div className="productdetailContainerRightBottomFirstRightRating">
                  <div className="productdetailContainerRightBottomFirstRightRatingStars">
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                  </div>
                  <p className="RatingStarText">(48)</p>
                </div>
                <div className="productdetailContainerRightBottomFirstRightRating">
                  <div className="productdetailContainerRightBottomFirstRightRatingStars">
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                  </div>
                  <p className="RatingStarText">(18)</p>
                </div>
                <div className="productdetailContainerRightBottomFirstRightRating">
                  <div className="productdetailContainerRightBottomFirstRightRatingStars">
                    <img className="RatingStarImage" src={Rating_Star} alt="" />
                  </div>
                  <p className="RatingStarText">(21)</p>
                </div>
              </div>
            </div>
            <div className="productdetailContainerRightBottomSecond">
              <div className="productdetailContainerRightBottomSecondRating">
                <div className="productdetailContainerRightBottomSecondRatingStars">
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                </div>
                <p className="productdetailContainerRightBottomSecondRatingStarsText">
                  Sushant Ghimire
                </p>
              </div>
              <div className="productdetailContainerRightBottomSecondRatingDescription">
                damn good product paisa anusaar ekdum wasul cha silai cha shoes
                ma babbal ramro cha quality first class cha box bhitra euta
                ramro jhola pani cha totally premium quality worth the price
                thanks to jutta Ghar Nepal keep going 5 star rated shoes
              </div>
              <div className="productdetailContainerRightBottomSecondRatingImages">
                {cartImages.map((cartImages) => (
                  <div className="cartContainerRightBottomSecondRatingImagesContainer">
                    <img src={cartImages.url} className="reviewImages" />
                  </div>
                ))}
              </div>
            </div>

            <div className="productdetailContainerRightBottomSecond">
              <div className="productdetailContainerRightBottomSecondRating">
                <div className="productdetailContainerRightBottomSecondRatingStars">
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                </div>
                <p className="productdetailContainerRightBottomSecondRatingStarsText">
                  Sushant Sedhai
                </p>
              </div>
              <div className="productdetailContainerRightBottomSecondRatingDescription">
                Tyo product is quite good. Recieved it on time. The quality of
                the shoes is great for its price.
              </div>
              <div className="productdetailContainerRightBottomSecondRatingImages">
                {cartImages.map((cartImages) => (
                  <div className="productdetailContainerRightBottomSecondRatingImagesContainer">
                    <img src={cartImages.url} className="reviewImages" />
                  </div>
                ))}
              </div>
            </div>

            <div className="productdetailContainerRightBottomSecond">
              <div className="productdetailContainerRightBottomSecondRating">
                <div className="productdetailContainerRightBottomSecondRatingStars">
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                </div>
                <p className="productdetailContainerRightBottomSecondRatingStarsText">
                  Aashish Shrestha
                </p>
              </div>
              <div className="productdetailContainerRightBottomSecondRatingDescription">
                best product for this price range. Yesto sasto ma ramro quality
                ani ajjai tah jhola ko quality vane pani ekdam ramro. Keii na
                sochera siddhai kine huncha haii.
              </div>
              <div className="productdetailContainerRightBottomSecondRatingImages">
                {cartImages.map((cartImages) => (
                  <div className="productdetailContainerRightBottomSecondRatingImagesContainer">
                    <img src={cartImages.url} className="reviewImages" />
                  </div>
                ))}
              </div>
            </div>

            <div className="productdetailContainerRightBottomSecond">
              <div className="productdetailContainerRightBottomSecondRating">
                <div className="productdetailContainerRightBottomSecondRatingStars">
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                  <img className="RatingStarImage" src={Rating_Star} alt="" />
                </div>
                <p className="productdetailContainerRightBottomSecondRatingStarsText">
                  Aashish Shrestha
                </p>
              </div>
              <div className="productdetailContainerRightBottomSecondRatingDescription">
                damn good product paisa anusaar ekdum wasul cha silai cha shoes
                ma babbal ramro cha quality first class cha box bhitra euta
                ramro jhola pani cha totally premium quality worth the price
                thanks to jutta Ghar Nepal keep going 5 star rated shoes
              </div>
              <div className="productdetailContainerRightBottomSecondRatingImages">
                {cartImages.map((cartImages) => (
                  <div className="productdetailContainerRightBottomSecondRatingImagesContainer">
                    <img src={cartImages.url} className="reviewImages" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productdetailContainerBottom">
        <div
          className="productdetailContainerBottomFirst"
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
        <div className="productdetailContainerBottomSecond">
          {SimilarImages.map((SimilarImages) => (
            <div className="productdetailContainerBottomImageContainer">
              <img src={SimilarImages.url} alt="" />
              <p className="productdetailContainerBottomImageContainerTitle">
                {SimilarImages.title}
              </p>
              <p className="productdetailContainerBottomImageContainerPrice">
                {SimilarImages.price}
              </p>
              <p className="productdetailContainerBottomImageContainerPastPrice">
                <del>{SimilarImages.pastprice}</del>

                <span>{SimilarImages.discount}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
