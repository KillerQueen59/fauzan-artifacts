"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ShowHideComponentProps {
  children: React.ReactNode;
  className?: string;
}

const ShowHideComponent: React.FC<ShowHideComponentProps> = ({
  children,
  className,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default ShowHideComponent;
