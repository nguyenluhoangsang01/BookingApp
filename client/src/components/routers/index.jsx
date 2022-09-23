import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../assets/fakeData";
import { NotFound } from "../../pages";

const Routers = () => {
  return (
    <Routes>
      {routes.map((router, idx) => (
        <Route key={idx} path={router.path} element={router.content} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
