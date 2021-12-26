import React from "react";
import { motion } from "framer-motion";
import Colors from "../Colors";
import ComponentWithScrollLoad from "../../Utilities/ComponentWithScrollLoad.jsx";

const ProjectCard = (props) => {
  return (
    <div className="projectcard-container" onClick={props.onClick}>
      <motion.div
        animate={{
          scale: [0.5, 1.05, 1],
          overflow: "hidden",
        }}
        transition={{ duration: 0.3 }}
      >
          <div className="card">
            <img alt="" src={props.imgSrc} />
            <div className="card-text">
              <p>{props.imgText}</p>
            </div>
          </div>
      </motion.div>

      <style jsx>
        {`
          .projectcard-container {
            cursor: pointer;
            max-width: 200px;
            max-height: 200px;
            margin: 1rem;
            transition: all 0.3s ease-in-out;
          }
          .projectcard-container .card {
            position: relative;
            overflow: hidden;
          }

          .projectcard-container .card::after {
            content: "";
            position: absolute;
            display: block;
            background: ${Colors.secondaryColor};
            opacity: 0.9;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scale(2) translateX(-75%) translateY(-75%) rotate(-25deg);
            transition: transform 0.8s cubic-bezier(0.2, 1, 1, 1);
          }

          .projectcard-container .card:hover::after {
            transform: scale(2) translateX(0) translateY(0) rotate(-25deg);
          }
          .projectcard-container .card img {
            width: 100%;
            height: 100%;
            transition: transform 0.4s ease-in-out;
          }
          .projectcard-container .card:hover img {
            transform: scale(1.05);
          }

          .projectcard-container .card .card-text {
            font-family: "Sora", sans-serif;
            font-size: 1rem;
            z-index: 10;
            opacity: 0;
            padding: 2rem;
            position: absolute;
            text-align: center;
            top: 50%;
            left: 0;
            right: 0;
            color: ${Colors.complimentaryTextColor};
            transform: translateY(-50%);
            transition: all 0.6s ease-in-out 0.15s ease-in-out;
          }
          .projectcard-container .card:hover .card-text {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectCard;
