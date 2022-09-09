import React from "react";
import Button from "../Button";
import { Container, Items, Logo, Wrapper } from "./Navbar.styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../app/slices/authSlice";

const Navbar = () => {
  const { user } = useSelector(selectAuth);

  return (
    <Wrapper>
      <Container>
        <Logo>
          <Link to="/">Booking</Link>
        </Logo>
        {!user ? (
          <Items>
            <Button>
              <Link to="/register">Register</Link>
            </Button>
            <Button>
              <Link to="/login">Login</Link>
            </Button>
          </Items>
        ) : (
          <p>{user.username}</p>
        )}
      </Container>
    </Wrapper>
  );
};

export default Navbar;
