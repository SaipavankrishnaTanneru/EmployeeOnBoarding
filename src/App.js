import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// ✅ Import Navigate for the default route
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./components/HeaderComponents/Header";
import SideBarContainer from "./containers/SideBar-container/SideBarContainer";
import NewEmployeeOnboarding from "./containers/EmployeeOnBoarding-container/EmployeeOnBoardingContainer";

// ✅ Import the components for each onboarding step.
// Make sure you have created these files in the specified directory.
import BasicInfo from "./components/EmployeeComponents/BasicInfo/BasicInfo";
// import AddressInfo from "./containers/EmployeeOnBoarding-container/forms/AddressInfo";
// import FamilyInfo from "./containers/EmployeeOnBoarding-container/forms/FamilyInfo";
// import PreviousEmployerInfo from "./containers/EmployeeOnBoarding-container/forms/PreviousEmployerInfo";
// import Qualification from "./containers/EmployeeOnBoarding-container/forms/Qualification";
// import UploadDocuments from "./containers/EmployeeOnBoarding-container/forms/UploadDocuments";
// import CategoryInfo from "./containers/EmployeeOnBoarding-container/forms/CategoryInfo";
// import BankInfo from "./containers/EmployeeOnBoarding-container/forms/BankInfo";


// Create the QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="whole_container">
          {/* Header */}
          <Header />

          {/* Sidebar */}
          <aside>
            <SideBarContainer />
          </aside>

          {/* Main Content Area */}
          <main className="main_content">
            <Routes>
              {/* ✅ UPDATED: Nested routes for employee onboarding */}
              <Route path="/scopes/employee" element={<NewEmployeeOnboarding />}>
                
                {/* This default child route redirects to the first step */}
                <Route index element={<Navigate to="basic-info" replace />} />
                
                {/* Routes for each tab, rendered inside the NewEmployeeOnboarding component's <Outlet /> */}
                <Route path="basic-info" element={<BasicInfo />} />
                {/* <Route path="address-info" element={<AddressInfo />} />
                <Route path="family-info" element={<FamilyInfo />} />
                <Route path="previous-employer-info" element={<PreviousEmployerInfo />} />
                <Route path="qualification" element={<Qualification />} />
                <Route path="upload-documents" element={<UploadDocuments />} />
                <Route path="category-info" element={<CategoryInfo />} />
                <Route path="bank-info" element={<BankInfo />} /> */}
              </Route>
              
              {/* You can add routes for your other sidebar items here */}
              {/* e.g., <Route path="/scopes/dashboard" element={<DashboardComponent />} /> */}

              {/* A "Not Found" route as a fallback */}
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

