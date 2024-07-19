import { Container, Box, IconButton, Typography, Button } from "@mui/material";
import BusketIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const NavBar = () => {
  const user = useSelector((state: any) => state.user.user);
  const login = useSelector((state: any) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
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
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {!login ? (
              <Button variant='contained' color='inherit'>
                <Link style={{ color: "black" }} to='/login'>
                  Login
                </Link>
              </Button>
            ) : (
              <>
                <IconButton>
                  <Link to='/basket'>
                    <BusketIcon sx={{ color: "white", fontSize: "30px" }} />
                  </Link>
                </IconButton>
                <Typography sx={{ color: "white", fontSize: "20px" }}>
                  {user.username}
                </Typography>
                <Button onClick={logout} variant='contained' color='inherit'>
                  LogOut
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
