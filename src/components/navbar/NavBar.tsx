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
    <Box
      sx={{
        width: "100%",
        height: "100px",
        bgcolor: "primary.main",
      }}
    >
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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              style={{ color: "white", margin: "4px 20px 4px 20px" }}
              to='/products'
            >
              Products
            </Link>
            <Link
              style={{
                color: "white",
                margin: "4px 20px 4px 20px",
              }}
              to='/benefits'
            >
              Benefits
            </Link>
            <Link
              style={{ color: "white", margin: "4px 20px 4px 20px" }}
              to='/reviews'
            >
              Reviews
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "20px",
              alignItems: "center",
            }}
          >
            {!login ? (
              <>
                <Button
                  sx={{ borderRadius: "10px", fontSize: "16px", padding: 0 }}
                  variant='contained'
                  color='secondary'
                >
                  <Link
                    style={{ color: "white", padding: "8px 30px 8px 30px" }}
                    to='/login'
                  >
                    Login
                  </Link>
                </Button>
                <Button
                  sx={{
                    borderRadius: "10px",
                    fontSize: "16px",
                    border: "1px solid black",
                    padding: 0,
                  }}
                  variant='contained'
                  color='primary'
                >
                  <Link
                    style={{ color: "white", padding: "8px 30px 8px 30px" }}
                    to='/login'
                  >
                    Sign Up
                  </Link>
                </Button>
              </>
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
                <MenuItem>
                  <Link
                    style={{ color: "black", margin: "4px 20px 4px 20px" }}
                    to='/products'
                  >
                    Products
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    style={{ color: "black", margin: "4px 20px 4px 20px" }}
                    to='/benefits'
                  >
                    Benefits
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    style={{ color: "black", margin: "4px 20px 4px 20px" }}
                    to='/reviews'
                  >
                    Reviews
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Button
                    sx={{
                      display: { xs: "flex", md: "none" },
                      p: 0,
                      m: "auto",
                    }}
                    variant='contained'
                    color='secondary'
                  >
                    <Link
                      style={{ color: "white", padding: "8px 20px" }}
                      to='/login'
                    >
                      Login
                    </Link>
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
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
                  <Typography
                    sx={{ color: "black", fontSize: "20px", m: "auto" }}
                  >
                    {user.username}
                  </Typography>
                </MenuItem>

                <MenuItem>
                  <Link
                    style={{ color: "black", margin: "4px 20px 4px 20px" }}
                    to='/products'
                  >
                    Products
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    style={{ color: "black", margin: "4px 20px 4px 20px" }}
                    to='/benefits'
                  >
                    Benefits
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    style={{ color: "black", margin: "4px 20px 4px 20px" }}
                    to='/reviews'
                  >
                    Reviews
                  </Link>
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
                  <Button
                    sx={{ width: "100%" }}
                    onClick={logout}
                    variant='contained'
                    color='inherit'
                  >
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
