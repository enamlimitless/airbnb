import Image from "next/image";
import React from "react";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section>
      <div className="relative h-96 min-w-[300px] my-10">
        <Image src={img} alt={title} className="rounded-2xl" objectFit="cover" layout="fill" />
        <div className="absolute top-28 left-12">
          <h2 className="text-4xl w-64 font-medium">{title}</h2>
          <p className="text-lg font-medium py-2">{description}</p>
          <button className="py-3 px-5 my-2 bg-black rounded-xl text-white hover:bg-purple-700 transition-all ease-in-out hover:shadow-md">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default LargeCard;
