import React from "react";
import Button from "../Button";
import { Container, Info, Items, Logo, Wrapper } from "./Navbar.styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutReducer, selectAuth } from "../../app/slices/authSlice";

const Navbar = () => {
  // Redux
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

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
          <Info>
            <p>{user.username}</p>
						<span>-</span>
            <Button>
              <Link to="/login" onClick={() => dispatch(logoutReducer())}>
                Logout
              </Link>
            </Button>
          </Info>
        )}
      </Container>
    </Wrapper>
  );
};

export default Navbar;
