import { Home, Hotel, Hotels, Login, Register, Reset } from "../../pages";

const routes = [
  {
    display: "Home",
    path: "/",
    content: <Home />,
  },
  {
    display: "Hotels",
    path: "/hotels",
    content: <Hotels />,
  },
  {
    display: "Hotel",
    path: "/hotels/:id",
    content: <Hotel />,
  },
  {
    display: "Login",
    path: "/login",
    content: <Login />,
  },
  {
    display: "Register",
    path: "/register",
    content: <Register />,
  },
  {
    display: "Reset",
    path: "/reset",
    content: <Reset />,
  },
];

export default routes;
