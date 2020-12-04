import React from "react";
import PageProps from "../Utilities/PageProps";
import ProjectCard from "./Cards/ProjectCard";
import Colors from "./Colors";
import { motion } from "framer-motion";
import EduCard from "./Cards/EduCard";
import Title from "./Cards/Title";
import SkillCard from "./Cards/SkillCard";
import TextCard from "./Cards/TextCard";

const Intro = () => {
  return (
    <div className="intro-container">
      <motion.div
        initial={{ x: -100, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="about-container">
          <h3>About Me</h3>
          <p className="about-text">
            I'm currently a master degree student at University of Tokyo,
            working in the field of robot-human interfaces. Photography is my
            hobby. I like challenging new things and making discoveries.
          </p>
        </div>
      </motion.div>
      <div className="past-info-container">
        <div className="edu-container">
          <Title text="Education Background" />
          <EduCard
            className="edu-1"
            time="2019.09. - Now"
            school="University of Tokyo"
            major="MS in Precision Engineering"
            location="Tokyo, Japan"
            info="AML Laboratory"
            link="https://aml.t.u-tokyo.ac.jp/"
          ></EduCard>
          <EduCard
            className="edu-1"
            time="2015.09.-2019.06."
            school="Shanghai Jiao Tong University"
            major="BS in Mechanical Engineering"
            location="Shanghai, China"
            info="Minor in Finance"
          ></EduCard>
        </div>
        <div className="exp-container">
          <Title text="Experiences" />
          <EduCard
            className="exp-1"
            time="2018.06.-2018.09."
            school="Microport Inc."
            major="CAE Engineer Intern"
            location="Shanghai, China"
            info="Simulations on cardiovascular stent"
            link="http://www.microport.com"
          ></EduCard>
          <EduCard
            className="exp-1"
            time="2017.06.-2018.06."
            school="SJTU Photography Association"
            major="President of SJTUPA"
            location="Shanghai, China"
            info="One of the 10 'Five-Star Students' Associations in campus"
          ></EduCard>
        </div>
      </div>
      <div className="projects-container">
        <div className="title-area" style={{ gridArea: "subtitles" }}>
          <Title text="Projects" />
          <p
            style={{
              padding: "2rem",
              textAlign: "center",
              width: "70%",
              margin: "auto",
            }}
          >
            Now I'm working in the field of robot-human interfaces
          </p>
        </div>
        <ProjectCard
          name="EIT"
          imgText="Flexible Proximity Sensor With Tomographic Approach"
          url="https://doi.org/10.1109/IECON43393.2020.9254590"
          style={{ gridArea: "card" }}
        />
        <ProjectCard
          name="UWBAGV"
          imgText="Positioning System for Port AGVs using UWB"
          style={{ gridArea: "card" }}
        />
        <ProjectCard
          name="Calories"
          imgText="Calories Search"
          // url="https://calories.page"
          style={{ gridArea: "card" }}
        />
      </div>
      <div className="skill-container text-container">
        <Title text="Skills" className="title" />
        <SkillCard
          skillName="Language"
          skillInfo="Python, C++, JavaScript, HTML&CSS, Java, MATLAB"
        />
        <SkillCard
          skillName="Frameworks & Tools"
          skillInfo="React.js, Next.js, Node.js, Express, PostgreSQL, MongoDB"
        />
        <SkillCard
          skillName="Cloud & Deployment"
          skillInfo="GCP, Kubernetes, Istio, Spinnaker"
        />
        <SkillCard skillName="CAE & Modelling" skillInfo="Solidworks, ABAQUS" />
        <SkillCard skillName="Creative" skillInfo="Photoshop, Premiere Pro" />
      </div>
      <div className="pub-container text-container">
        <Title text="Publications" />
        <TextCard
          text={`Zehao Li, Shunshuke Yoshimoto and Akio Yamamoto, 
          "Tomographic Approach for Proximity Imaging using Conductive Sheet", IECON 2020.`}
          url="https://doi.org/10.1109/IECON43393.2020.9254590"
          textStyle="italic"
        />
      </div>
      <div className="award-container text-container">
        <Title text="Awards" />
        <TextCard
          text={`The First Prize of Annual Photography Contest of VCG and 500px, 2016`}
          textAlign="center"
          textStyle="italic"
        />
      </div>
      <style jsx>
        {`
          .intro-container {
            margin: auto;
            max-width: ${PageProps.maxWidth};
          }

          .intro-container .about-container {
            background: rgba(23, 38, 57, 0.6);
            position: relative;
            width: 100%;
            height: 200px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: ${Colors.lightTextColorComplimentary};
          }

          .intro-container .about-container::before {
            content: "";
            position: absolute;
            display: block;
            background: url("${process.env.PUBLIC_URL}/about_bg.jpg") no-repeat
              center center/cover;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
          }

          .intro-container .about-container h3 {
            display: block;
            width: 100%;
            max-width: 800px;
            align-self: center;
            margin: 1rem 3rem;
            margin-top: 0.5rem;
          }

          .intro-container .about-container p {
            background: rgba(255, 242, 219, 0.75);
            color: ${Colors.primaryColor};
            max-width: 800px;
            margin: 0 3rem;
            padding: 1rem;
            line-height: 1.5rem;
          }

          .intro-container .past-info-container {
            display: grid;
            grid-template-column: 1fr 1fr;
            grid-template-areas: "edu exp";
          }
          .intro-container .past-info-container .edu-container {
            grid-area: "edu";
            padding: 0 2rem;
          }
          .intro-container .past-info-container .exp-container {
            grid-area: "exp";
            padding: 0 2rem;
          }

          .intro-container .projects-container {
            margin: 1rem 0;
            display: grid;
            width: 100%;
            grid-template-areas: "subtitles card card card";
            grid-template-columns: 1fr 1fr 1fr 1fr;
            justify-items: center;
          }

          .intro-container .edu-background-container {
          }

          .intro-container .text-container {
            margin-top: 1rem;
          }

          .intro-container .text-container title {
            margin-top: 1rem;
          }

          .intro-container .award-container {
            margin-bottom: 3rem;
          }
          @media (max-width: 916px) {
            .intro-container .about-container h3 {
              display: block;
              width: 100%;
              padding: 0 3rem;
            }
            .intro-container .past-info-container {
              display: grid;
              grid-template-column: 1fr;
              grid-template-areas: "edu" "exp";
            }
          }

          @media (max-width: 800px) and (min-width: 600px) {
            .intro-container .about-container {
              height: 250px;
            }

            .intro-container .projects-container {
              grid-template-areas:
                "subtitles" "card"
                "card" "card";
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (max-width: 600px) {
            .intro-container .projects-container {
              grid-template-areas:
                "subtitles"
                "card"
                "card"
                "card";
              grid-template-columns: 1fr;
              justify-items: center;
            }

            .intro-container .about-container {
              height: 400px;
            }
          }
        `}
        )
      </style>
    </div>
  );
};

export default Intro;
