import React from "react";
import { Wrapper } from "./Item.styles";

const Item = ({ icon, children, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <span>{icon}</span>
      {children}
    </Wrapper>
  );
};

export default Item;
