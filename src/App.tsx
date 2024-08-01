import { Outlet } from "react-router";
import "./App.css";
import { Box, Container } from "@mui/material";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <NavBar />
      <Container maxWidth='lg'>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
