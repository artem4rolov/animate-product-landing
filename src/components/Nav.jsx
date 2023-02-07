import React from "react";

import { navigationData } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-8">
        {navigationData.map((nav, index) => (
          <li key={index}>
            <a href={nav.href}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
