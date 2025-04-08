import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) => {
  return (
    <div class="input-group">
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      <br />
      <br />
    </div>
  );
};

export default Input;
