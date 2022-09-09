import React from "react";
import { Wrapper } from "./Item.styles";

const Item = ({ src, title, count }) => {
  title = count < 2 ? title.slice(0, -1) : title;

  return (
    count > 0 && (
      <Wrapper>
        <img src={src} alt={title} />
        <div>
          <h4>{title}</h4>
          <p>
            {count} {title}
          </p>
        </div>
      </Wrapper>
    )
  );
};

export default Item;
