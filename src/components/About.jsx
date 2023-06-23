import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Python, Java,
        proficient in HTML, CSS, and JavaScript, and expertise in frameworks
        like MERN, Node.js and RESTful API. I'm a certified AWS Cloud Architect,
        proficient in database management systems such as MySQL, PostgreSQL, and
        MongoDB. I have profound understanding of server configuration and
        deployment using tools such as Docker and Kubernetes. Let's work
        together to bring your ideas to life!
      </motion.p>
      <Container>
        <div className="singleCol social-media-icons-white place-content-start space-x-4">
          <a href="https://www.linkedin.com/in/ny-yanlin-chen/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Ychen463">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://yanlinc.medium.com/">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
      </Container>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
