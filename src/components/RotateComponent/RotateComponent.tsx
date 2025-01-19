"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface RotateComponentProps {
  children: React.ReactNode;
  className?: string;
}

const RotateComponent: React.FC<RotateComponentProps> = ({
  children,
  className,
}) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };
  return (
    <motion.div
      className={className}
      onClick={handleClick}
      animate={{ rotate: isRotated ? 360 : 0 }}
      transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};

export default RotateComponent;
