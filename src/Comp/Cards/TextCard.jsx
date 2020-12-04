import React from "react";
import { motion } from "framer-motion";
import Colors from "../Colors";
import ComponentWithScrollLoad from "../../Utilities/ComponentWithScrollLoad";
import Color from "../Colors";

const TextCard = (props) => {
  const hoverColor = props.url !== undefined ? Colors.lightTextColorComplimentary : Colors.primaryFontColor
  return (
    <motion.div>
      <div className={props.url !== undefined ? "textcard-container textcard-container-with-url" : "textcard-container textcard-container-without-url"}>
        <p><a href={props.url}>{props.text}</a></p>
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
          margin-top: 0.5rem !important;
          margin-bottom: 0.4rem !important;
          font-style: ${props.textStyle};
        }

        .textcard-container a {
          color: ${Colors.primaryFontColor};
          text-decoration: None;
          transition: 0.5s all ease-in-out;
        }

        .textcard-container-without-url:hover a{
          color: ${Colors.primaryFontColor};
          cursor: default;
        }
        
        .textcard-container-with-url:hover a{
          text-decoration: underline;
          color: ${Colors.lightTextColorComplimentary};
          cursor: pointer;
        }

      `}</style>
    </motion.div>
  );
};

export default ComponentWithScrollLoad(TextCard);
