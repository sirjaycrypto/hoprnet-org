// Our custom easing
export const easing = [0.25, 0.1, 0.25, 1];

export const fadeInUp = {
  initial: {
    y: 80,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const fadeInDown = {
  initial: {
    y: -80,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

export const staggerHaft = {
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};
