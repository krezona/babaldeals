import React from "react";
import "./Adminproduct.css";
import Dashboardicon from "../../Images/Widget_light.png";
import Producticon from "../../Images/3d_box_light.png";
import Ordersicon from "../../Images/Order_light.png";
import Statisticsicon from "../../Images/Stat.png";
import Customersicon from "../../Images/Group_light.png";
import logouticon from "../../Images/Sign_in_squre_light.png";
import Arrowdown from "../../Images/Expand_down_light.png";
import Addicon from "../../Images/Add_ring_light.png";
import AdminProductImages from "../../JsonFiles/AdminProduct.json";
import Sorticon from "../../Images/Sort.png";

const Adminproduct = () => {
  const images = AdminProductImages.images.slice(0, 3);
  const Images = AdminProductImages.images.slice(3);
  let images1 = [];
  for(let index =0 ; index<4; index++){
    images1.push(
      AdminProductImages.images[3]
    )
  }
  console.log(images1)
  return (
    <div className="container">
      <div className="adminproduct inter">
        <div className="adminproductTop">
          <div className="admindashboardContainerTopLeft">
            <div
              className="admindashboardContainerTopLeftChild"
              style={{ background: "#FFAD61", borderRadius: "12px" }}
            >
              <img className="admindashboardIcon" src={Dashboardicon} alt="" />
              <p>Dashboard</p>
            </div>
            <div className="admindashboardContainerTopLeftChild">
              <img className="admindashboardIcon" src={Producticon} alt="" />
              <p>Product</p>
            </div>
            <div className="admindashboardContainerTopLeftChild">
              <img className="admindashboardIcon" src={Ordersicon} alt="" />
              <p>Order</p>
            </div>
            <div className="admindashboardContainerTopLeftChild">
              <img className="admindashboardIcon" src={Statisticsicon} alt="" />
              <p>Statistics</p>
            </div>
            <div className="admindashboardContainerTopLeftChild">
              <img className="admindashboardIcon" src={Customersicon} alt="" />
              <p>Customer</p>
            </div>
            <div className="admindashboardContainerTopLeftChild">
              <img className="admindashboardIcon" src={logouticon} alt="" />
              <p>Logout</p>
            </div>
          </div>
          <div className="adminproductTopRight">
            <div className="adminproductTopRightTop">
              <div className="adminproductTopRightTopLeft">
                Most Search Product
              </div>
              <div className="adminproductTopRightTopCenter">
                <span
                  className="adminproductTopRightTopCenterChild"
                  tabIndex="0"
                >
                  Shoes
                </span>
                <span
                  className="adminproductTopRightTopCenterChild"
                  tabIndex="0"
                >
                  Glasses
                </span>
                <span
                  className="adminproductTopRightTopCenterChild"
                  tabIndex="0"
                >
                  Bag
                </span>
                <span
                  className="adminproductTopRightTopCenterChild"
                  tabIndex="0"
                >
                  Gloves
                </span>
                <span
                  className="adminproductTopRightTopCenterChild"
                  tabIndex="0"
                >
                  Jacket
                </span>
              </div>
              <div className="adminproductTopRightTopRight">
                <button className="adminproductButton">
                  Weekly <img className="ArrowDown" src={Arrowdown} />
                </button>
              </div>
            </div>
            <div className="adminproductTopRightBottom">
              {images.map((images) => (
                <div
                  key={images.id}
                  className="adminproductTopRightBottomContainer"
                >
                  <img className="adminProductTopImages" src={images.url} />
                  <p className="adminProductTopImagesTitle">{images.title}</p>
                  <p className="adminProductTopImagesDescription">
                    {images.description}
                  </p>
                  <p className="adminProductTopImagesPrice">{images.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="adminproductCenter">
          <div className="adminproductCenterFirst">
            <p
              style={{
                margin: "0",
                fontSize: "20px",
                fontWeight: "500",
                color: "#000000",
              }}
            >
              Products
            </p>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderRadius: "4px",
                background: "#FFAD61",
                color: "white",
                border: "none",
                cursor: "pointer",
                width: "145px",
                height: "40px",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <img src={Addicon} alt="" />
              Add Products
            </button>
          </div>

          <div className="adminproductCenterSecond">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderRadius: "4px",
                background: "white",
                width: "112px",
                height: "40px",
                fontSize: "14px",
                fontWeight: "400",
                border: "none",
              }}
            >
              <img src={Sorticon} alt="" /> Sort by
            </button>
            <span className="sortSpan" tabIndex={0}>
              All Product
            </span>
            <span className="sortSpan" tabIndex={0}>
              {" "}
              Most Purchased
            </span>
            <span className="sortSpan" tabIndex={0}>
              Shoes
            </span>
            <span className="sortSpan" tabIndex={0}>
              Vape
            </span>
            <span className="sortSpan" tabIndex={0}>
              Apple Watch
            </span>
            <span className="sortSpan" tabIndex={0}>
              All Product
            </span>
            <span className="sortSpan" tabIndex={0}>
              Most Purchased
            </span>
            <span className="sortSpan" tabIndex={0}>
              Shoes
            </span>
            <span className="sortSpan" tabIndex={0}>
              App
            </span>
          </div>

          <div className="adminproductCenterThird">
           

           
            {Images.map((Images) => (
              <div
                key={Images.id}
                className="adminproductCenterThirdImageContainer"
              >
                <img
                  src={Images.url}
                  style={{ width: "270px", height: "170px" }}
                />
                <p
                  style={{
                    marginTop: "16px",
                    marginLeft: "16px",
                    marginBottom: "16px",
                    fontSize: "16px",
                    fontWeight: "400",
                    height: "19px",
                  }}
                >
                  <span style={{ color: "#46474B" }}>Price:</span>{" "}
                  {Images.price}
                </p>
                <span
                  style={{
                    marginLeft: "16px",
                    marginRight: "64px",
                    height: "19px",
                  }}
                >
                  <span style={{ color: "#46474B" }}>In Stock:</span>{" "}
                  {Images.available}
                </span>
                <span>
                  <span style={{ color: "#46474B" }}>Sold:</span> {Images.sold}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminproduct;
