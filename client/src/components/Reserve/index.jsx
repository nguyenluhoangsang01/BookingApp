import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { selectCounterOptions } from "../../app/slices/counterOptionsSlice";
import {
  getHotelRoomReducerAsync,
  selectHotels,
} from "../../app/slices/hotelsSlice";
import { updateRoomReducerAsync } from "../../app/slices/roomSlice";
import Button from "../Button";
import Item from "./Item";
import { Container, Wrapper } from "./Reserve.styles";

const Reserve = ({ id, setOpenModal }) => {
  // State
  const [selectedRooms, setSelectedRooms] = useState([]);
  // Redux
  const dispatch = useDispatch();
  const {
    data: { rooms },
  } = useSelector(selectHotels);
  const { dates } = useSelector(selectCounterOptions);
  // Utils
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    let dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);
  const isAvailable = (roomNumberUnavailableDates) => {
    const isFound = roomNumberUnavailableDates?.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !!isFound;
  };

  // Handle async actions
  useEffect(() => {
    dispatch(getHotelRoomReducerAsync(id));
  }, [dispatch, id]);

  // Handle actions
  const handleSelect = (e) => {
    const { checked, value } = e.target;

    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((room) => room !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((selectedRoom) =>
          dispatch(updateRoomReducerAsync(selectedRoom, { dates: allDates }))
        )
      );
      setOpenModal((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Container>
        <AiOutlineClose
          onClick={() => setOpenModal((prevState) => !prevState)}
        />

        <span>Select your rooms:</span>
        {rooms.map((room, idx) => (
          <Item
            key={idx}
            room={room}
            isAvailable={isAvailable}
            handleSelect={handleSelect}
          />
        ))}

        <Button primary width="full" onClick={handleClick}>
          Reserve now!
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Reserve;
