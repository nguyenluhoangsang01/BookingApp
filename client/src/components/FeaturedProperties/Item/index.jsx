import React from "react";
import { Wrapper } from "./Item.styles";

const Item = ({ src, name, city, cheapestPrice, rating, reviewScore }) => {
  return (
    <Wrapper>
      <img src={src} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5>{city}</h5>
        <p>Starting from {cheapestPrice} VND</p>
        <div>
          <p>{rating}</p>
          <div>
            <span>Exceptional</span>

            {reviewScore && (
              <p>
                - {reviewScore} review{reviewScore > 1 && "s"}
              </p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Item;
