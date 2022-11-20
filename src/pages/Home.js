import React from "react";
// import { Navbar } from "../components/general";
// import Footer from "../components/general/otherfooter/Footer";
import LandingPage from "../components/landingpage/LandingPage";
import { Navbar, Footer } from "components/general";
// import Logout from "./Logout";

const Home = () => {
  return (
    <div>
      <Navbar />

      <LandingPage />
      <Footer />

      {/* <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Logout
        </Button>

        <Logout show={modalShow} onHide={() => setModalShow(false)} />
      </> */}
    </div>
  );
};

export default Home;
