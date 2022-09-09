import React from "react";
import {
  Featured,
  FeaturedProperties,
  Footer,
  Helmet,
  Mail,
  Property,
} from "../../components";
import { Container, Title, Wrapper } from "./Home.styles";

const Home = () => {
  return (
    <Helmet title="Home">
      <Wrapper>
        <Container>
          <Featured />

          <Title>Browse by property type</Title>
          <Property />

          <Title>Homes guests love</Title>
          <FeaturedProperties />
        </Container>

        <Mail />

        <Container>
          <Footer />
        </Container>
      </Wrapper>
    </Helmet>
  );
};

export default Home;
