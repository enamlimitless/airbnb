import Image from "next/image";
import React from "react";
const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center space-x-3 m-2 mt-10 rounded-xl hover:bg-gray-50 cursor-pointer hover:scale-105 transition-all hover:shadow-sm transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} className="rounded-lg" layout="fill" />
      </div>
      <div>
        <h2>{location}</h2>
        <p>{distance}</p>
      </div>
    </div>
  );
};

export default SmallCard;
