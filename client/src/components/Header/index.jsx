import React from "react";
import { useLocation } from "react-router-dom";
import { headerItems } from "../../assets/fakeData";
import Search from "../Search";
import { Container, Description, List, Title, Wrapper } from "./Header.styles";
import Item from "./Item";

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <Wrapper>
      <Container isHome={isHome}>
        <List>
          {headerItems.map((item, idx) => (
            <Item
              key={idx}
              display={item.display}
              path={item.path}
              icon={item.icon}
            />
          ))}
        </List>

        {isHome && (
          <>
            <Title>Find your next stay</Title>
            <Description>
              Search low prices on hotels, homes and much more...
            </Description>

            <Search />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;
