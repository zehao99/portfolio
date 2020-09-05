import React from "react";
import LandScapePage from "./LandScapePages";

const Info = {
  title: "Zhejiang 浙江",
  description: "",
};

const Photos = [
  {
    id: 0,
    url: "https://philipliart.files.wordpress.com/2018/10/2018043-copy.jpg",
    description: "Shining Woods, 2018, Zhejiang",
  },
];

const ZhejiangPage = () => {
  return <LandScapePage title={Info.title} Photos={Photos} />;
};

export default ZhejiangPage;
