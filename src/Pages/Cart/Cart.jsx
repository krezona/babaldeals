import React from "react";
import { useState } from "react";
import "./Cart.css";
import FirstImg from "../../Images/cart-1.png";
import ReduceImg from "../../Images/reduceimg.png";
import AddImg from "../../Images/addimg.png";
import EsewaImg from "../../Images/esewa.png";
import KhaltiImg from "../../Images/khalti.png";

const Cart = () => {


  const [count, setCount] = useState(1);

  
  const increase = () => {
    setCount(count + 1);
  };

  
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };



  return (
    <div className="container">
      <div className="cartContainer inter">
        <div className="cartContainerLeft">
          <p className="cartContainerLeftTitle">My Cart</p>
          <div className="carContainerLeftChild">
            <div className="carContainerLeftChildLeft">
              <input
                className="cartContainerLeftCheckbox"
                type="checkbox"
                name=""
                id=""
              />
              <div className="cartContanierLeftImageContainer">
                <img className="cartContanierLeftImage" src={FirstImg} alt="" />
              </div>
              <div className="cartContanierLeftDescription">
                <p
                  style={{
                    width: "193px",
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  School Bag For Girls
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "8px",
                  }}
                >
                  Colour: Pink
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  Rs. 2000
                </p>
              </div>
            </div>
            <div className="carContainerLeftChildRight">
              <img
                className="carContainerLeftChildRightIcon"
                src={ReduceImg}
                alt=""
                onClick={decrease}
              />
              <p style={{ width: "8px", height: "19px", margin: "0" }}>{count}</p>
              <img className="carContainerLeftChildRightIcon" src={AddImg}  onClick={increase}/>
            </div>
          </div>

          <div className="carContainerLeftChild">
            <div className="carContainerLeftChildLeft">
              <input
                className="cartContainerLeftCheckbox"
                type="checkbox"
                name=""
                id=""
              />
              <div className="cartContanierLeftImageContainer">
                <img className="cartContanierLeftImage" src={FirstImg} alt="" />
              </div>
              <div className="cartContanierLeftDescription">
                <p
                  style={{
                    width: "193px",
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  School Bag For Girls
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "8px",
                  }}
                >
                  Colour: Pink
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  Rs. 2000
                </p>
              </div>
            </div>
            <div className="carContainerLeftChildRight">
              <img
                className="carContainerLeftChildRightIcon"
                src={ReduceImg}
                alt=""
                onClick={decrease}
              />
              <p style={{ width: "8px", height: "19px", margin: "0" }}>1</p>
              <img className="carContainerLeftChildRightIcon" src={AddImg}  onClick={increase}/>
            </div>
          </div>
          <div className="carContainerLeftChild">
            <div className="carContainerLeftChildLeft">
              <input
                className="cartContainerLeftCheckbox"
                type="checkbox"
                name=""
                id=""
              />
              <div className="cartContanierLeftImageContainer">
                <img className="cartContanierLeftImage" src={FirstImg} alt="" />
              </div>
              <div className="cartContanierLeftDescription">
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    width: "193px",
                  }}
                >
                  School Bag For Girls
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "8px",
                  }}
                >
                  Colour: Pink
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  Rs. 2000
                </p>
              </div>
            </div>
            <div className="carContainerLeftChildRight">
              <img
                className="carContainerLeftChildRightIcon"
                src={ReduceImg}
                alt=""
              />
              <p style={{ width: "8px", height: "19px", margin: "0" }}>1</p>
              <img className="carContainerLeftChildRightIcon" src={AddImg} />
            </div>
          </div>
          <div className="carContainerLeftChild">
            <div className="carContainerLeftChildLeft">
              <input
                className="cartContainerLeftCheckbox"
                type="checkbox"
                name=""
                id=""
              />
              <div className="cartContanierLeftImageContainer">
                <img className="cartContanierLeftImage" src={FirstImg} alt="" />
              </div>
              <div className="cartContanierLeftDescription">
                <p
                  style={{
                    width: "193px",
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  School Bag For Girls
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "8px",
                  }}
                >
                  Colour: Pink
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  Rs. 2000
                </p>
              </div>
            </div>
            <div className="carContainerLeftChildRight">
              <img
                className="carContainerLeftChildRightIcon"
                src={ReduceImg}
                alt=""
              />
              <p style={{ width: "8px", height: "19px", margin: "0" }}>1</p>
              <img className="carContainerLeftChildRightIcon" src={AddImg} />
            </div>
          </div>

          <div className="carContainerLeftChild">
            <div className="carContainerLeftChildLeft">
              <input
                className="cartContainerLeftCheckbox"
                type="checkbox"
                name=""
                id=""
              />
              <div className="cartContanierLeftImageContainer">
                <img className="cartContanierLeftImage" src={FirstImg} alt="" />
              </div>
              <div className="cartContanierLeftDescription">
                <p
                  style={{
                    width: "193px",
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  School Bag For Girls
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "8px",
                  }}
                >
                  Colour: Pink
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  Rs. 2000
                </p>
              </div>
            </div>
            <div className="carContainerLeftChildRight">
              <img
                className="carContainerLeftChildRightIcon"
                src={ReduceImg}
                alt=""
              />
              <p style={{ width: "8px", height: "19px", margin: "0" }}>1</p>
              <img className="carContainerLeftChildRightIcon" src={AddImg} />
            </div>
          </div>

          <div className="carContainerLeftChild">
            <div className="carContainerLeftChildLeft">
              <input
                className="cartContainerLeftCheckbox"
                type="checkbox"
                name=""
                id=""
              />
              <div className="cartContanierLeftImageContainer">
                <img className="cartContanierLeftImage" src={FirstImg} alt="" />
              </div>
              <div className="cartContanierLeftDescription">
                <p
                  style={{
                    width: "193px",
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  School Bag For Girls
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "8px",
                  }}
                >
                  Colour: Pink
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  Rs. 2000
                </p>
              </div>
            </div>
            <div className="carContainerLeftChildRight">
              <img
                className="carContainerLeftChildRightIcon"
                src={ReduceImg}
                alt=""
              />
              <p style={{ width: "8px", height: "19px", margin: "0" }}>1</p>
              <img className="carContainerLeftChildRightIcon" src={AddImg} />
            </div>
          </div>

          <div className="carContainerLeftChild">
            <div className="carContainerLeftChildLeft">
              <input
                className="cartContainerLeftCheckbox"
                type="checkbox"
                name=""
                id=""
              />
              <div className="cartContanierLeftImageContainer">
                <img className="cartContanierLeftImage" src={FirstImg} alt="" />
              </div>
              <div className="cartContanierLeftDescription">
                <p
                  style={{
                    width: "193px",
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  School Bag For Girls
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginBottom: "8px",
                  }}
                >
                  Colour: Pink
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  Rs. 2000
                </p>
              </div>
            </div>
            <div className="carContainerLeftChildRight">
              <img
                className="carContainerLeftChildRightIcon"
                src={ReduceImg}
                alt=""
              />
              <p style={{ width: "8px", height: "19px", margin: "0" }}>1</p>
              <img className="carContainerLeftChildRightIcon" src={AddImg} />
            </div>
          </div>
        </div>
        <div className="cartContainerRight">
          <div className="cartContainerRightTop">
            <div className="cartContainerRightTopDescription">
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  margin: "0",
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                Bill Details
              </p>
              <span
                className="cartContainerRightTopDescriptionLeft"
                style={{ fontWeight: "500", marginBottom: "12px" }}
              >
                Product
              </span>
              <span
                className="cartContainerRightTopDescriptionRight"
                style={{ fontWeight: "500", marginBottom: "12px" }}
              >
                Price
              </span>

              <span className="cartContainerRightTopDescriptionLeft">
                School Bag For Girls
              </span>
              <span className="cartContainerRightTopDescriptionRight">
                Rs. 2000
              </span>

              <span className="cartContainerRightTopDescriptionLeft">
                Apple Watch SE Smartwatch
              </span>
              <span className="cartContainerRightTopDescriptionRight">
                Rs. 20000
              </span>

              <span className="cartContainerRightTopDescriptionLeft">
                Tribit Strombox Micro 2
              </span>
              <span className="cartContainerRightTopDescriptionRight">
                Rs. 5000
              </span>

              <span className="cartContainerRightTopDescriptionLeft">
                Elf Bar BC5000
              </span>
              <span className="cartContainerRightTopDescriptionRight">
                Rs. 4000
              </span>

              <span className="cartContainerRightTopDescriptionLeft">
                School Bag For Girls
              </span>
              <span className="cartContainerRightTopDescriptionRight">
                Rs. 2000
              </span>

              <span className="cartContainerRightTopDescriptionLeft">
                Apple Watch SE Smartwatch
              </span>
              <span className="cartContainerRightTopDescriptionRight">
                Rs. 20000
              </span>

              <span className="cartContainerRightTopDescriptionLeft">
                Tribit Strombox Micro 2
              </span>
              <span className="cartContainerRightTopDescriptionRight">
                Rs. 5000
              </span>

              <span className="cartContainerRightTopDescriptionLeft">
                Elf Bar BC5000
              </span>
              <span className="cartContainerRightTopDescriptionRight">
                Rs. 4000
              </span>
              <div className="border"></div>

              <span
                className="cartContainerRightTopDescriptionLeft"
                style={{ fontWeight: "500" }}
              >
                Sub Total
              </span>
              <span
                className="cartContainerRightTopDescriptionRight"
                style={{ fontWeight: "500" }}
              >
                Rs. 62000
              </span>
              <span
                className="cartContainerRightTopDescriptionLeft"
                style={{ fontWeight: "500" }}
              >
                Shipping Charge
              </span>
              <span
                className="cartContainerRightTopDescriptionRight"
                style={{ fontWeight: "500" }}
              >
                Rs. 150
              </span>
              <span
                className="cartContainerRightTopDescriptionLeft"
                style={{ fontWeight: "500" }}
              >
                Total
              </span>
              <span
                className="cartContainerRightTopDescriptionRight"
                style={{ fontWeight: "500" }}
              >
                Rs. 62150
              </span>
            </div>
          </div>
          <div className="cartContainerRightBottom">
            <p className="cartContainerRightBottomTitle">Payment Method</p>
            <button className="cartContainerRightBottomButtonFirst">
              Cash on delivery{" "}
              <input
                className="cartContainerRightBottomInput"
                type="checkbox"
                name=""
                id=""
              />
            </button>
            <div className="cartContainerRightBottomButtons">
              <button className="cartContainerRightBottomButtonSecond">
                <img
                  src={EsewaImg}
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                    marginLeft: "68px",
                  }}
                />
                Esewa
              </button>
              <button className="cartContainerRightBottomButtonSecond">
                <img
                  src={KhaltiImg}
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                    marginLeft: "68px",
                  }}
                />
                Khalti
              </button>
            </div>
            <button className="cartContainerRightBottomButtonThird">
              PAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
