import React from "react";
import NavTabsWithIcons from "../../widgets/NavTabs/NavTabWithIcons";

// Import your icons
import basicInfoIcon from "../../assets/EmployeeOnBoarding/Group.png";
import addressInfoIcon from "../../assets/EmployeeOnBoarding/Vector (1).png";
import familyInfoIcon from "../../assets/EmployeeOnBoarding/hugeicons_permanent-job.png";
import employerInfoIcon from "../../assets/EmployeeOnBoarding/humbleicons_certificate.png";
import qualificationIcon from "../../assets/EmployeeOnBoarding/material-symbols_family-group-rounded.png";
import uploadDocsIcon from "../../assets/EmployeeOnBoarding/mdi_category-outline.png";
import categoryInfoIcon from "../../assets/EmployeeOnBoarding/mdi_category-outline.png";
import bankInfoIcon from "../../assets/EmployeeOnBoarding/system-uicons_document.png";

// ✅ Define all navigation tabs with paths
const employeeNavTabs = [
  {
    id: 1,
    label: "Basic Info",
    icon: basicInfoIcon,
    path: "/onboarding/basic-info", // Fixed
  },
  {
    id: 2,
    label: "Address Info",
    icon: addressInfoIcon,
    path: "/onboarding/address-info", // Fixed
  },
  {
    id: 3,
    label: "Family Info",
    icon: familyInfoIcon,
    path: "/onboarding/family-info", // Fixed
  },
  {
    id: 4,
    label: "Previous Employer Info",
    icon: employerInfoIcon,
    path: "/onboarding/previous-employer-info",
  },
  {
    id: 5,
    label: "Qualification",
    icon: qualificationIcon,
    path: "/onboarding/qualification",
  },
  {
    id: 6,
    label: "Upload Documents",
    icon: uploadDocsIcon,
    path: "/onboarding/upload-documents",
  },
  {
    id: 7,
    label: "Category Info",
    icon: categoryInfoIcon,
    path: "/onboarding/category-info",
  },
  {
    id: 8,
    label: "Bank Info",
    icon: bankInfoIcon,
    path: "/onboarding/bank-info",
  },
];

const EmployeeNavTabOnBoarding = () => {
  return (
    <div>
      <NavTabsWithIcons tabs={employeeNavTabs} />
    </div>
  );
};

export default EmployeeNavTabOnBoarding;