"use client";
import React, { useEffect, useState } from "react";
import CarauselCard from "../CarouselCard/CarouselCard";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";

interface CarouselProps {
  names: string[];
}

const Carousel: React.FC<CarouselProps> = ({ names }) => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [extendedNames, setExtendedNames] = useState<string[]>([]);

  useEffect(() => {
    // Duplicate names to fill space and prevent gaps
    if (width > 0) {
      const fullList: string[] = [];
      let totalWidth = 0;

      while (totalWidth < width * 2) {
        fullList.push(...names);
        totalWidth += names.length * 200; // Assume an approximate width for each card
      }

      setExtendedNames(fullList);
    }
  }, [width, names]);

  useEffect(() => {
    let controls;
    let finalPosition = -width;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <motion.div
      className="absolute left-0 flex w-full space-x-10 items-center h-full"
      ref={ref}
      style={{
        x: xTranslation,
      }}>
      {extendedNames.map((name, index) => (
        <CarauselCard key={index} name={name} />
      ))}
    </motion.div>
  );
};

export default Carousel;
