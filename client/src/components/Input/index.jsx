import React from "react";
import { StyledInput, StyledLabel, Wrapper } from "./Input.styles";

const Input = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  innerRef,
}) => {
  return (
    <Wrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}

      <StyledInput
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={innerRef}
      />
    </Wrapper>
  );
};

export default Input;
