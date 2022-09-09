import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countHotelsByCityReducerAsync,
  selectHotels,
} from "../../app/slices/hotelsSlice";
import { featured } from "../../assets/fakeData";
import { Container, Wrapper } from "./Featured.styles";
import Item from "./Item";

const Featured = () => {
  // const {
  //   data: { hotelsByCity },
  // } = useSelector(selectHotels);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(countHotelsByCityReducerAsync("HCM"));
  // }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        {featured.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Featured;
