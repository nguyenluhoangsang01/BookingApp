import React from "react";
import { services } from "../../assets/fakeData";
import { Container, Wrapper } from "./Footer.styles";
import Item from "./Item";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        {services.map((service, idx) => (
          <Item key={idx}>{service}</Item>
        ))}
      </Container>

      <Container>
        {services.map((service, idx) => (
          <Item key={idx}>{service}</Item>
        ))}
      </Container>

      <Container>
        {services.map((service, idx) => (
          <Item key={idx}>{service}</Item>
        ))}
      </Container>

      <Container>
        {services.map((service, idx) => (
          <Item key={idx}>{service}</Item>
        ))}
      </Container>

      <Container>
        {services.map((service, idx) => (
          <Item key={idx}>{service}</Item>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Footer;
