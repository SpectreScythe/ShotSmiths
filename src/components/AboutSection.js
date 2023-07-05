import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import {
  containerAnimations,
  topTitleAnimations,
  titleTextAnimations,
  titleBtnAnimations,
  imgAnimations,
} from "../pages/Animations";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div variants={containerAnimations}>
          <Hide>
            <motion.h2
              variants={topTitleAnimations}
              initial="hidden"
              whileInView="show"
              exit="exit"
            >
              <br />
              We work to
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              variants={topTitleAnimations}
              initial="hidden"
              whileInView="show"
              exit="exit"
            >
              make your
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              variants={topTitleAnimations}
              initial="hidden"
              whileInView="show"
              exit="exit"
            >
              <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              variants={topTitleAnimations}
              initial="hidden"
              whileInView="show"
              exit="exit"
            >
              come true.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p
          variants={titleTextAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Contact us for any photography or <br />
          videography ideas that you may <br />
          have. We have profressionals waiting <br />
          to work with you.
        </motion.p>
        <motion.button
          variants={titleBtnAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
          style={{
            fontSize: "1.2rem",
            fontWeight: "bolder",
            letterSpacing: "5px",
          }}
        >
          Contact Us
        </motion.button>
      </Description>
      <Image>
        <br />
        <motion.img
          variants={imgAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
          src={home1}
          style={{
            marginTop: "5rem",
            borderRadius: "20px",
          }}
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
