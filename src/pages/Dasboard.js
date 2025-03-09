import React from "react";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <h2>My Images</h2>
      <div className="grid">
        {/* Dynamically load user images here */}
      </div>
    </div>
  );
};

export default Dashboard;
