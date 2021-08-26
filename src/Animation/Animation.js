import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

function Animation({ children }) {
  const fade = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      fade.start("visible");
    }
  }, [fade, inView]);

  return (
    <motion.div
      ref={ref}
      animate={fade}
      initial="hidden"
      transition={{ duration: 0.9 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default Animation;
