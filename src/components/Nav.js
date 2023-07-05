import React from "react";
import styled from "styled-components";
import camera from "../img/camera.png";
import email from "../img/email.png";
import work from "../img/work-in-progress.png";
import info from "../img/information-button.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinksAnimations } from "../pages/Animations";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <img
        style={{
          width: "50px",
          height: "50px",
        }}
        src={camera}
        alt=""
      />
      <h1>
        <Link
          style={{
            color: "rgb(30,30,30)",
            textDecoration: "none",
          }}
          id="logo"
          to="/"
        >
          ShotSmiths
        </Link>
      </h1>
      <ul>
        <motion.li variants={navLinksAnimations} whileTap="whileTap">
          <img
            style={{
              width: "30px",
              height: "30px",
            }}
            src={info}
            alt=""
          />
          <Link
            style={{
              color: "rgb(30,30,30)",
              textDecoration: "none",
              paddingLeft: "1rem",
              fontSize: "1.5rem",
            }}
            to="/"
          >
            About Us
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "30%" : "0%" }}
          />
        </motion.li>
        <motion.li variants={navLinksAnimations} whileTap="whileTap">
          <img
            style={{
              width: "30px",
              height: "30px",
            }}
            src={work}
            alt=""
          />
          <Link
            style={{
              color: "rgb(30,30,30)",
              textDecoration: "none",
              paddingLeft: "1rem",
              fontSize: "1.5rem",
            }}
            to="/work"
          >
            Our Work
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "30%" : "0%" }}
          />
        </motion.li>
        <motion.li variants={navLinksAnimations} whileTap="whileTap">
          <img
            style={{
              width: "30px",
              height: "30px",
            }}
            src={email}
            alt=""
          />
          <Link
            style={{
              color: "rgb(30,30,30)",
              textDecoration: "none",
              paddingLeft: "1rem",
              fontSize: "1.5rem",
            }}
            to="/contact"
          >
            Contact Us
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "30%" : "0%" }}
          />
        </motion.li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  z-index: 1;
  position: static;
  width: 100%;
  position: fixed;
  color: #282828;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #23d997;
  .a {
    color: white;
    text-decoration: none;
    font-weight: lighter;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2.5rem;
    font-family: "Belanosima", sans-serif;
    font-weight: lighter;
  }
  li {
    display: flex;
    justify-content: center;
    font-weight: bolder;
    font-size: 1.5rem;
    transition: 0.5s;
    padding-left: 7rem;
    position: relative;
    width: 370px;
    text-align: center;
  }
  li:hover {
    cursor: pointer;
    transition: 0.5s;
    letter-spacing: 5px;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      width: 100%;
      justify-content: space-around;
    }
    li {
      width: 220px;
      padding: 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background-color: #232323;
  position: absolute;
  width: 0%;
  bottom: -30%;
  left: 58%;
  @media (max-width: 1300px) {
    bottom: -10%;
    left: 45%;
  }
`;
export default Nav;
