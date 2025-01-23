import logo from "../assets/LOGO.svg";
import hamburgerIcon from "../assets/hamBurgerIcon.svg";
import { CiSearch } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <header>
        <div className="headerDiv">
          <div className="Img-wrapper">
            <img src={logo} alt="" />
          </div>

          <div className="toggleBtn_div">
            <p>
              <CiSearch size={25} />
            </p>
            <p>عربي</p>
            <img src={hamburgerIcon} alt="" onClick={toggleMenu} />
          </div>
        </div>

        {isMenuOpen && (
          <div className="menuDiv">
            <p>
              <IoCloseCircle size={34} onClick={toggleMenu} />
            </p>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Sectors</li>
              <li>Community</li>
              <li>Investor Relationship & Governance</li>
              <li>News & Events</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>

            <div className="menuBottomDiv">
              <h2>Follow us</h2>
              <div className="iconDiv">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaThreads />
                </span>
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
