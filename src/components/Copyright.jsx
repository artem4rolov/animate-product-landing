import React from "react";
import { BsChatDotsFill } from "react-icons/bs";

const Copyright = () => {
  const copyrightData = {
    text: "© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.",
    icon: <BsChatDotsFill />,
  };

  return (
    <section className="mt-24 pb-12" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row justify-between gap-y-8">
          {/* text */}
          <div className="text-sm font-light italic max-w-[360px]">
            {copyrightData.text}
          </div>
          {/* image */}
          <div className="-order-1 md:order-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-accent-primary/20 cursor-pointer group">
              <div className="text-3xl text-accent-primary group-hover:scale-110 transition-all">
                {copyrightData.icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
