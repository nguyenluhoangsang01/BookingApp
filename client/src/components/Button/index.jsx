import React from "react";
import { Wrapper } from "./Button.styles";

const Button = ({ primary, width, disabled, children, onClick }) => {
  return (
    <Wrapper
      primary={primary}
      disabled={disabled}
      width={width}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
