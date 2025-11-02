import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const variantStyles = {
  "fade-up": { hidden: "translate3d(0, 24px, 0)" },
  "fade-down": { hidden: "translate3d(0, -24px, 0)" },
  "fade-right": { hidden: "translate3d(24px, 0, 0)" },
  "fade-left": { hidden: "translate3d(-24px, 0, 0)" },
  scale: { hidden: "scale(0.95)" },
};

const Reveal = ({ children, variant, delay, duration, threshold }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return () => {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  const transformHidden =
    variantStyles[variant]?.hidden || variantStyles["fade-up"].hidden;

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transformHidden,
        transition: `opacity ${duration}ms ease, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Box>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.keys(variantStyles)),
  delay: PropTypes.number,
  duration: PropTypes.number,
  threshold: PropTypes.number,
};

Reveal.defaultProps = {
  variant: "fade-up",
  delay: 0,
  duration: 600,
  threshold: 0.25,
};

export default Reveal;
