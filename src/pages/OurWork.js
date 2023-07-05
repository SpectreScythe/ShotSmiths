import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import goodTimes from "../img/goodtimes-small.png";
import athlete from "../img/athlete-small.png";
import theRacer from "../img/theracer-small.png";
import { motion } from "framer-motion";
import {
  workTitleAnimations,
  workImgAnimations,
  workLineAnimations,
} from "../pages/Animations";
import TopScroll from "../components/TopScroll";

const OurWork = () => {
  return (
    <Work className="our-work">
      <Movie>
        <motion.h2
          variants={workTitleAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
        >
          The Athlete
        </motion.h2>
        <motion.div
          variants={workLineAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
          className="work-line"
        ></motion.div>
        <Link to="/work/the-athlete">
          <motion.img
            variants={workImgAnimations}
            initial="hidden"
            whileInView="show"
            exit="exit"
            src={athlete}
            alt=""
          />
        </Link>
      </Movie>
      <Movie>
        <motion.h2
          variants={workTitleAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
        >
          The Racer
        </motion.h2>
        <motion.div
          variants={workLineAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
          className="work-line"
        ></motion.div>
        <Link to="/work/the-racer">
          <motion.img
            variants={workImgAnimations}
            initial="hidden"
            whileInView="show"
            exit="exit"
            src={theRacer}
            alt=""
          />
        </Link>
      </Movie>
      <Movie>
        <motion.h2
          variants={workTitleAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
        >
          The Good Times
        </motion.h2>
        <motion.div
          variants={workLineAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
          className="work-line"
        ></motion.div>
        <Link to="/work/good-times">
          <motion.img
            variants={workImgAnimations}
            initial="hidden"
            whileInView="show"
            exit="exit"
            src={goodTimes}
            alt=""
          />
        </Link>
      </Movie>
      <TopScroll />
    </Work>
  );
};

const Work = styled.div`
  @media (max-width: 1300px) {
    justify-content: center;
  }
  min-height: 100vh;
  overflow: hidden;
  padding: 10rem 10rem;
  h2 {
    padding: 0rem 0rem 3rem 0rem;
  }
`;

const Movie = styled.div`
  @media (max-width: 1300px) {
    margin-top: 10rem;
    overflow: hidden;
  }
  padding-bottom: 3rem;
  .work-line {
    height: 0.2rem;
    width: 100%;
    background-color: #23d997;
    margin-top: -2rem;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  h2 {
    color: ghostwhite;
  }
`;

export default OurWork;
