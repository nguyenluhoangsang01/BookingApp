import React from "react";
import { Helmet, ListResult, ListSearch } from "../../components";
import { Container, Wrapper } from "./Hotels.styles";

const Hotels = () => {
  return (
    <Helmet title="Hotels">
      <Wrapper>
        <Container>
          <ListSearch />
          <ListResult />
        </Container>
      </Wrapper>
    </Helmet>
  );
};

export default Hotels;
