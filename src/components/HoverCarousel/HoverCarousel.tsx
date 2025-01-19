"use client";

import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControls,
  useAnimationFrame,
} from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

interface HoverCarouselProps {
  names: string[];
}

const HoverCarousel: React.FC<HoverCarouselProps> = ({ names }) => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [extendedNames, setExtendedNames] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (width > 0) {
      const fullList: string[] = [];
      let totalWidth = 0;

      while (totalWidth < width * 2) {
        fullList.push(...names);
        totalWidth += names.length * 200;
      }

      setExtendedNames(fullList);
    }
  }, [width, names]);

  useAnimationFrame((_, delta) => {
    if (!isHovered && width > 0) {
      const currentX = xTranslation.get();
      const speed = 50;
      const newX = currentX - (speed * delta) / 1000;

      if (newX <= -width) {
        xTranslation.set(0);
      } else {
        xTranslation.set(newX);
      }
    }
  });

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="absolute left-0 flex w-full space-x-10 items-center h-full"
      ref={ref}
      style={{
        x: xTranslation,
      }}>
      {extendedNames.map((name, index) => (
        <motion.div
          key={index}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}>
          {name}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HoverCarousel;
