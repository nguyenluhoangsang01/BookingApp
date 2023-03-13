import {
  AdminHome,
  AdminHotels,
  AdminLogin,
  Home,
  Hotel,
  Hotels,
  Login,
  Register,
  Reset,
} from "../../pages";

const routes = [
  {
    path: "/",
    content: <Home />,
  },
  {
    path: "/hotels",
    content: <Hotels />,
  },
  {
    path: "/hotels/:id",
    content: <Hotel />,
  },
  {
    path: "/login",
    content: <Login />,
  },
  {
    path: "/register",
    content: <Register />,
  },
  {
    path: "/reset",
    content: <Reset />,
  },
  {
    name: "Home",
    path: "/admin",
    content: <AdminHome />,
  },
  {
    name: "Login",
    path: "/admin/login",
    content: <AdminLogin />,
  },
  {
    name: "Hotels",
    path: "/admin/hotels",
    content: <AdminHotels />,
  },
];

export default routes;
