import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../Utilities/useWindowDimensions";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
import NavbarWide from "./NavbarWide/NavbarWide";

const navContent = [
  {
    id: "Latest Works",
    content: [],
    show: false,
    isRight: false,
    isExternalLink: false,
    url: "/latestworks",
  },
  {
    id: "Landscape",
    content: [
      {
        name: "Xinjiang 新疆",
        url: "/landscape/xinjiang",
      },
      {
        name: "Japan 日本",
        url: "/landscape/japan",
      },
      {
        name: "Zhejiang 浙江",
        url: "/landscape/zhejiang",
      },
    ],
    show: false,
    isRight: false,
    isExternalLink: false,
    url: "/landscape",
  },
  {
    id: "Collections",
    content: [
      {
        name: "Back to Desert",
        url: "/collections/backtodesert",
      },
      {
        name: "桜X雪",
        url: "/collections/sakurayuki",
      },
      {
        name: "The weird",
        url: "/collections/theweird",
      },
      {
        name: "Japan Stories",
        url: "/collections/japanstories",
      },
      {
        name: "Road Trip",
        url: "/collections/roadtrip",
      },
    ],
    show: false,
    isRight: false,
    isExternalLink: false,
    url: "/collections",
  },
  {
    id: "About Me",
    content: [],
    show: false,
    isRight: false,
    isExternalLink: false,
    url: "/about",
  },
  {
    id: "Calories",
    content: [],
    show: false,
    isRight: false,
    isExternalLink: true,
    url: "https://calories.page",
  },
];

const Navbar = () => {
  const { height, width } = useWindowDimensions();

  return width > 700 ? (
    <NavbarWide navContent={navContent} />
  ) : (
    <NavbarMobile navContent={navContent} />
  );
};

export default Navbar;
