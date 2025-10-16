// src/components/EmployeeComponents/EmployeeNavtab.js

import React from "react";
import NavTabsWithIcons from "../../widgets/NavTabs/NavTabWithIcons";
import { onboardingSteps } from "../../config/onboardingTabs";

const EmployeeNavTabOnBoarding = () => {
  return (
    <div>
      <NavTabsWithIcons tabs={onboardingSteps} />
    </div>
  );
};

export default EmployeeNavTabOnBoarding;