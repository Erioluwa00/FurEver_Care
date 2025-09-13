import React, { useState } from "react";
import Sidebar from "./Sidebar";

const VetDashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-layout vet-dashboard">
      <div className="header">
        <div className="header-content">
          <div className="header-logo">
            <i className="fas fa-paw"></i>
            <span>FurEver Care</span>
          </div>
          <div className="hamburger-menu" onClick={toggleSidebar}>
            <i className={`fas ${sidebarOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </div>

      <div
        className={`overlay ${sidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>

      <div className="content-wrapper">
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default VetDashboardLayout;
