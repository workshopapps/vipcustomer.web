import React, { useEffect, useState } from "react";
import mobile from "../assets/mobile.png";
import tablet from "../assets/tablet.png";
import desktop from "../assets/desktop.png";
import classes from "./Display.module.css";
const Display = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    function windowlistener() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", windowlistener);

    return () => {
      window.removeEventListener("resize", windowlistener);
    };
  });

  let image = mobile;
  if (width >= 640 && width < 1024) {
    image = tablet;
  } else if (width >= 1024) {
    image = desktop;
  }
  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt="display" />
      <img className={classes.overlay} src={image} alt="display" />
    </div>
  );
};

export default Display;
