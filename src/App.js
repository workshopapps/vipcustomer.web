import React from "react";
import {ThemeProvider} from "styled-components";
import {GLobalStyles, Themes} from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Stores
import {Store} from "./store/contexts/AppContext";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Example from "./pages/Example";
import Docs from "./pages/Docs";
import Team from "./pages/Team";

function App() {
    const {theme} = Store();

    return (
        <ThemeProvider theme={theme ? Themes.light : Themes.dark}>
            <GLobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/example" element={<Example/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/docs/*" element={<Docs/>}/>
                    <Route path="/team" exact element={<Team/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
