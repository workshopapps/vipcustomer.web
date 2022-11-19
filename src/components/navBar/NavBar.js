import React, { useState } from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavDiv>
      <div className="Navbar">
        <img src={logo} alt="" className="logo" />
        <div className={`nav-items ${isOpen && "open"}`}>
          <span className="nav-links">
            <a href="/products">Products</a>
            <a href="/resources">Resources</a>
            <a href="/about">About Us</a>
          </span>
          <span className="nav-btn">
            <a href="/login" className="login-btn">
              Log In
            </a>
            <a href="/signup" className="signup-btn">
              Get Started
            </a>
          </span>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
      </div>
    </NavDiv>
  );
}
const NavDiv = styled.div`
  color: #fffafb;
  background-color: #091540;
  .Navbar {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 0 auto;
  }
  .Navbar > .nav-items > span > a {
    font-weight: 500;
    font-size: 16.0427px;
    line-height: 28px;
    font-style: normal;
    text-transform: capitalize;
    margin: 15px;
    margin-left: 25px;
    position: relative;
    opacity: 0.9;
  }

  .Navbar > .nav-items > a:hover {
    opacity: 1;
  }

  .Navbar > .nav-items > a::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: #ffffff;
    transition: all 0.45s;
  }

  .Navbar > .nav-items > a:hover::before {
    width: 100%;
  }

  .Navbar > .nav-toggle {
    display: none;
  }
  .login-btn {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }
  .signup-btn {
    width: 130.35px;
    height: 49.06px;
    padding: 6px;
    border: 1px solid #fffafb;
    border-radius: 8px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
  }
  .nav-links {
    margin-right: 140px !important;
  }
  @media (max-width: 810px) {
    .nav-links a,
    .nav-btn a {
      display: block;
    }
    .nav-btn {
      margin-top: -20px;
    }
    .signup-btn {
      padding: 0px;
    }
    .Navbar > .nav-items {
      position: absolute;
      top: 60px;
      display: flex;
      flex-direction: column;
      background-color: #091540;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      transition: all 0.45s;
    }

    .Navbar > .nav-items > a::before {
      background: transparent;
    }

    .Navbar > .nav-items.open {
      transform: translateX(0);
    }

    .Navbar > .nav-toggle {
      display: flex;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .nav-toggle > .bar {
      position: relative;
      width: 32px;
      height: 2px;
      background: #ffffff;
      transition: all 0.45s ease-in-out;
    }

    .nav-toggle > .bar::before,
    .nav-toggle > .bar::after {
      content: "";
      position: absolute;
      height: 2px;
      background: #ffffff;
      border-radius: 2px;
      transition: all 0.45s ease-in-out;
    }

    .nav-toggle > .bar::before {
      width: 32px;
      transform: translateY(-8px);
      right: 0;
    }

    .nav-toggle > .bar::after {
      width: 32px;
      transform: translateY(8px);
    }

    .nav-toggle.open > .bar {
      transform: translateX(-40px);
      background: transparent;
    }

    .nav-toggle.open > .bar::before {
      width: 32px;
      transform: rotate(45deg) translate(26px, -26px);
    }

    .nav-toggle.open > .bar::after {
      transform: rotate(-45deg) translate(26px, 26px);
    }
    .signup-btn {
      border: none !important;
    }
  }
  @media (min-width: 1130px) {
    .nav-links {
      margin-right: 240px !important;
    }
    .nav-links a {
      padding: 30px !important;
    }
  }
  @media (min-width: 1300px) {
    .nav-links {
      margin-right: 340px !important;
    }
  }
  @media (min-width: 1400px) {
    .nav-links {
      margin-right: 540px !important;
    }
    .nav-links a {
      margin-left: 40px !important;
      margin-right: 40px !important;
    }
  }
`;
export default NavBar;
