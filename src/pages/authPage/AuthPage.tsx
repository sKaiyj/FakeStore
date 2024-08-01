import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../API/API";
import { useNavigate } from "react-router";
import { getCart } from "../../API/API";
export default function AuthPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const log = useSelector((state: { login: boolean }) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (log) navigate("/");
  }, [log]);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    login({ username, password }).then((data: any) => {
      dispatch({
        type: "LOGIN",
        payload: {
          user: { username: data.user, userId: data.sub },
        },
      });
      getCart(data.sub).then((data) => {
        dispatch({
          type: "SET_BASKET",
          payload: data.products,
        });
      });
    });
  };
  return (
    <Container
      maxWidth='xs'
      sx={{ mt: 7, color: "#E5E5E5", minHeight: "75vh" }}
    >
      <Typography variant='h5' component='h2' gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label='Username'
              variant='filled'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              fullWidth
              sx={{ bgcolor: "#E5E5E5", borderRadius: "10px" }}
            />
            <Typography>mor_2314</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Password'
              variant='filled'
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              sx={{ bgcolor: "#E5E5E5", borderRadius: "10px" }}
              fullWidth
            />
            <Typography>83r5^_</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' color='primary' fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography sx={{ mt: 2 }}>
        Don't have an account?{" "}
        <Link style={{ color: "#E5E5E5" }} href='/register'>
          Register
        </Link>
      </Typography>
    </Container>
  );
}
