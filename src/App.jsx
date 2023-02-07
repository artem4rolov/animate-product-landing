import React from "react";

// библиотека анимции по скроллу
import Aos from "aos";
import "aos/dist/aos.css";

// компоненты
import {
  About,
  Copyright,
  CtaSection,
  Features,
  Footer,
  Header,
  Hero,
  Nav,
  NavMobile,
  Testimonials,
  TestimonialsSlider,
} from "./components/index.js";

const App = () => {
  // инициализация библиотеки с анимацией
  Aos.init({
    duration: 1800,
    offcet: 0,
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
    </div>
  );
};

export default App;
