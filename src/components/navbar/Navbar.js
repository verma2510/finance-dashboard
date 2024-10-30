import React from "react";
import "./Navbar.css";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <Link to="/">RupeeBank</Link>
          </span>
        </div>
        <div className="topRight">
          <div className="navbarIconContainer">
            <IoMdNotifications />
            <span className="topIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <MdLanguage />
          </div>
          <div className="navbarIconContainer">
            <Link to="/settings">
              <IoMdSettings />
            </Link>
          </div>
          <img
            src="https://s7d1.scene7.com/is/image/wbcollab/India_PM_Narendra_Modi-2?qlt=90&fmt=webp&resMode=sharp2"
            alt=""
            className="topProfile"
          />
        </div>
      </div>
    </div>
  );
}
