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
import PasswordRecovery from "./pages/PasswordRecovery";
=======
import SignUp from "./pages/auth/SignUp";
>>>>>>> db6a46e7e96fa90c6cd9ad16e9f0beb32045ee93
import Terms from "./pages/Terms";
import PasswordChange from "./pages/PasswordChange";

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
          <Route path="/password-recovery">
            <Route index element={<PasswordRecovery />} />
            <Route path="change" element={<PasswordChange />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
