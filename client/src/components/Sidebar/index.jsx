import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../assets/fakeData";
import { Container, Item, Wrapper } from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <Wrapper>
      <Container>
        {routes.map((item) => (
          <Item key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </Item>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
