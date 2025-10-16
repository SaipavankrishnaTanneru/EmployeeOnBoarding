import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./components/HeaderComponents/Header";
import SideBarContainer from "./containers/SideBar-container/SideBarContainer";
import NewEmployeeOnboarding from "./containers/EmployeeOnBoarding-container/EmployeeOnBoardingContainer";

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
              {/* ✅ FIXED: Use proper wildcard for nested routes */}
             <Route path="/scopes/employee/*" element={<NewEmployeeOnboarding />} />


              {/* Redirect base path */}
              <Route path="/" element={<Navigate to="/scopes/employee" replace />} />

              {/* 404 fallback */}
              <Route
                path="*"
                element={<div style={{ padding: "40px" }}>404 - Page Not Found</div>}
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
