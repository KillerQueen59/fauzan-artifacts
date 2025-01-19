import React from "react";

interface CarauselCardProps {
  name: string;
}

const CarauselCard: React.FC<CarauselCardProps> = ({ name }) => {
  return (
    <div className="flex space-x-10 min-w-fit">
      {/* circle */}
      <div className="h-5 w-5 rounded-full bg-secondary-200 my-auto" />
      <div className="text-3xl text-secondary-200">{name}</div>
    </div>
  );
};

export default CarauselCard;
