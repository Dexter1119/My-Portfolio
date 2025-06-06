import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between py-6"> {/* Fixed 'className' typo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaLinkedin />
        <FaInstagram />
        <FaTwitter /> {/* Replaced invalid icon */}
      </div>
    </nav>
  );
};

export default Navbar;
