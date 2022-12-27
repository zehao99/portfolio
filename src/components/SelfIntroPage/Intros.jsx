import React from 'react';
import PageProps from '../../utilities/PageProps';
import ProjectCard from './Cards/ProjectCard';
import Colors from '../../styles/Colors';
import { motion } from 'framer-motion';
import EduCard from './Cards/EduCard';
import Title from './Cards/Title';
import SkillCard from './Cards/SkillCard';
import TextCard from './Cards/TextCard';

const Intro = ({ handleDisplayModal }) => {
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
                        I'm currently a software engineer at Rakuten Group, Inc.
                        Photography is my hobby. I like challenging new things
                        and making discoveries.
                    </p>
                </div>
            </motion.div>
            <div className="past-info-container">
                <div className="edu-container">
                    <Title text="Education Background" />
                    <EduCard
                        className="edu-1"
                        time="2019.09. - 2021.09."
                        school="University of Tokyo"
                        major="MS in Precision Engineering"
                        location="Tokyo, Japan"
                        info="AML Laboratory"
                        link="https://aml.t.u-tokyo.ac.jp/"
                    />
                    <EduCard
                        className="edu-1"
                        time="2015.09.-2019.06."
                        school="Shanghai Jiao Tong University"
                        major="BS in Mechanical Engineering"
                        location="Shanghai, China"
                        info="Minor in Finance"
                    />
                </div>
                <div className="exp-container">
                    <Title text="Experiences" />
                    <EduCard
                        className="exp-1"
                        time="2022.01.- Now"
                        school="Rakuten Group, Inc."
                        major="Application Engineer"
                        location="Tokyo, Japan"
                        info="Application engineer in Commerce Company"
                        link="https://global.rakuten.com"
                    />
                    <EduCard
                        className="exp-1"
                        time="2021.06.-2021.12."
                        school="Reasonwhy Inc."
                        major="Software Engineer (Part-time)"
                        location="Tokyo, Japan"
                        info="Software engineer on Findme Specialist Doctors."
                        link="https://www.reasonwhy.jp"
                    />
                </div>
            </div>
            <div className="projects-container">
                <div className="title-area" style={{ gridArea: 'subtitles' }}>
                    <Title text="Projects" />
                    <p
                        style={{
                            padding: '2rem',
                            textAlign: 'center',
                            width: '70%',
                            margin: 'auto',
                        }}
                    >
                        Now I'm working in the field of software engineering.
                    </p>
                </div>
                <ProjectCard
                    name="SpecDoc"
                    imgText="Findme Specialist Doctors"
                    imgSrc={
                        'https://philipliart.files.wordpress.com/2021/12/spec-doc.jpg?h=400'
                    }
                    style={{ gridArea: 'card' }}
                    onClick={() => handleDisplayModal('specdoc')}
                />
                <ProjectCard
                    name="Calories"
                    imgText="Calories Search"
                    imgSrc={
                        'https://philipliart.files.wordpress.com/2021/12/calories.png?h=400'
                    }
                    style={{ gridArea: 'card' }}
                    onClick={() => handleDisplayModal('calories')}
                />
                <ProjectCard
                    name="EIT"
                    imgText="Flexible Proximity Sensor With Tomographic Approach"
                    imgSrc={
                        'https://philipliart.files.wordpress.com/2021/12/eit.jpg?h=400'
                    }
                    url="https://doi.org/10.3390/s21082736"
                    style={{ gridArea: 'card' }}
                    onClick={() => handleDisplayModal('tomographic')}
                />
            </div>
            <div className="skill-container text-container">
                <Title text="Skills" className="title" />
                <SkillCard
                    skillName="Language"
                    skillInfo="TypeScript, Java, Python, C++, HTML&CSS"
                />
                <SkillCard
                    skillName="Frameworks & Tools"
                    skillInfo="React.js, Next.js, Node.js, Express, PostgreSQL, MongoDB"
                />
                <SkillCard
                    skillName="Cloud & Deployment"
                    skillInfo="AWS (SAA-C02), GCP, Kubernetes, Terraform, Istio, Spinnaker"
                />
                <SkillCard
                    skillName="Creative"
                    skillInfo="Photoshop, Figma, Premiere Pro"
                />
            </div>
            <div className="pub-container text-container">
                <Title text="Publications" />
                <TextCard
                    text={`Zehao Li, Shunshuke Yoshimoto and Akio Yamamoto, 
          "Tomographic Approach for Proximity Imaging using Conductive Sheet", IECON 2020.`}
                    url="https://doi.org/10.1109/IECON43393.2020.9254590"
                    textStyle="italic"
                />
                <TextCard
                    text={`Z. Li, S. Yoshimoto and A. Yamamoto, "Tomographic Proximity Imaging Using Conductive Sheet for Object Tracking." Sensors 21.8 (2021)`}
                    url="https://doi.org/10.3390/s21082736"
                    textStyle="italic"
                />
            </div>
            <div className="award-container text-container">
                <Title text="Awards" />
                <TextCard
                    text={`Master's Thesis Award of Merit, Department of Precision Engineering The University of Tokyo, 2021`}
                    textAlign="center"
                    textStyle="italic"
                />
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
                        content: '';
                        position: absolute;
                        display: block;
                        background: url('/about_bg.jpg') no-repeat center
                            center/cover;
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
                        grid-template-areas: 'edu exp';
                    }

                    .expand-prompt {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .expand-button {
                        color: ${Colors.logoColor};
                        padding: 10px 30px 5px;
                        width: 100px;
                        display: flex;
                        border-radius: 100px;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid ${Colors.logoColor};
                        transition: all 0.2s linear;
                    }

                    .expand-button:hover {
                        cursor: pointer;
                        background: ${Colors.logoColor}44;
                    }

                    .expand-button:active {
                        background: ${Colors.logoColor}77;
                    }

                    .intro-container .past-info-container .edu-container {
                        grid-area: 'edu';
                        padding: 0 2rem;
                    }

                    .intro-container .past-info-container .exp-container {
                        grid-area: 'exp';
                        padding: 0 2rem;
                    }

                    .intro-container .projects-container {
                        margin: 1rem 0;
                        display: grid;
                        width: 100%;
                        grid-template-areas: 'subtitles card card card';
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
                            grid-template-areas: 'edu' 'exp';
                        }
                    }

                    @media (max-width: 800px) and (min-width: 600px) {
                        .intro-container .about-container {
                            height: 250px;
                        }

                        .intro-container .projects-container {
                            grid-template-areas:
                                'subtitles' 'card'
                                'card' 'card';
                            grid-template-columns: 1fr 1fr;
                        }
                    }

                    @media (max-width: 600px) {
                        .intro-container .projects-container {
                            grid-template-areas:
                                'subtitles'
                                'card'
                                'card'
                                'card';
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
