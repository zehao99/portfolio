import React from "react";
import LandScapePage from "./LandScapePages";

const Info = {
  title: "Xin Jiang 新疆",
  description: "",
};

const Photos = [
  {
    id: 0,
    url: "https://philipliart.files.wordpress.com/2018/10/2018040-copy.jpg",
    description: "Anjihai, 2018, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 1,
    url: "https://philipliart.files.wordpress.com/2018/10/2018041-copy.jpg",
    description: "Fluctuate, 2018, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 2,
    url: "https://philipliart.files.wordpress.com/2018/10/img_9850_polarr.jpg",
    description: "Beam, 2018, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 3,
    url: "https://philipliart.files.wordpress.com/2018/10/img_9966-1.jpg",
    description: "Blizzard, 2018, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 4,
    url: "https://philipliart.files.wordpress.com/2018/12/img_2774.jpg",
    description: "Anjihai Canyon, 2018, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 5,
    url: "https://philipliart.files.wordpress.com/2018/10/2018039-copy.jpg",
    description: "Rainbow, 2018, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 6,
    url: "https://philipliart.files.wordpress.com/2018/10/img_9942.jpg",
    description: "Grassland, 2018, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 7,
    url: "https://philipliart.files.wordpress.com/2018/12/img_1931.jpg",
    description: "Forest, 2018, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 8,
    url: "https://philipliart.files.wordpress.com/2018/12/img_1918.jpg",
    description: "Stream, 2018, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 9,
    url: "https://philipliart.files.wordpress.com/2019/10/img_1032.jpg",
    description: "Sunlight In The Crack, 2019, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 10,
    url: "https://philipliart.files.wordpress.com/2019/10/img_1058.jpg",
    description: "Before Storm, 2019, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 11,
    url: "https://philipliart.files.wordpress.com/2019/10/img_1916.jpg",
    description: "Starry Night, 2019, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 12,
    url: "https://philipliart.files.wordpress.com/2019/10/img_0279.jpg",
    description: "Glowing River, 2019, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 13,
    url: "https://philipliart.files.wordpress.com/2019/10/img_0310.jpg",
    description: "Twist & Turns, 2019, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 14,
    url: "https://philipliart.files.wordpress.com/2019/10/img_1161.jpg",
    description: "Behind Giants, 2019, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 15,
    url: "https://philipliart.files.wordpress.com/2019/10/img_1944.jpg",
    description: "Castle of Devil, 2019, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 16,
    url: "https://philipliart.files.wordpress.com/2019/10/img_2360.jpg",
    description: "Sand Storm, 2019, Xinjiang",
    width: 3,
    height: 2,
  },
  {
    id: 17,
    url: "https://philipliart.files.wordpress.com/2019/11/img_3289.jpg",
    description: "Lights in the valley, 2019, Xinjiang",
    width: 3,
    height: 2,
  },
];

const XinjiangPage = () => {
  return <LandScapePage title={Info.title} Photos={Photos} />;
};

export default XinjiangPage;
