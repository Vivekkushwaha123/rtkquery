import React from "react";
const style = {
  label: "font-bold flex",
  input: "w-5/6 border p-1 border-2",
};

const Input = ({ title, name, value, placeholder, type, handleClick }) => {
  return (
    <div className="name my-1">
      <label className={style.label} htmlFor={name}>
        {title + ":"}
      </label>

      <input
        className={style.input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={handleClick}
      />
    </div>
  );
};

export default Input;
