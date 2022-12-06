import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import {
  Layout,
  Documents,
  Search,
  History,
  QuickStart,
  Usage,
  SearchMany
} from "components/docs";

const Documentation = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Documents />} />
        <Route path="search" element={<Search />} />
        <Route path="searchmany" element={<SearchMany />} />
        <Route path="history" element={<History />} />
        <Route path="usage" element={<Usage />} />
        <Route path="quick" element={<QuickStart />} />
      </Route>
    </Routes>
  );
};

export default Documentation;
