import React from "react";

const Button = ({ btnName, classStyle, handleFunction }) => {
  return (
    <>
      <button className={classStyle} onClick={handleFunction}>
        {btnName}
      </button>
    </>
  );
};

export default Button;
