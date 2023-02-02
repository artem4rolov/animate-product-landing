import React from "react";

// изображения
import Logo from "../assets/img/logo.png";
// иконки
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
// компоненты
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div>
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>

          {/* навигация, скрыта на мелких и средних экранах (ss, sm, md), показываем только на больших (lg) */}
          <div className="hidden lg:flex">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
