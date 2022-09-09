import React from "react";
import Button from "../Button";
import Input from "../Input";
import { Actions, Container, Description, Title, Wrapper } from "./Mail.styles";

const Mail = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Save time, save money!</Title>
        <Description>Sign up and we'll send the best deals to you</Description>

        <Actions>
          <Input type="text" placeholder="Your email" />
          <Button>Search</Button>
        </Actions>
      </Container>
    </Wrapper>
  );
};

export default Mail;
