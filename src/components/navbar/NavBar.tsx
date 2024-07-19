import { Container, Box, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusketIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Box sx={{ width: "100%", height: "50px", bgcolor: "primary.main" }}>
      <Container maxWidth='lg' sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Link to='/'>
            <Typography variant='h4' sx={{ color: "white" }}>
              FakeStore
            </Typography>
          </Link>
          <Box>
            <IconButton>
              <Link to='/basket'>
                <BusketIcon sx={{ color: "white", fontSize: "30px" }} />
              </Link>
            </IconButton>
            <IconButton>
              <Link to='/login'>
                <AccountCircleIcon sx={{ color: "white", fontSize: "30px" }} />
              </Link>
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
