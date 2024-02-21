import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      // Redirect to the home page ("/") after 5 seconds
      if (countdown === 0) {
        window.location.href = "/";
      } else {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }
    }, 1000);

    // Clear the timer if the component unmounts
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h2 style={{ color: "white", fontSize: "30px" }}>404 - Page Not Found</h2>
      <p style={{ color: "white", fontSize: "14px" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <p style={{ color: "white", fontSize: "16px" }}>Redirecting in {countdown} seconds...</p>
    </div>
  );
};

export default NotFound;
