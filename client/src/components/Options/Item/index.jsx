import React from "react";
import { StyledButton, Wrapper } from "./Item.styles";

const Item = ({
  label,
  subLabel,
  value,
  disabledDecrement,
  disabledIncrement,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <Wrapper>
      <label>
        {label}
        {subLabel && <span>{subLabel}</span>}
      </label>

      <div>
        <StyledButton
          disabledDecrement={disabledDecrement}
          onClick={handleDecrement}
        >
          -
        </StyledButton>
        <span>{value}</span>
        <StyledButton
          disabledIncrement={disabledIncrement}
          onClick={handleIncrement}
        >
          +
        </StyledButton>
      </div>
    </Wrapper>
  );
};

export default Item;
