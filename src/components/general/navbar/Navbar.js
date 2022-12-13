import React, { useState, useEffect } from "react";
import {
  Items,
  LogoWrapper,
  MobileNavWrapper,
  NavItemsWrapper,
  NavWrapper
} from "./navbar.styled";
import Button from "../Button";
import LOGO from "../assests/icons/logo.svg";
import MenuBtn from "./MenuBtn";
import { Link } from "react-router-dom";
import useScreenSize from "hooks/useScreenSize";
import { AuthStore } from "store/contexts/AuthContext";

const Navbar = () => {
  const [menuopen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { screenWidth } = useScreenSize();
  const mobile = screenWidth <= 500;
  const tablet = screenWidth <= 900;
  const { user } = AuthStore();

  const scrollHeader = () => {
    if (window.scrollY >= 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  /*This code is not really necessary but for production reasons*/
  useEffect(() => {
    if (!tablet) {
      window.addEventListener("resize", setMenuOpen(false));
    }
  }, [tablet]);

  /*!IMPORTANT-
This may not be the best way to effect this...in case it slows down page,
implementation should be changed
*/

  //get all anchor tags in .nav--link--items
  const navLinks = document.querySelectorAll(".nav--link--items > a");
  const navLogo = document.querySelector(".nav--logo");
  const removeClass = (items) => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
  };
  //loop through links
  navLinks.forEach((link) => {
    //add a click listener to each
    link.addEventListener("click", (e) => {
      //onclick
      removeClass(navLinks);
      e.currentTarget.classList.add("active");
    });
  });

  navLogo?.addEventListener("click", () => removeClass(navLinks));

  return (
    /* Link currently does not have a route

    this should be implemented when the routes are confirmed*/

    <NavWrapper
      tablet={tablet}
      mobile={mobile}
      scroll={scroll}
      menuopen={menuopen}>
      <NavItemsWrapper>
        <Items className="nav--logo">
          <Link to="/">
            <LogoWrapper mobile={mobile} tablet={tablet}>
              <img src={LOGO} alt="starfinder logo" />
            </LogoWrapper>
          </Link>
        </Items>
        {tablet && (
          /* on click of the menu_btn on tablet & mobile toggle menu*/
          <Items onClick={() => setMenuOpen(!menuopen)}>
            {/*changes color of component if menu is open*/}
            <MenuBtn menuopen={menuopen} />
          </Items>
        )}

        <Items className="nav--link--items" tablet={tablet}>
          <Link to="/">Home</Link>
          <Link to={"/team"}>The Team</Link>
          <Link to="/about-us">About Us</Link>
        </Items>

        <Items className="nav--link--items" tablet={tablet}>
          {!user && (
            <Link to="/login">
              <Button
                style={{ padding: "12px 24px", fontWeight: "700" }}
                text="Get Started"
              />
            </Link>
          )}

          {user && (
            <Link to="/dashboard">
              <div style={{ textTransform: "capitalize" }}>
                Hi {user?.user?.first_name || "user"}
              </div>
            </Link>
          )}
        </Items>
      </NavItemsWrapper>
      {tablet && (
        /* display on tablet screen size */
        <MobileNavWrapper
          tablet={tablet}
          mobile={mobile}
          style={{ color: "#fff" }}
          className={`${menuopen && "open"} nav--link--items`}>
          <Link to="/">Home</Link>
          <Link to={"/team"}>The Team</Link>
          <Link to="/about-us">About Us</Link>

          {!user && (
            <>
              <Link to="/login">Get Started</Link>
            </>
          )}

          {user && (
            <Link to="/dashboard">
              <div style={{ textTransform: "capitalize" }}>
                Hi {user?.user?.first_name || "user"}
              </div>
            </Link>
          )}
        </MobileNavWrapper>
      )}
    </NavWrapper>
  );
};

export default Navbar;
