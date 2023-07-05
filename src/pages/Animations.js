// Nav

export const navLinksAnimations = {
  whileTap: {
    scale: 0.5,
  },
};

// About Us --- Intro Section

export const topTitleAnimations = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.25, staggerChildren: 1, when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};
export const titleTextAnimations = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 1.5, staggerChildren: 1 },
  },
};
export const titleBtnAnimations = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 1 } },
  exit: { opacity: 0, y: 50, transition: { duration: 1, staggerChildren: 1 } },
};
export const imgAnimations = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: { duration: 1, staggerChildren: 1 },
  },
};
export const containerAnimations = {
  hidden: {},
  show: {
    transition: {
      hidden: { opacity: 0, x: 100 },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          staggerChildren: 1,
          when: "afterChildren",
        },
      },
      exit: {
        opacity: 0,
        x: 100,
        transition: {
          duration: 1,
          staggerChildren: 1,
          when: "afterChildren",
        },
      },
    },
  },
};

// // About Us --- Services Section

export const serviceTitleAnimations = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};

export const cardDAnimations = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};

export const cardAAnimations = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};

export const cardBAnimations = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};

export const cardCAnimations = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};

// About Us --- FAQ Section

export const faqAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.5, staggerChildren: 1 },
  },
};

// Our Work --- Containers

export const workImgAnimations = {
  hidden: { opacity: 0, scale: 0.75 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};

export const workTitleAnimations = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};

export const workLineAnimations = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 2.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: { duration: 2.25, staggerChildren: 1 },
  },
};

// Our Work --- Movie Details

export const detailsImgAnimations = {
  hidden: { opacity: 0, scale: 0.75 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};

export const detailsTitleAnimations = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};

// Contact

export const contactTitle = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 1.25, staggerChildren: 1 },
  },
};
