import React from "react";
import useWindowDimensions from "../../Utilities/useWindowDimensions";
import ShowPicVertical from "./ShowPicVertical";
import ShowPicHorizontal from "./ShowPicHorizontal";

const ShowPic = (props) => {
  const { height, width } = useWindowDimensions();

  return height > width ? (
    <ShowPicVertical photos={props.photos} />
  ) : (
    <ShowPicHorizontal photos={props.photos} />
  );
};

export default ShowPic;
