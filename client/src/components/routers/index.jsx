import React from "react";
import { Route, Routes } from "react-router-dom";
import { sidebarRoutes } from "../../assets/fakeData";
import { NotFound } from "../../pages";

const Routers = () => {
  return (
    <Routes>
      {sidebarRoutes.map((router, idx) => (
        <Route key={idx} path={router.path} element={router.content} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
