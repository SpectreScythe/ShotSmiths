import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import { motion } from "framer-motion";
import { faqAnimations } from "../pages/Animations";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        <span>Frequently Asked Questions</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How do I Start?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                augue ut lectus arcu bibendum at varius vel pharetra vel turpis
                nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum
                enim facilisis gravida neque convallis a cras semper auctoraugue
                ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim
                facilisis gravida neque convallis a cras semper auctor
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What will be the daily schedule?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                augue ut lectus arcu bibendum at varius vel pharetra vel turpis
                nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum
                enim facilisis gravida neque convallis a cras semper auctoraugue
                ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim
                facilisis gravida neque convallis a cras semper auctor
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                augue ut lectus arcu bibendum at varius vel pharetra vel turpis
                nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum
                enim facilisis gravida neque convallis a cras semper auctoraugue
                ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim
                facilisis gravida neque convallis a cras semper auctor
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What services are offered?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                augue ut lectus arcu bibendum at varius vel pharetra vel turpis
                nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum
                enim facilisis gravida neque convallis a cras semper auctoraugue
                ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim
                facilisis gravida neque convallis a cras semper auctor
              </p>
            </div>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #23d997;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1.7rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
