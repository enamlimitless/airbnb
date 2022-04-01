import Image from "next/image";
import React from "react";

const MediumCard = ({ img, title }) => {
  return (
    <div className="m-2 mt-10 rounded-xl hover:bg-gray-50 cursor-pointer hover:scale-105 transition-all hover:shadow-sm transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} className="rounded-lg" layout="fill" />
      </div>
        <h2 className="mt-3 text-2xl">{title}</h2>
    </div>
  );
};

export default MediumCard;
