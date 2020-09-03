import React from "react";
import useWindowDimensions from "../../Utilities/useWindowDimensions";
import ShowPicVertical from "./ShowPicVertical";
import ShowPicHorizontal from "./ShowPicHorizontal";
import useScrollPosition from "../../Utilities/useScrollPosition";
import useDocMaxSize from "../../Utilities/useDocMaxSize";
const ShowPic = (props) => {
  const { height, width } = useWindowDimensions();
  const { scrollXPos, scrollYPos } = useScrollPosition();
  const { docHeight, docWidth } = useDocMaxSize();
  console.log(scrollXPos, scrollYPos, docHeight, docWidth);

  return height > width ? (
    <ShowPicVertical photos={props.photos} />
  ) : (
    <ShowPicHorizontal photos={props.photos} />
  );
};

export default ShowPic;
