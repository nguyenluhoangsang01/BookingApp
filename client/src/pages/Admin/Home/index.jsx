import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../app/slices/authSlice";
import { Helmet, Routers, Sidebar } from "../../../components";
import { Wrapper } from "./Home.styles";

const AdminHome = () => {
  const { user } = useSelector(selectAuth);

  return (
    <Helmet title="Admin home">
      <Wrapper>
        <Sidebar />

        {user?.isAdmin && user !== null ? (
          <Routers perm="admin" />
        ) : (
          <Routers />
        )}
      </Wrapper>
    </Helmet>
  );
};

export default AdminHome;
