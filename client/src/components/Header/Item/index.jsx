import React from "react";
import { Wrapper } from "./Item.styles";

const Item = ({ display, path, icon }) => {
  return (
    <Wrapper>
      <span>{icon}</span>
      <label>{display}</label>
    </Wrapper>
  );
};

export default Item;
