import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../API/API";
import { useNavigate } from "react-router";
import { getCart } from "../../API/API";
export default function AuthPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const user = useSelector((state: any) => state.user);
  const log = useSelector((state: any) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (log) navigate("/");
  }, [log]);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    login({ username: "mor_2314", password: "83r5^_" }).then((data: any) => {
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
    <Container maxWidth='xs' sx={{ mt: 4 }}>
      <Typography variant='h5' component='h2' gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label='Username'
              variant='outlined'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Password'
              variant='outlined'
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' color='primary' fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
