import React from "react";

function TextField(props) {
  const { type, name, value, placeholder, onChange, className, onKeyPress } =
    props;
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      onKeyPress={onKeyPress}
    />
  );
}

export default TextField;
