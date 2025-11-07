// components/LoginAlert.jsx
import React, { useEffect, useState } from "react";

const LoginAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const optedOut = localStorage.getItem("alertOptOut");
    const hasSeen = sessionStorage.getItem("hasSeenLoginAlert");
    if (!optedOut && !hasSeen) {
      setShowAlert(true);
      // Mark it as seen for this session so it only shows once
      sessionStorage.setItem("hasSeenLoginAlert", "true");
    }
  }, []);

  const handleOptOut = () => {
    localStorage.setItem("alertOptOut", "true");
    setShowAlert(false);
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  if (!showAlert) return null;

  return (
      <div>
        <h3>Welcome Back!</h3>
        <p>You’ve successfully logged in.</p>
        <div style={styles.buttons}>
          <button onClick={handleClose}>Close</button>
          <button onClick={handleOptOut}>Don’t show again</button>
        </div>
      </div>
  );
};

export default LoginAlert;