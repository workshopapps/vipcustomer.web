import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GLobalStyles, Themes } from "./theme";
import { Route, Routes, useLocation } from "react-router-dom";

// Stores
import { Store } from "./store/contexts/AppContext";

// pages
import Home from "./pages/Home";
import OldDashboard from "./pages/OldDashboard";
import Dashboard from "./pages/Dashboard";
import Login from "pages/auth/Login";
import FAQ from "./pages/FAQ";
import Help from "pages/Help";
import SignUp from "./pages/auth/SignUp";
import Privacy from "./pages/Privacy";
import Mission from "pages/Mission";
import Team from "./pages/Team";
import Demo from "pages/Demo";
import Feature from "pages/Feature";
import PasswordChange from "./pages/PasswordChange";
import PasswordRecovery from "./pages/PasswordRecovery";
import ErrorPage from "pages/ErrorPage";
import Terms from "pages/Terms";
import Aboutus from "pages/Aboutus";
import Consultation from "pages/Consultation";
// import RequireAuth from "components/auth/RequireAuth";
import Documentation from "pages/Documentation";

function App() {
  const { theme } = Store();
  const { pathname } = useLocation();

  // scrolls to top of page on path change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <ThemeProvider theme={theme ? Themes.light : Themes.dark}>
      <GLobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/help" element={<Help />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/password-recovery">
          <Route index element={<PasswordRecovery />} />
          <Route path="change" element={<PasswordChange />} />
        </Route>
        {/* Protected Routes */}
        {/* Commented out for submission reasons */}
        {/* <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
        </Route> */}
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/old-dashboard" element={<OldDashboard />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/docs/*" element={<Documentation />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
