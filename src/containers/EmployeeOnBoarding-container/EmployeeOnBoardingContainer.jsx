import React from "react";
import { Outlet } from "react-router-dom"; // ✅ Import Outlet
import EmployeeOnboardingHeader from "../../components/EmployeeComponents/EmployeeOnboardingHeader";
import EmployeeNavTabOnBoarding from "../../components/EmployeeComponents/EmployeeNavtab";

const NewEmployeeOnboarding = () => {
  const handleBack = () => {
    console.log("Back clicked");
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* 🔹 Header Section */}
      <EmployeeOnboardingHeader step={1} totalSteps={8} onBack={handleBack} />

      {/* 🔹 Sticky Navigation Tabs Section */}
      <div
        style={{
          position: "sticky", // Make nav sticky
          top: 0,
          zIndex: 10,
          backgroundColor: "#fff",
          padding: "10px 32px",
          borderBottom: "1px solid #eee"
        }}
      >
        <EmployeeNavTabOnBoarding />
      </div>

      {/* 🔹 Active Tab Content Section */}
      <div
        style={{
          margin: "24px",
          padding: "24px",
          borderRadius: "8px",
          background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        {/* ✅ This Outlet will render the component for the current route */}
        <Outlet />
      </div>
    </div>
  );
};

export default NewEmployeeOnboarding;