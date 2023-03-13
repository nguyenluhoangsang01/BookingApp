import React from "react";
import { useSelector } from "react-redux";
import { registerReducerAsync, selectAuth } from "../../app/slices/authSlice";
import { Button, Helmet, Input } from "../../components";
import useForm from "../../hooks/useForm";
import { Wrapper } from "../Login/Login.styles";

const Register = () => {
  // Redux
  const { error, loading } = useSelector(selectAuth);
  // Use custom hook to handle form state
  const initialValues = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const { values, onChange, onSubmit } = useForm(
    initialValues,
    registerReducerAsync
  );

  return (
    <Helmet title="Register">
      <Wrapper onSubmit={onSubmit}>
        <Input
          type="text"
          label="Username"
          name="username"
          value={values.username}
          onChange={onChange}
          placeholder="Please enter username"
        />
        <Input
          type="email"
          label="Email"
          name="email"
          value={values.email}
          onChange={onChange}
          placeholder="Please enter email"
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={values.password}
          onChange={onChange}
          placeholder="Please enter password"
        />
        <Input
          type="password"
          label="Repeat password"
          name="repeatPassword"
          value={values.repeatPassword}
          onChange={onChange}
          placeholder="Please enter repeat password"
        />

        {error && <p>{error}</p>}

        <Button width="full" disabled={loading} onClick={onSubmit}>
          Create a new
        </Button>
      </Wrapper>
    </Helmet>
  );
};

export default Register;
