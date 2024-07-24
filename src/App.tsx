import { Outlet } from "react-router";
import "./App.css";
import { Container } from "@mui/material";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth='lg'>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
