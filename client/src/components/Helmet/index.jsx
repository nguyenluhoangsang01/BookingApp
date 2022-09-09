import React from "react";

const Helmet = ({ title, children }) => {
  document.title = `Booking | ${title}`;

  return <div>{children}</div>;
};

export default Helmet;
