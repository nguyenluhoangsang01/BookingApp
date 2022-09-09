import React from "react";
import { Wrapper } from "./Item.styles";

const Item = ({ src, title, subtitle }) => {
  return (
    <Wrapper>
      <img src={src} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </Wrapper>
  );
};

export default Item;
