import React from "react";
// import { Navbar } from "../components/general";
// import Footer from "../components/general/otherfooter/Footer";
import LandingPage from "../components/landingpage/LandingPage";
import { Navbar, Footer } from "components/general";
// import for logout
import Logout from "components/auth/logout";
import { Button } from "react-bootstrap";
// logout import ends here

const Home = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Navbar />
      {/* the button for logout  */}
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Logout
      </Button>
      <Logout show={modalShow} onHide={() => setModalShow(false)} />
      {/* /logout button ends here  */}
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Home;
