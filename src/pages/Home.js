import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Store } from "../store/contexts/AppContext";
import { sayHello_a } from "../store/actions/appActions";
import { Navbar } from "../components/general/navbar";
import Footer from "../components/general/footer/Footer";
import LandingPage from "../components/landingpage/LandingPage";
import useScreenSize from "../hooks/useScreenSize";

const Home = () => {
  const { greet, dispatch, changeTheme, theme } = Store();
  const { screenWidth } = useScreenSize();
  const mobile = screenWidth <= 690;
  const tablet = screenWidth <= 1024;

  useEffect(() => {
    sayHello_a(dispatch);
  }, []);

  return (
    <>
      <Navbar mobile={mobile} tablet={tablet} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer mobile={mobile} tablet={tablet} />
      {/* <h1>Home Page</h1>
      <h1>{greet}</h1>

      <button className="btn" onClick={changeTheme}>
        change theme
      </button>

      <span>&nbsp;</span>

      <Link className="btn" to="/example">
        Example page
      </Link> */}
    </>
  );
};

export default Home;
