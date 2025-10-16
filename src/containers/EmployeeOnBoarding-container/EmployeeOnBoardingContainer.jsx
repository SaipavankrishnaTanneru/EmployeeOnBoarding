import React from "react";
import { Routes, Route, Navigate, useNavigate, useMatch } from "react-router-dom";
import EmployeeOnboardingHeader from "../../components/EmployeeComponents/EmployeeOnboardingHeader";
import EmployeeNavTabOnBoarding from "../../components/EmployeeComponents/EmployeeNavtab";
import { onboardingSteps } from "../../config/onboardingTabs";

import BasicInfo from "../../components/EmployeeComponents/BasicInfo/BasicInfo";
const AddressInfo = () => <div>Address Info</div>;
const FamilyInfo = () => <div>Family Info</div>;

const NewEmployeeOnboarding = () => {
  const navigate = useNavigate();

  // Match route for active tab
  const match = useMatch("/scopes/employee/:tab");
  const currentTab = match?.params?.tab;

  const handleBack = () => navigate(-1);

  // ✅ Correct step calculation
  let step = 1;
  if (currentTab) {
    const currentStepIndex = onboardingSteps.findIndex((s) =>
      s.path.endsWith(currentTab)
    );
    step = currentStepIndex !== -1 ? currentStepIndex + 1 : 1;
  }

  const totalSteps = onboardingSteps.length;

  return (
    <div>
      {/* Header */}
      <EmployeeOnboardingHeader
        step={step}
        totalSteps={totalSteps}
        onBack={handleBack}
      />

      {/* Nav Tabs */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "#fff",
          padding: "10px 32px",
          borderBottom: "1px solid #eee",
        }}
      >
        <EmployeeNavTabOnBoarding />
      </div>

      {/* Content */}
      <div
        style={{
          margin: "24px",
          padding: "24px",
          borderRadius: "8px",
          background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <Routes>
          {/* ✅ FIXED: correct relative redirect path */}
          <Route index element={<Navigate to="basic-info" replace />} />

          <Route path="basic-info" element={<BasicInfo />} />
          <Route path="address-info" element={<AddressInfo />} />
          <Route path="family-info" element={<FamilyInfo />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  );
};

export default NewEmployeeOnboarding;
