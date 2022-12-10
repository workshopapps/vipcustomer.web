import React from "react";
import "components/team/components/Team.css";
import { Card } from "../components/team/Card";
import { Footer, Navbar } from "../components/general";
import vectorRight from "../components/team/assets/Vector-right.png";
import vectorLeft from "../components/team/assets/Vector-left.png";

function Team() {
  return (
    <>
      <Navbar />
      <div className="vector">
        <img
          src={vectorRight}
          alt="for styling purposes only"
          aria-hidden="true"
        />
      </div>
      <div className={"team__container"}>
        <h1> Meet The Team </h1>
        <p>Get to know the face behind the product.</p>

        <div className="team__flex">
          <Card
            img_url={require("../components/team/assets/team/IMG-20221119-WA0004.jpg")}
            name={"Alex Chika"}
            position={"Frontend"}
          />
          <Card
            img_url={require("../components/team/assets/team/IMG-20221119-WA0005.jpg")}
            name={"Busayo Olushola"}
            position={"DevOps"}
          />
          <Card
            img_url={require("../components/team/assets/team/IMG-20221119-WA0006.jpg")}
            name={"Andrew Glago"}
            position={"Backend"}
          />
          <Card
            img_url={require("../components/team/assets/team/IMG-20221119-WA0007.jpg")}
            name={"Okolo Enemona"}
            position={"Product Designer"}
          />
          <Card
            img_url={require("../components/team/assets/team/IMG-20221119-WA0008.jpg")}
            name={"Iruoma Valerie Oby-Ezeani"}
            position={"Project Manager"}
          />
        </div>
      </div>
      <div className="vector-bottom">
        <img
          src={vectorLeft}
          alt="for styling purposes only"
          aria-hidden="true"
        />
      </div>
      <div className="vector-bottom">
        <img
          src={vectorLeft}
          alt="for styling purposes only"
          aria-hidden="true"
        />
      </div>
      <Footer />
    </>
  );
}

export default Team;
