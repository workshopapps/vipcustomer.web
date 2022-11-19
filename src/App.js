import React from "react";
import { ThemeProvider } from "styled-components";
import { Themes, GLobalStyles } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Stores
import { Store } from "./store/contexts/AppContext";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Example from "./pages/Example";
import Docs from "./pages/Docs";
<<<<<<< HEAD
import Terms from "./pages/Terms";
import Mission from "./pages/Mission";
=======
import SignUp from "./pages/auth/SignUp";
import Terms from "./pages/Terms";

>>>>>>> e949d6732ae49cef7936296680eb6f9686331be4
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
<<<<<<< HEAD
=======
          <Route path="/signup" element={<SignUp />} />
>>>>>>> e949d6732ae49cef7936296680eb6f9686331be4
          <Route path="/terms" element={<Terms />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
