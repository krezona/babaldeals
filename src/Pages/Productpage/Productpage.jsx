import React from "react";
import "./Productpage.css";
import Star_icon from "../../Images/Star_light.png";
import ImageFirst from "../../Images/porduct-image-shoe-1.png";
import ImageSecond from "../../Images/shoe-2.png";
import ImageThird from "../../Images/shoe-3.png";

const Productpage = () => {
  const Images = [
    {
      id: 1,
      url: ImageFirst,
      title: "Air Force 1 Shoe for Men",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
    },
    {
      id: 2,
      url: ImageSecond,
      title: "Air Force 1 Shoe for Men",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
    },
    {
      id: 3,
      url: ImageThird,
      title: "Air Force 1 Shoe for Men",
      price: "Rs. 999",
      pastprice: "Rs. 1999",
    },
  ];
  return (
    <div className="container">
      <div className="productpageContainer inter">
        <div className="productpageContainerLeft">
          <div className="productpageContainerLeftDetails">
            <p
              style={{
                fontSize: "24px",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              Filter
            </p>
            <p className="productpageContainerLeftDetailsTitle">Brand</p>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">
                URBANBOX
              </p>
            </div>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">
                GOLDSTAR
              </p>
            </div>

            <p className="productpageContainerLeftDetailsTitle">CATEGORIES</p>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">
                Men Footwear
              </p>
            </div>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">
                Women Footwear
              </p>
            </div>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">
                Kids and infant Footwear
              </p>
            </div>

            <p
              className="productpageContainerLeftDetailsTitle"
              style={{ marginTop: "20px" }}
            >
              GENDER
            </p>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">Men</p>
            </div>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">Women</p>
            </div>

            <p
              className="productpageContainerLeftDetailsTitle"
              style={{ marginTop: "20px" }}
            >
              Price
            </p>
            <div
              className="productpageContainerLeftDetailsFirst"
              style={{ gap: "16px" }}
            >
              <input type="text" className="productpageInput" />
              <p className="productpageContainerLeftDetailsFirstText">to</p>
              <input type="text" className="productpageInput" />
            </div>

            <p
              className="productpageContainerLeftDetailsTitle"
              style={{ marginTop: "20px" }}
            >
              Customer Rating
            </p>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">5</p>
              <img className="productpageIcon" src={Star_icon} alt="" />
            </div>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">4</p>
              <span
                style={{
                  height: "24",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <img className="productpageIcon" src={Star_icon} alt="" />&
                above
              </span>
            </div>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">3</p>
              <span
                style={{
                  height: "24",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <img className="productpageIcon" src={Star_icon} alt="" />&
                above
              </span>
            </div>
            <p
              className="productpageContainerLeftDetailsTitle"
              style={{ marginTop: "20px" }}
            >
              Color
            </p>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">Black </p>
            </div>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">White </p>
            </div>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">Blue </p>
            </div>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">Green </p>
            </div>
            <p
              className="productpageContainerLeftDetailsTitle"
              style={{ marginTop: "20px" }}
            >
              Type of Shoes
            </p>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">
                Casual{" "}
              </p>
            </div>
            <div className="productpageContainerLeftDetailsFirst">
              <input className="productpageCheckbox" type="checkbox" />
              <p className="productpageContainerLeftDetailsFirstText">
                Sneakers
              </p>
            </div>

            <p
              className="productpageContainerLeftDetailsTitle"
              style={{ marginTop: "20px", marginBottom: "12px" }}
            >
              Shoes Size
            </p>
            <div
              className="productpageContainerLeftDetailsFirst"
              style={{ gap: "92px" }}
            >
              <div
                className="productpageContainerLeftDetailsFirstLeft"
                style={{ width: "43px", height: "120px" }}
              >
                <div className="productpageContainerLeftDetailsFirstLeftDiv">
                  <input className="productpageCheckbox" type="checkbox" />
                  <p className="productpageContainerLeftDetailsFirstText">4</p>
                </div>

                <div className="productpageContainerLeftDetailsFirstLeftDiv">
                  <input className="productpageCheckbox" type="checkbox" />
                  <p className="productpageContainerLeftDetailsFirstText">5</p>
                </div>
              </div>
              <div
                className="productpageContainerLeftDetailsFirstCenter"
                style={{ width: "50px" }}
              >
                <div className="productpageContainerLeftDetailsFirstLeftDiv">
                  <input className="productpageCheckbox" type="checkbox" />
                  <p className="productpageContainerLeftDetailsFirstText">8</p>
                </div>

                <div className="productpageContainerLeftDetailsFirstLeftDiv">
                  <input className="productpageCheckbox" type="checkbox" />
                  <p className="productpageContainerLeftDetailsFirstText">9</p>
                </div>
              </div>
              <div
                className="productpageContainerLeftDetailsFirstRight"
                style={{ width: "43px" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="productpageContainerRight">
          <div className="productpageContainerRightFirst">
            <p style={{ fontWeight: "500" }}>Sort by</p>
            <p style={{ color: "#FFA958" }}>Trending</p>
            <p>Price-low to High</p>
            <p>Price-High to low</p>
            <p>Newest First</p>
          </div>
          <div className="border"></div>
          <div className="productpageCarousel">
            {Images.map((Images) => (
              <div
                key={Images.id}
                className="productpageCarouselImageContainer"
              >
                <div className="productpageCarouselImageContainerPicture">
                  <img src={Images.url} className="productCarouselImage" />
                </div>
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
                    fontSize: "16px",
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
                    fontSize: "12px",
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

          <div className="productpageCarousel">
            {Images.map((Images) => (
              <div
                key={Images.id}
                className="productpageCarouselImageContainer"
              >
                <div className="productpageCarouselImageContainerPicture">
                  <img src={Images.url} className="productCarouselImage" />
                </div>
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
                    fontSize: "16px",
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
                    fontSize: "12px",
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

          <div className="productpageCarousel">
            {Images.map((Images) => (
              <div
                key={Images.id}
                className="productpageCarouselImageContainer"
              >
                <div className="productpageCarouselImageContainerPicture">
                  <img src={Images.url} className="productCarouselImage" />
                </div>
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
                    fontSize: "16px",
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
                    fontSize: "12px",
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

          <div className="productpageCarousel">
            {Images.map((Images) => (
              <div
                key={Images.id}
                className="productpageCarouselImageContainer"
              >
                <div className="productpageCarouselImageContainerPicture">
                  <img src={Images.url} className="productCarouselImage" />
                </div>
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
                    fontSize: "16px",
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
                    fontSize: "12px",
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
        </div>
      </div>
    </div>
  );
};

export default Productpage;
