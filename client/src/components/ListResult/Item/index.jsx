import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import {
  CancelOp,
  CancelOpSubtitle,
  Description,
  Details,
  Distance,
  Features,
  Price,
  Rating,
  Score,
  StyledImg,
  Subtitle,
  Tax,
  TaxiOp,
  Texts,
  Title,
  Wrapper,
} from "./Item.styles";

const Item = (item) => {
  return (
    <Wrapper>
      <StyledImg src={item.photos[0]} alt={item.name} />

      <Description>
        <Title>{item.name}</Title>
        <Distance>{item.distance} km from centre</Distance>
        <TaxiOp>Free airport taxi</TaxiOp>
        <Subtitle>Studio Apartment with Air conditioning</Subtitle>
        <Features>Entire studio - 1 bathroom - 21m2 full bed</Features>
        <CancelOp>FREE cancellation</CancelOp>
        <CancelOpSubtitle>
          You can cancel later, so lock in this great price today.
        </CancelOpSubtitle>
      </Description>

      <Details>
        <Rating>
          <span>Excellent</span>
          <Score>{item.rating}</Score>
        </Rating>
        <Texts>
          <Price>{item.cheapestPrice} USD</Price>
          <Tax>Includes taxes and fees</Tax>
          <Link
            to={`/hotels/${item._id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Button primary width="full">
              See availability
            </Button>
          </Link>
        </Texts>
      </Details>
    </Wrapper>
  );
};

export default Item;
