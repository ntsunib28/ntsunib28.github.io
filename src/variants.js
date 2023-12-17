export const fadeIn = (from, type, delay, duration) => {
    return {
      hidden: {
        x: from === "left" ? '-10vw' : from === "right" ? '10vw' : 0,
        y: from === "top" ? '-10vh' : from === "bottom" ? '10vh' : 0,
        opacity: 0,
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

export const smallToBig = {
    small: { opacity: 0.2, scale: 0.5},
    big: { opacity: 1, scale: 1, transition: { duration: 1 }}
  };

export const hover = (scale, duration) => {
  return {
    normal: { scale: 1},
    hover: { scale: scale, transition: { duration: duration }}
  }
  };