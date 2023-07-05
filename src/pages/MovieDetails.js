import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieStates } from "../components/MovieStates";
import { motion } from "framer-motion";
import {
  workCardAAnimations,
  detailsTitleAnimations,
  detailsImgAnimations,
} from "./Animations";

const MovieDetails = () => {
  const url = useLocation();
  const [movies, setMovies] = useState(MovieStates);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log(url.pathname);

    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === url.pathname
    );

    setMovie(currentMovie[0]);
    console.log(currentMovie[0]);
  }, [movies, movie, url]);

  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <motion.h2
              variants={detailsTitleAnimations}
              initial="hidden"
              whileInView="show"
              exit="exit"
            >
              {movie.title}
            </motion.h2>
            <motion.img
              variants={detailsImgAnimations}
              initial="hidden"
              whileInView="show"
              exit="exit"
              src={movie.mainImg}
              alt="movie"
            />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <motion.img
              variants={detailsImgAnimations}
              initial="hidden"
              whileInView="show"
              exit="exit"
              src={movie.secondaryImg}
              alt=""
            />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: ghostwhite;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    margin-top: -2rem;
    top: 20%;
    left: 42%;
    transform: translate(-50%, -10%);
  }
  img {
    margin-top: 5rem;
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const AwardStyle = styled(motion.div)`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle
      variants={detailsImgAnimations}
      initial="hidden"
      whileInView="show"
      exit="exit"
    >
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetails;
