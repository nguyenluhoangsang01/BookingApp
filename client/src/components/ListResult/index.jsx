import React from "react";
import { useSelector } from "react-redux";
import { selectHotels } from "../../app/slices/hotelsSlice";
import Item from "./Item";
import { Wrapper } from "./ListResult.styles";

const ListResult = () => {
  const {
    data: { hotelsByCity },
  } = useSelector(selectHotels);

  return (
    <Wrapper>
      {hotelsByCity.map((item, idx) => (
        <Item key={idx} {...item} />
      ))}
    </Wrapper>
  );
};

export default ListResult;
