import React from "react";
import { useSelector } from "react-redux";
import { loginReducerAsync, selectAuth } from "../../app/slices/authSlice";
import { Button, Helmet, Input } from "../../components";
import useForm from "../../hooks/useForm";
import { Wrapper } from "./Login.styles";

const Login = () => {
  // Redux
  const { error, loading } = useSelector(selectAuth);
  // Use custom hook to handle form state
  const initialValues = {
    username: "",
    password: "",
  };
  const { values, onChange, onSubmit } = useForm(
    initialValues,
    loginReducerAsync
  );

  return (
    <Helmet title="Login">
      <Wrapper onSubmit={onSubmit}>
        <Input
          type="text"
          label="Username"
          name="username"
          placeholder="Enter your username"
          value={values.username}
          onChange={onChange}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={onChange}
        />

        {error && <p>{error}</p>}

        <Button width="full" disabled={loading} onClick={onSubmit}>
          Login
        </Button>
      </Wrapper>
    </Helmet>
  );
};

export default Login;
