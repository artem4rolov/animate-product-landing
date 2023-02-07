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
  const [navMobile, setNavMobile] = React.useState(false);

  return (
    <header
      className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0"
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            {/* logo */}
            <a href="#">
              <img src={Logo} alt="" />
            </a>

            {/* навигация для больших экранов, скрыта на мелких и средних экранах (> 1024px), показываем только на больших (lg) */}
            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>
          {/* навигация для мелких экранов, скрыта на мелких и средних экранах (< 1024px), показываем только на мелких экранах (sm, ss) */}
          <div
            className={`${
              navMobile ? "max-h-52" : "max-h-0"
            } lg:hidden absolute top-24 w-full left-0 right-0 rounded bg-accent-tertiary transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          {/* Кнопка меню */}
          <button className="btn btn-quaternary flex items-center gap-x-[20px] group">
            Request Demo{" "}
            <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
          </button>

          {/* Кнопка мобильного меню доступна только на мелких экранах */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="lg:hidden text-2xl text-primary cursor-pointer"
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
