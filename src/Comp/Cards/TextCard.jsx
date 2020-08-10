import React from "react";
import { motion } from "framer-motion";
import Colors from "../Colors";
import ComponentWithScrollLoad from "../../Utilities/ComponentWithScrollLoad";

const TextCard = (props) => {
  return (
    <motion.div>
      <div className="textcard-container">
        <p>{props.text}</p>
      </div>
      <style jsx>{`
        .textcard-container {
          background: ${Colors.skillCardBackgroundColor};
          width: 80%;
          margin: 0 auto;
          text-align: ${props.textAlign};
          padding: 1rem;
        }
        .textcard-container p {
          margin-top: 0.5rem;
          margin-bottom: 0.4rem;
          font-style: ${props.textStyle};
        }
      `}</style>
    </motion.div>
  );
};

export default ComponentWithScrollLoad(TextCard);
