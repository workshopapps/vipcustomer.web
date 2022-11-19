import React from "react";
import { ThemeProvider } from "styled-components";
import { GLobalStyles, Themes } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Stores
import { Store } from "./store/contexts/AppContext";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Example from "./pages/Example";
import Docs from "./pages/Docs";

import FAQ from "./pages/FAQ";
import CsvUpload from "pages/CsvUpload";
import HelpCenter from "pages/helpCenter/HelpCenter";
import SignUp from "./pages/auth/SignUp";
import Terms from "./pages/Terms";
import Mission from "pages/Mission";
import Team from "./pages/Team";


function App() {
  const { theme } = Store();


  return (
    <ThemeProvider theme={theme ? Themes.light : Themes.dark}>
      <GLobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/csv-upload" element={<CsvUpload />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/team" exact element={<Team />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
