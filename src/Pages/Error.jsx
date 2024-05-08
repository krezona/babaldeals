// ErrorPage.jsx

import React from "react";

const ErrorPage = ({ message }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Oops! Something went wrong...</h1>
      <p style={styles.message}>{message}</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", 
    backgroundColor: "#f8f9fa",
    color: "#343a40", 
    textAlign: "center",
  },
  heading: {
    fontSize: "40px", 
    marginBottom: "20px", 
  },
  message: {
    fontSize: "24px",
    marginBottom: "40px", 
  },
};

export default ErrorPage;
