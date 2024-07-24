import { Container, Box, IconButton, Typography, Button } from "@mui/material";
import BusketIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const user = useSelector(
    (state: { user: { user: { username: string } } }) => state.user.user
  );
  const login = useSelector((state: { login: boolean }) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "SET_BASKET", payload: [] });
    navigate("/");
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "20px",
              alignItems: "center",
            }}
          >
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
          {!login ? (
            <Button
              sx={{ display: { xs: "flex", md: "none" } }}
              variant='contained'
              color='inherit'
            >
              <Link style={{ color: "black" }} to='/login'>
                Login
              </Link>
            </Button>
          ) : (
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                id='basic-button'
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup='true'
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  color: "white",
                }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Typography sx={{ color: "black", fontSize: "20px" }}>
                    {user.username}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link style={{ color: "black", width: "100%" }} to='/basket'>
                    <Button
                      variant='outlined'
                      sx={{ color: "black", width: "100%", fontSize: "15px" }}
                    >
                      Basket
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button onClick={logout} variant='contained' color='inherit'>
                    LogOut
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
