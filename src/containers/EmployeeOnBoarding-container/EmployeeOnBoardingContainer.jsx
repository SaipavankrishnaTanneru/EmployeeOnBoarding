import React from "react";
import { Routes, Route, Navigate, useNavigate, useMatch } from "react-router-dom";
import EmployeeOnboardingHeader from "../../components/EmployeeComponents/EmployeeOnboardingHeader";
import EmployeeNavTabOnBoarding from "../../components/EmployeeComponents/EmployeeNavtab";
import { onboardingSteps } from "../../config/onboardingTabs";
import EmployeeOnboardingForm from "../../components/EmployeeComponents/BasicInfoForms/EmployeeOnboardingForm";
import styles from "./EmployeeOnBoardingContainer.module.css";

const AddressInfo = () => <div>Address Info</div>;
const FamilyInfo = () => <div>Family Info</div>;

const NewEmployeeOnboarding = () => {
  const navigate = useNavigate();
  const match = useMatch("/scopes/employee/:tab");
  const currentTab = match?.params?.tab;

  const handleBack = () => navigate(-1);

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
      <EmployeeOnboardingHeader step={step} totalSteps={totalSteps} onBack={handleBack} />

      <div className={styles.stickyNav}>
        <EmployeeNavTabOnBoarding />
      </div>

      <div className={styles.content}>
        <Routes>
          <Route index element={<Navigate to="basic-info" replace />} />
          <Route path="basic-info" element={<EmployeeOnboardingForm />} />
          <Route path="address-info" element={<AddressInfo />} />
          <Route path="family-info" element={<FamilyInfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default NewEmployeeOnboarding;
