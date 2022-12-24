import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="flex justify-center my-20">
      <h1 className="font-bold text-3xl">{title}</h1>
    </div>
  );
};

export default Heading;
