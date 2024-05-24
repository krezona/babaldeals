import React from "react";
import "./Admindashboard.css";
import Dashboardicon from "../../Images/Widget_light.png";
import Producticon from "../../Images/3d_box_light.png";
import Ordersicon from "../../Images/Order_light.png";
import Statisticsicon from "../../Images/Stat.png";
import Customersicon from "../../Images/Group_light.png";
import logouticon from "../../Images/Sign_in_squre_light.png";
import Salesicon from "../../Images/statsicon-1.png";
import Revenueicon from "../../Images/statsicon-2.png";

const Admindashboard = () => {
  const columns = [
    "Order Id",
    "Customer Name",
    "Date",
    "Amount",
    "Payment Method",
    "Status",
  ];
  const rows = [
    ["001", "John Doe", "2023-01-01", "$100.00", "Credit Card", "Completed"],
    ["002", "Jane Smith", "2023-01-02", "$200.00", "PayPal", "Pending"],
    [
      "003",
      "Alice Johnson",
      "2023-01-03",
      "$150.00",
      "Credit Card",
      "Completed",
    ],
    ["004", "Bob Brown", "2023-01-04", "$250.00", "Bank Transfer", "Cancelled"],
    [
      "005",
      "Charlie Davis",
      "2023-01-05",
      "$300.00",
      "Credit Card",
      "Completed",
    ],
  ];

  return (
    <div className="container">
      <div className="admindashboardContainer inter">
        <div className="admindashboardContainerTop">
          <div className="admindashboardContainerTopLeft">
            <div
              className="admindashboardContainerTopLeftChild" tabIndex={0}
             
            >
              <img className="admindashboardIcon" src={Dashboardicon} alt="" />
              <p>Dashboard</p>
            </div>
            <div className="admindashboardContainerTopLeftChild" tabIndex={0}>
              <img className="admindashboardIcon" src={Producticon} alt="" />
              <p>Product</p>
            </div>
            <div className="admindashboardContainerTopLeftChild" tabIndex={0}>
              <img className="admindashboardIcon" src={Ordersicon} alt="" />
              <p>Order</p>
            </div>
            <div className="admindashboardContainerTopLeftChild" tabIndex={0}>
              <img className="admindashboardIcon" src={Statisticsicon} alt="" />
              <p>Statistics</p>
            </div>
            <div className="admindashboardContainerTopLeftChild" tabIndex={0}>
              <img className="admindashboardIcon" src={Customersicon} alt="" />
              <p>Customer</p>
            </div>
            <div className="admindashboardContainerTopLeftChild" tabIndex={0}>
              <img className="admindashboardIcon" src={logouticon} alt="" />
              <p>Logout</p>
            </div>
          </div>
          <div className="admindashboardContainerTopRight">
            <div className="admindashboardContainerTopRightFirst">
              <div className="admindashboardContainerTopRightFirstChild">
                <div className="admindashboardContainerTopRightFirstChildFirst">
                  <img className="DashboardSecondIcon" src={Salesicon} />{" "}
                  <p>Total Sales</p>
                </div>
                <div className="admindashboardContainerTopRightFirstChildSecond">
                  Rs. 12,48,000
                </div>
              </div>

              <div className="admindashboardContainerTopRightFirstChild">
                <div className="admindashboardContainerTopRightFirstChildFirst">
                  <img className="DashboardSecondIcon" src={Revenueicon} />
                  <p>Total Revenue</p>
                </div>
                <div className="admindashboardContainerTopRightFirstChildSecond">
                  Rs. 22,48,000
                </div>
              </div>

              <div className="admindashboardContainerTopRightFirstChild">
                <div className="admindashboardContainerTopRightFirstChildFirst">
                  <img className="DashboardSecondIcon" src={Revenueicon} />{" "}
                  <p>Total Order</p>
                </div>
                <div className="admindashboardContainerTopRightFirstChildSecond">
                  Rs. 34,48,000
                </div>
              </div>

              <div className="admindashboardContainerTopRightFirstChild">
                <div className="admindashboardContainerTopRightFirstChildFirst">
                  <img className="DashboardSecondIcon" src={Revenueicon} />
                  <p>Total Deliveries</p>
                </div>
                <div className="admindashboardContainerTopRightFirstChildSecond">
                  Rs. 34,48,000
                </div>
              </div>
            </div>

            <div className="admindashboardContainerTopRightSecond">
              <div className="admindashboardContainerTopRightSecondFirst">
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    margin: "0",
                  }}
                >
                  Order Records
                </p>
                <button
                  style={{
                    width: "75px",
                    height: "35px",
                    background: "#FFAD61",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  View all
                </button>
              </div>

              <div className="table-container">
                <div className="table-row table-header">
                  {columns.map((col, index) => (
                    <div key={index} className="table-cell column-${cellIndex}">
                      {col}
                    </div>
                  ))}
                </div>
                {rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="table-row">
                    {row.map((cell, cellIndex) => (
                      <div
                        key={cellIndex}
                        className="table-cell column-${cellIndex}"
                      >
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="admindashboardContainerBottom">
         
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
