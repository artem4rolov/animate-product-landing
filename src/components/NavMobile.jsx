import React from "react";

import { navigationData } from "../data";

const NavMobile = () => {
  return (
    <ul className="flex flex-col px-6 py-7 gap-y-4">
      {navigationData.map((nav, index) => (
        <li key={index}>
          <a className="text-white" href={nav.href}>
            {nav.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMobile;
