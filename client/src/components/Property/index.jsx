import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countHotelByTypeReducerAsync,
  selectHotels,
} from "../../app/slices/hotelsSlice";
import { property } from "../../assets/fakeData";
import Item from "./Item";
import { Container, Wrapper } from "./Property.styles";

const Property = () => {
  // Redux
  const dispatch = useDispatch();
  const {
    data: { hotelTypes },
  } = useSelector(selectHotels);

  useEffect(() => {
    dispatch(countHotelByTypeReducerAsync());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        {hotelTypes.map((item, idx) => (
          <Item
            key={idx}
            count={item.count}
            title={item.type}
            src={property[idx]?.src}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Property;
