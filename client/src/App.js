import { useSelector } from "react-redux";
import { selectAuth } from "./app/slices/authSlice";
import { Header, Navbar, Routers } from "./components";

function App() {
  const { user } = useSelector(selectAuth);

  return (
    <>
      <Navbar />
      <Header />

      {(!user?.isAdmin || user === null) ? <Routers /> : <Routers perm="admin" />}
    </>
  );
}

export default App;
