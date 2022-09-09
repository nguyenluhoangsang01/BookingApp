import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHotelsWithFilterTrueReducerAsync,
  selectHotels,
} from "../../app/slices/hotelsSlice";
import { featuredProperty } from "../../assets/fakeData";
import { Container, Wrapper } from "./FeaturedProperties.styles";
import Item from "./Item";

const FeaturedProperties = () => {
  const dispatch = useDispatch();
  const {
    data: { hotelsWithFilterTrue },
  } = useSelector(selectHotels);

  useEffect(() => {
    dispatch(getHotelsWithFilterTrueReducerAsync());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        {hotelsWithFilterTrue.map((item, idx) => (
          <Item key={idx} {...item} src={featuredProperty[idx]} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default FeaturedProperties;
