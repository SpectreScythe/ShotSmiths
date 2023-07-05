import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import {
  imgAnimations,
  serviceTitleAnimations,
  cardAAnimations,
  cardBAnimations,
  cardCAnimations,
  cardDAnimations,
} from "../pages/Animations";
import Wave from "./Wave";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <motion.h2
          variants={serviceTitleAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
        >
          High <span>quality</span> services
        </motion.h2>
        <Cards>
          <Card
            variants={cardDAnimations}
            initial="hidden"
            whileInView="show"
            exit="exit"
          >
            <div className="icon">
              <img src={clock} alt="Clock Icon" />
              <h3>Efficient</h3>
            </div>
            <p>Efficiency Redefined: Streamlining Success with Precision.</p>
          </Card>
          <Card
            variants={cardAAnimations}
            initial="hidden"
            whileInView="show"
            exit="exit"
          >
            <div className="icon">
              <img src={teamwork} alt="Teamwork Icon" />
              <h3>Collaborative</h3>
            </div>
            <p>Unite, Collaborate, Achieve: Together, We Make Magic Happen.</p>
          </Card>
          <Card
            variants={cardBAnimations}
            initial="hidden"
            whileInView="show"
            exit="exit"
          >
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Unleashing Creativity through Calculated Steps</p>
          </Card>
          <Card
            variants={cardCAnimations}
            initial="hidden"
            whileInView="show"
            exit="exit"
          >
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Capturing Moments, Making Memories, Affordably.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <motion.img
          variants={imgAnimations}
          initial="hidden"
          whileInView="show"
          exit="exit"
          src={home2}
          style={{ borderRadius: "20px" }}
          alt="Professional Camera Equipment"
        />
      </Image>
      <Wave />
    </Services>
  );
};

const Services = styled(About)`
  img {
    /* width: 600px;
    height: 600px; */
  }
  h2 {
    padding-bottom: 5rem;
  }
  p {
    font-weight: bold;
    width: 70%;
    font-size: 1.2rem;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
    margin-left: 7rem;
  }
`;

const Card = styled(motion.div)`
  flex-basis: 20rem;
  img {
    width: 35px;
    height: 35px;
  }
  .icon {
    display: flex;
    align-items: center;
    h3 {
      font-size: 1.7rem;
      margin-left: 1rem;
      color: #23d997;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
