import React from "react";
import { Routes, Route } from "react-router-dom";

// import all pages here
import { Layout, Search } from "components/dashboard";

// replace the divs with your pages

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Search />} />

        <Route path="history" element={<div>history</div>} />

        <Route path="top-rated" element={<div>top rated</div>} />

        <Route path="profile" element={<div>tprofile</div>} />

        <Route path="settings" element={<div>settings</div>} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
