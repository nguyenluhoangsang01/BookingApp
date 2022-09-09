import React, { useEffect } from "react";
import { Container, Wrapper } from "./Reserve.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getHotelRoomReducerAsync,
  selectHotels,
} from "../../app/slices/hotelsSlice";

const Reserve = ({ setOpenModal }) => {
  // Redux
  const dispatch = useDispatch();
  const {
    data: { hotel },
  } = useSelector(selectHotels);

  // Handle async action
  useEffect(() => {
    dispatch(getHotelRoomReducerAsync(hotel._id));
  }, [dispatch, hotel._id]);

  return (
    <Wrapper onClick={() => setOpenModal((prevState) => !prevState)}>
      <Container>Reserve</Container>
    </Wrapper>
  );
};

export default Reserve;
