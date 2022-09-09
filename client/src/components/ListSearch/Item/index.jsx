import React from "react";
import { Wrapper, Wrapper2 } from "./Item.styles";

const Item = ({ label, date, onClick, currency, children }) => {
  return !children ? (
    <Wrapper onClick={onClick}>
      <label>{label}:</label>
      <p>{date}</p>
    </Wrapper>
  ) : (
    <Wrapper2 onClick={onClick}>
      <label>{label}:</label>
      <div>
        {children}
        {currency && <span>{currency}</span>}
      </div>
    </Wrapper2>
  );
};

export default Item;
