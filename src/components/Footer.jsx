import React from "react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

import { footerData } from "../data";

import Copyright from "./Copyright";

const Footer = () => {
  const { logo, address, email, phone, list1, list2 } = footerData;

  // const socialList = [
  //   {
  //     icon: <FaYoutube />,
  //     href: "#",
  //   },
  //   {
  //     icon: <FaInstagram />,
  //     href: "#",
  //   },
  //   {
  //     icon: <FaGithub />,
  //     href: "#",
  //   },
  // ];

  return (
    <footer>
      <div className="container mx-auto">
        <div>
          <div>
            {/* logo */}
            <a href="">
              <img className="mb-[65px]" src={logo} alt="" />
            </a>
            {/* adress */}
            <div>{address}</div>
            {/* email */}
            <div>{email}</div>
            {/* phone */}
            <div>{phone}</div>
          </div>

          {/* lists */}
          <div>
            {/* list1 */}
            <div>
              <ul>
                {list1.map((item, index) => (
                  <li key={index}>
                    <a className="text-primary" href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* list2 */}
            <div>{list2}</div>
            {/* social */}
            {/* <div>{socialList}</div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
