import React from "react";
import { Wrapper } from "./Item.styles";

const Item = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Item;
