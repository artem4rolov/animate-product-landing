import React from "react";

import { aboutData } from "../data";

const About = () => {
  const { image, title, subtitle } = aboutData;

  return (
    <section className="my-[30px] xl:mt-[100px]">
      <div className="container mx-auto">
        <div className="bg-accent-secondary/[15%] rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row">
          {/* image */}
          <div>
            <img src={image} alt="about img" />
          </div>
          {/* text */}
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
