import { format } from "date-fns";
import React, { useCallback, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  countDays,
  selectCounterOptions,
} from "../../app/slices/counterOptionsSlice";
import { getHotelsByCityReducerAsync } from "../../app/slices/hotelsSlice";
import Button from "../Button";
import Input from "../Input";
import Options from "../Options";
import Item from "./Item";
import { Title, Wrapper } from "./ListSearch.styles";

const ListSearch = () => {
  // Router
  const { state } = useLocation();
  // State
  const [toggleDate, setToggleDate] = useState(false);
  const [date, setDate] = useState(state.date);
  const [toggleOptions, setToggleOptions] = useState(false);
  // Search state
  const [destination, setDestination] = useState(state.destination);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999999999999);
  // Redux
  const { adult, children, room } = useSelector(selectCounterOptions);
  const dispatch = useDispatch();

  // Handle action
  const handleSubmit = useCallback(() => {
    window.scrollTo(0, 0);
    dispatch(getHotelsByCityReducerAsync(destination, minPrice, maxPrice));
  }, [destination, minPrice, maxPrice, dispatch]);
  // Handle async action
  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  useEffect(() => {
    dispatch(
      countDays(
        Number(date[0].endDate.toString().substring(8, 10)) -
          Number(date[0].startDate.toString().substring(8, 10))
      )
    );
  }, [date, dispatch]);

  return (
    <Wrapper>
      <Title>Search</Title>

      <Input
        label="Destination/property name:"
        name="dpn"
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter a destination or property name"
      />

      <Item
        label="Check-in date"
        date={`${format(date[0].startDate, "E, dd MMM yyyy")} - ${format(
          date[0].endDate,
          "E, dd MMM yyyy"
        )}`}
        onClick={() => setToggleDate((prevState) => !prevState)}
      />
      {toggleDate && (
        <DateRange
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={new Date()}
        />
      )}

      <Item label="Min price per night" currency="VND">
        <Input
          type="text"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </Item>

      <Item label="Max price per night" currency="VND">
        <Input
          type="text"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </Item>

      <Item
        label="Options"
        onClick={() => setToggleOptions((prevState) => !prevState)}
      >
        <p>
          {adult} adult{adult > 1 && "s"} - {children} children - {room} room
          {room > 1 && "s"}
        </p>
      </Item>
      {toggleOptions && <Options />}

      <Button primary width="full" onClick={handleSubmit}>
        Search
      </Button>
    </Wrapper>
  );
};

export default ListSearch;
//
