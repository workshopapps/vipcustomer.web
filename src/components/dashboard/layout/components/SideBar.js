import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { SideBarWrapper, LinksContainer } from "./sidebar.styled";

import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser, FaAddressBook } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

const _links = [
  {
    path: "/dashboard",
    name: "search",
    icon: <IoSearchOutline />
  },

  {
    path: "/dashboard/history",
    name: "history",
    icon: <FaAddressBook />
  },

  {
    path: "/dashboard/top-rated",
    name: "top rated",
    icon: <BsStar />
  },

  {
    path: "/dashboard/profile",
    name: "profile",
    icon: <FaRegUser />
  },

  {
    path: "/dashboard/settings",
    name: "settings",
    icon: <IoSettingsOutline />
  }
];

const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <SideBarWrapper close={sideBarOpen}>
      <LinksContainer>
        {_links.map((link, index) => {
          const { path, name, icon } = link;

          return (
            <NavLink key={index} to={path}>
              <div className="link__wrap">
                <span className="icon">{icon}</span>
                <span className="text">{name}</span>
              </div>
            </NavLink>
          );
        })}

        <div className="link__wrap">
          <AiOutlineLogout></AiOutlineLogout>
        </div>
      </LinksContainer>
    </SideBarWrapper>
  );
};

export default SideBar;
