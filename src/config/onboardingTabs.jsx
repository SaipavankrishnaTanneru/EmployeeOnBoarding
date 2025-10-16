// src/config/onboardingTabs.js

// It's assumed your icon assets are located in this path.
// If not, create dummy placeholders or update the paths.
import basicInfoIcon from "../assets/EmployeeOnBoarding/Group.png";
import addressInfoIcon from "../assets/EmployeeOnBoarding/Vector (1).png";
import familyInfoIcon from "../assets/EmployeeOnBoarding/hugeicons_permanent-job.png";
import employerInfoIcon from "../assets/EmployeeOnBoarding/humbleicons_certificate.png";
import qualificationIcon from "../assets/EmployeeOnBoarding/material-symbols_family-group-rounded.png";
import uploadDocsIcon from "../assets/EmployeeOnBoarding/mdi_category-outline.png";
import categoryInfoIcon from "../assets/EmployeeOnBoarding/mdi_category-outline.png";
import bankInfoIcon from "../assets/EmployeeOnBoarding/system-uicons_document.png";

export const onboardingSteps = [
  { id: 1, label: "Basic Info", icon: basicInfoIcon, path: "/scopes/employee/basic-info" },
  { id: 2, label: "Address Info", icon: addressInfoIcon, path: "/scopes/employee/address-info" },
  { id: 3, label: "Family Info", icon: familyInfoIcon, path: "/scopes/employee/family-info" },
  { id: 4, label: "Previous Employer Info", icon: employerInfoIcon, path: "/scopes/employee/previous-employer-info" },
  { id: 5, label: "Qualification", icon: qualificationIcon, path: "/scopes/employee/qualification" },
  { id: 6, label: "Upload Documents", icon: uploadDocsIcon, path: "/scopes/employee/upload-documents" },
  { id: 7, label: "Category Info", icon: categoryInfoIcon, path: "/scopes/employee/category-info" },
  { id: 8, label: "Bank Info", icon: bankInfoIcon, path: "/scopes/employee/bank-info" },
];
