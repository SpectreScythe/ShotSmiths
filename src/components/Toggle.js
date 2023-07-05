import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      layout
      className="question"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <motion.h4>{title}</motion.h4>
      <div className="faq-line"></div>
      {toggle ? children : ""}
    </motion.div>
  );
};

export default Toggle;
