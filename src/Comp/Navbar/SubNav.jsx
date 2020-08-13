import React from "react";
import { motion, transform } from "framer-motion";
import NavTag from "./NavTag";
import Color from "../Colors";

const styleLeft = {
  zIndex: "100",
  position: "absolute",
  display: "block",
  minWidth: "160px",
  boxShadow: "rgba(0,0,0,0.4) 0.3rem 0.3rem 0.3rem",
};
const styleRight = {
  position: "absolute",
  display: "block",
  minWidth: "160px",
  boxShadow: "rgba(0,0,0,0.4) 0.3rem 0.3rem 0.3rem",
  right: 0,
};

const SubNav = (props) => {
  const content = props.show ? (
    <motion.div
      style={props.isRight ? styleRight : styleLeft}
      animate={{ opacity: [0, 1] }}
      translate={{ duration: 0.3 }}
    >
      {props.content === undefined
        ? null
        : props.content.map((e) => {
            return <NavTag key={e.url} url={e.url} name={e.name} />;
          })}
    </motion.div>
  ) : null;

  return content;
};
export default SubNav;
