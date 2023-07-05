import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { contactTitle } from "./Animations";
import { workLineAnimations } from "../pages/Animations";
import Wave from "../components/Wave";

const ContactUs = () => {
  return (
    <ContactStyle>
      <Title>
        <motion.h2
          variants={contactTitle}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          Get in Touch
        </motion.h2>
      </Title>
      <Line
        variants={workLineAnimations}
        initial="hidden"
        whileInView="show"
        exit="exit"
      />
      <div style={{ display: "flex" }}>
        <SocialStyled
          variants={contactTitle}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Circle />
          <h2>Send Us a Message</h2>
        </SocialStyled>
      </div>
      <div style={{ display: "flex" }}>
        <SocialStyled
          variants={contactTitle}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Circle />
          <h2>Follow Us on Instagram</h2>
        </SocialStyled>
      </div>
      <div style={{ display: "flex" }}>
        <SocialStyled
          variants={contactTitle}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Circle />
          <h2>Re-tweet our Birds</h2>
        </SocialStyled>
      </div>
      <Wave />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: ghostwhite;
  min-height: 90vh;
  @media (max-width: 1300px) {
    width: 80%;
    overflow: hidden;
  }
`;

const Title = styled(motion.div)`
  @media (max-width: 1300px) {
    margin-top: 15rem;
  }
  margin: 4rem 0rem;
`;

const Circle = styled(motion.div)`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: #23d997;
`;

const SocialStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 2rem;
    width: 80vh;
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  width: 100%;
  background-color: #23d997;
  margin-top: -2rem;
  margin-bottom: 3rem;
`;
export default ContactUs;
