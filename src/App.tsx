import { Outlet } from "react-router";
import "./App.css";
import { Container } from "@mui/material";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth='lg'>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
